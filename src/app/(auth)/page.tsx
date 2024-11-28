import AuthButton from "@/components/auth-button";
import Logo from "@/components/logo";

export default function Home() {
	return (
		<div
			style={{
				backgroundImage: "url('/auth-bg.png')",
				backgroundColor: "rgba(50, 50, 50, .8)",
				backgroundBlendMode: "multiply",
			}}
			className="flex h-dvh flex-col items-center justify-center gap-12 bg-cover bg-center md:gap-20"
		>
			<div className="scale-[200%] md:scale-[300%]">
				<Logo white />
			</div>
			<AuthButton />
		</div>
	);
}
