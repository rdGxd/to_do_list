import { googleIcon } from "@/assets";
import { Button } from "@/components";
import { signIn } from "next-auth/react";
import Image from "next/image";

export const LoginGoogle = () => {
  const handleLoginGoogle = async () => {
    await signIn("google", { callbackUrl: "/create" });
  };

  return (
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
  );
};
