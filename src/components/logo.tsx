import { cn } from "@nextui-org/react";

const Logo = ({ white }: { white?: boolean }) => (
	<div className="relative leading-3">
		<span
			className={cn(
				"text-center text-4xl font-medium",
				white ? "text-white" : "text-blue-950",
			)}
		>
			Algomian
		</span>
		<span className="absolute -bottom-3 right-0 text-xs tracking-wider text-main-color-primary">
			TECHNOLOGIES
		</span>
	</div>
);

export default Logo;
