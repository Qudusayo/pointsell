import { auth } from "@/server/auth";
import AuthButton from "../_components/auth-button";
import Logo from "../_components/logo";

export default async function Home() {
  const session = await auth();

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
      <AuthButton session={session} />
    </div>
  );
}
