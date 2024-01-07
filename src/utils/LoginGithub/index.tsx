import { githubIcon } from "@/assets";
import { Button } from "@/components";
import { signIn } from "next-auth/react";
import Image from "next/image";

export const LoginGithub = () => {
  const handleLoginGithub = async () => {
    await signIn("github", { callbackUrl: "/create" });
  };

  return (
    <div className="mt-5 flex w-fit justify-center rounded border p-4">
      <Image
        src={githubIcon}
        alt="Icon GitHub"
        className="mr-2"
        placeholder="empty"
      />
      <Button
        text="Faça login no Github"
        type="button"
        onClick={handleLoginGithub}
      />
    </div>
  );
};
