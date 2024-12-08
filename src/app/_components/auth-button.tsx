"use client";

import { Button, cn } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import Icons from "./icons";
import { Session } from "next-auth";

const AuthButton = ({ session }: { session: Session | null }) => {
  const handleSignIn = () => {
    if (session) {
      return redirect("/store");
    } else {
      return signIn("google", {
        callbackUrl: "/",
      });
    }
  };

  return (
    <Button
      radius="full"
      size="lg"
      className={cn("bg-main-color-primary mx-auto min-w-72 text-white")}
      onClick={handleSignIn}
      // isLoading={status === "loading"}
      // isDisabled={status === "loading"}
    >
      {!session && <Icons.Google className="h-6 w-6" />}
      <span>{session ? "Go to Dashboard" : "Continue with Google"}</span>
    </Button>
  );
};

export default AuthButton;
