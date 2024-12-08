"use client";

import { cn } from "@nextui-org/react";
import { ImagePlus } from "lucide-react";
import React, { ChangeEvent, DragEvent, useRef, useState } from "react";

interface FileUploaderProps {
	maxFiles?: number;
	maxFileSize?: number; // in bytes
	allowedFileTypes?: string[];
	onUpload?: (files: File[]) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({
	maxFiles = 5,
	maxFileSize = 10 * 1024 * 1024, // 10MB
	allowedFileTypes = ["*"],
	// onUpload,
}) => {
	const [dragActive, setDragActive] = useState<boolean>(false);
	const [files, setFiles] = useState<File[]>([]);
	const [errors, setErrors] = useState<string[]>([]);
	const inputRef = useRef<HTMLInputElement>(null);

	const validateFiles = (
		newFiles: File[],
	): { validFiles: File[]; fileErrors: string[] } => {
		const validFiles: File[] = [];
		const fileErrors: string[] = [];

		newFiles.forEach(file => {
			// Check file count
			if (files.length + validFiles.length >= maxFiles) {
				fileErrors.push(`Maximum of ${maxFiles} files allowed`);
				return;
			}

			// Check file size
			if (file.size > maxFileSize) {
				fileErrors.push(
					`${file.name} exceeds maximum file size of ${maxFileSize / 1024 / 1024}MB`,
				);
				return;
			}

			// Check file type
			if (
				allowedFileTypes[0] !== "*" &&
				!allowedFileTypes.some(type => file.type.match(type))
			) {
				fileErrors.push(`${file.name} is not an allowed file type`);
				return;
			}

			validFiles.push(file);
		});

		return { validFiles, fileErrors };
	};

	const handleDrag = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		e.stopPropagation();

		if (e.type === "dragenter" || e.type === "dragover") {
			setDragActive(true);
		} else if (e.type === "dragleave") {
			setDragActive(false);
		}
	};

	const handleDrop = (e: DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		e.stopPropagation();
		setDragActive(false);

		if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
			const newFiles = Array.from(e.dataTransfer.files);
			const { validFiles, fileErrors } = validateFiles(newFiles);

			setFiles(prevFiles => [...prevFiles, ...validFiles]);
			setErrors(fileErrors);

			if (inputRef.current) {
				inputRef.current.value = ""; // Reset input
			}
		}
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		if (e.target.files && e.target.files.length > 0) {
			const newFiles = Array.from(e.target.files);
			const { validFiles, fileErrors } = validateFiles(newFiles);

			setFiles(prevFiles => [...prevFiles, ...validFiles]);
			setErrors(fileErrors);

			if (inputRef.current) {
				inputRef.current.value = ""; // Reset input
			}
		}
	};

	const removeFile = (index: number) => {
		const newFiles = files.filter((_, i) => i !== index);
		setFiles(newFiles);
		setErrors([]); // Clear previous errors
	};

	// const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
	// 	e.preventDefault();

	// 	if (files.length > 0) {
	// 		// Clear previous errors
	// 		setErrors([]);

	// 		// If an onUpload prop is provided, use it
	// 		if (onUpload) {
	// 			onUpload(files);
	// 		} else {
	// 			// Default upload logic (you'd replace this with your actual upload mechanism)
	// 			const formData = new FormData();
	// 			files.forEach(file => {
	// 				formData.append("files", file);
	// 			});

	// 			console.log("Files ready for upload:", files);
	// 			alert(`Ready to upload ${files.length} file(s)`);
	// 		}
	// 	}
	// };

	return (
		<>
			{/* Error Messages */}
			{errors.length > 0 && (
				<div className="mb-4 rounded border border-red-200 bg-red-50 p-3">
					{errors.map((error, index) => (
						<p key={index} className="text-sm text-red-600">
							{error}
						</p>
					))}
				</div>
			)}

			<div onDragEnter={handleDrag} className="relative">
				<input
					ref={inputRef}
					type="file"
					multiple
					onChange={handleChange}
					className="hidden"
					id="file-upload"
					accept={allowedFileTypes.join(",")}
				/>
				<label
					htmlFor="file-upload"
					className={cn(
						"mx-auto block w-60 cursor-pointer rounded-lg border p-8 text-center transition-colors duration-200",
						dragActive
							? "border-dashed border-main-color-primary bg-blue-50"
							: "border-gray-300 hover:border-main-color-primary",
					)}
				>
					<div>
						<p className="flex flex-col items-center gap-2 text-gray-600">
							<ImagePlus size={50} strokeWidth={1} />
							<span> Drop images here or</span>
							<span className="w-fit rounded-md border px-3 py-1 text-main-color-primary">
								Browse Files
							</span>
						</p>
						{/* <p className="mt-2 text-sm text-gray-500">
              Maximum {maxFiles} files, {maxFileSize / 1024 / 1024}MB each
            </p> */}
					</div>
				</label>

				{dragActive && (
					<div
						className="absolute inset-0 z-10"
						onDragEnter={handleDrag}
						onDragLeave={handleDrag}
						onDragOver={handleDrag}
						onDrop={handleDrop}
					></div>
				)}
			</div>

			{files.length > 0 && (
				<div className="mt-4">
					<h4 className="mb-2 text-lg font-semibold">Selected Files:</h4>
					<ul className="space-y-2">
						{files.map((file, index) => (
							<li
								key={index}
								className="flex items-center justify-between rounded bg-gray-100 p-2"
							>
								<span className="mr-4 truncate">{file.name}</span>
								<span className="mr-4 text-sm text-gray-500">
									{(file.size / 1024).toFixed(2)} KB
								</span>
								<button
									type="button"
									onClick={() => removeFile(index)}
									className="text-red-500 hover:text-red-700"
								>
									Remove
								</button>
							</li>
						))}
					</ul>
				</div>
			)}
		</>
	);
};

export default FileUploader;
