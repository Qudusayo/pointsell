"use client";

import { Button } from "@nextui-org/react";
import { signIn } from "next-auth/react";

const LoginPage = () => {
	const handleSignIn = () => {
		// if (session) {
		// 	push("/dashboard");
		// } else {
		signIn("google", {
			callbackUrl: "/dashboard",
		});
		// }
	};

	return (
		<div>
			<Button onClick={handleSignIn}>Login</Button>
		</div>
	);
};

export default LoginPage;
