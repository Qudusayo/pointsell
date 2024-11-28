"use client";

import { Button, cn } from "@nextui-org/react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Icons from "./icons";

const AuthButton = () => {
	const { push } = useRouter();
	const { data: session, status } = useSession();

	const handleSignIn = () => {
		if (session) {
			push("/store");
		} else {
			signIn("google", {
				callbackUrl: "/store",
			});
		}
	};

	return (
		<Button
			radius="full"
			size="lg"
			className={cn("mx-auto min-w-72 bg-main-color-primary text-white")}
			onClick={handleSignIn}
			isLoading={status === "loading"}
			isDisabled={status === "loading"}
		>
			{!session && status !== "loading" && <Icons.Google className="h-6 w-6" />}
			<span>{session ? "Go to Dashboard" : "Continue with Google"}</span>
		</Button>
	);
};

export default AuthButton;
