import { githubIcon, googleIcon } from "@/assets";
import { Button } from "@/components";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const Home = () => {
  const { data: session } = useSession();
  const { push } = useRouter();

  useEffect(() => {
    if (session?.user) push("/create");
  });

  const handleLoginGoogle = async () => {
    await signIn("google", { callbackUrl: "/create" });
  };

  const handleLoginGithub = async () => {
    await signIn("github", { callbackUrl: "/create" });
  };

  return (
    <main className="flex h-screen flex-wrap content-center items-center justify-center text-center">
      <div className="flex flex-wrap items-center justify-center">
        <h1 className="text-2xl font-bold text-blue-950">Oi, Bem vindo</h1>
        <span className="p-2 text-xs text-gray-500">
          Faça login na sua conta para começar a aproveitar a sua To do List
        </span>
      </div>
      <section>
        {/* Google LOGIN */}
        <div className="GOOGLE  mt-5 flex w-fit justify-center rounded border p-4">
          <Image
            src={googleIcon}
            alt="Icon Google"
            className="mr-2"
            placeholder="empty"
          />
          <Button
            text="Faça login no Google"
            type="button"
            onClick={handleLoginGoogle}
          />
        </div>
        {/* Github LOGIN */}
        <section className="GITHUB  mt-5 flex w-fit justify-center rounded border p-4">
          <Image
            src={githubIcon}
            alt="Icon GitHub"
            className="mr-2"
            placeholder="empty"
          />
          <Button
            text="Faça login no GitHub"
            type="button"
            onClick={handleLoginGithub}
          />
        </section>
      </section>
    </main>
  );
};
