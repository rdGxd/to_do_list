import { githubIcon, googleIcon } from "@/assets";
import { Button, Input, Label } from "@/components";
import Image from "next/image";

export const Login = () => {
  return (
    <>
      <header className="mt-10 flex flex-wrap items-center justify-center">
        <h1 className="text-2xl font-bold text-blue-950">Oi, Bem vindo</h1>
        <span className="p-2 text-xs text-gray-500">
          Faça login na sua conta para começar a aproveitar a sua To do List
        </span>
      </header>
      <main>
        <div className="GOOGLE ml-12 mt-5 flex w-fit justify-center rounded border p-4">
          <Image src={googleIcon} alt="Icon Google" className="mr-2" />
          <Button text="Faça login no Google" type="button" value="Google" />
        </div>
        <div className="GITHUB ml-12 mt-5 flex w-fit justify-center rounded border p-4">
          <Image src={githubIcon} alt="Icon GitHub" className="mr-2" />
          <Button text="Faça login no GitHub" type="button" value="Github" />
        </div>
        <form action="" className="p-4">
          <Label htmlFor="email" value="Email address" />
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            typeImg="email"
          />
          <br />
          <Label htmlFor="password" value="Password" />
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="*********"
            typeImg="password"
          />
          <br />
          <Button text="Login" type="submit" />
        </form>
      </main>
    </>
  );
};
