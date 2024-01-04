import { githubIcon, googleIcon } from "@/assets";
import { Button } from "@/components/Button";
import Image from "next/image";

export const Login = () => {
  return (
    <>
      <header className="flex justify-center items-center flex-wrap mt-10">
        <h1 className="font-bold text-2xl text-blue-950">Oi, Bem vindo</h1>
        <span className="text-gray-500 text-xs p-2">
          Faça login na sua conta para começar a aproveitar a sua To do List
        </span>
      </header>
      <main>
        <div className="GOOGLE flex border p-4 justify-center mt-5 w-fit rounded ml-12">
          <Image src={googleIcon} alt="" className="mr-2" />
          <Button text="Faça login no Google" type="button" value="Google" />
        </div>
        <div className="GOOGLE flex border p-4 justify-center mt-5 w-fit rounded ml-12">
          <Image src={githubIcon} alt="" className="mr-2" />
          <Button text="Faça login no GitHub" type="button" value="Github" />
        </div>
      </main>
    </>
  );
};
