import { githubIcon, googleIcon } from "@/assets";
import { Button, Input, Label } from "@/components";
import Image from "next/image";
import Link from "next/link";

export const Login = () => {
  return (
    <main className="flex flex-wrap content-center items-center justify-center text-center">
      <header className="mt-10 flex flex-wrap items-center justify-center">
        <h1 className="text-2xl font-bold text-blue-950">Oi, Bem vindo</h1>
        <span className="p-2 text-xs text-gray-500">
          Faça login na sua conta para começar a aproveitar a sua To do List
        </span>
      </header>
      <div>
        <div className="GOOGLE ml-12 mt-5 flex w-fit justify-center rounded border p-4">
          <Image src={googleIcon} alt="Icon Google" className="mr-2" />
          <Button text="Faça login no Google" type="button" value="Google" />
        </div>
        <div className="GITHUB ml-12 mt-5 flex w-fit justify-center rounded border p-4">
          <Image src={githubIcon} alt="Icon GitHub" className="mr-2" />
          <Button text="Faça login no GitHub" type="button" value="Github" />
        </div>
        <div className="mt-6 flex items-center justify-center ">
          <span className="h-[0.5px] w-1/5 bg-[#E6E8F0]"></span>
          <span className="mx-4 text-xs font-bold text-[#8F95B2]">
            Ou entre com seu Email
          </span>
          <span className="h-[0.5px] w-1/4 bg-[#E6E8F0]"></span>
        </div>
        {/* FORM DE LOGIN */}
        <form action="" className="p-4">
          <Label htmlFor="email" value="Email address" />
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            typeImg="email"
          />
          <Label htmlFor="password" value="Password" />
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="*********"
            typeImg="password"
          />
          <div className="flex">
            <Input
              type="checkbox"
              id="remember"
              name="remember"
              placeholder="rememberMe"
              typeImg="checkbox"
            />
            <Label htmlFor="remember" value="Remember me" />
            <Link href="#" className="ml-5">
              Forgot your password?
            </Link>
          </div>
          <br />
          <Button text="Login" type="submit" />
        </form>
        <div>
          <Link href="#" className="text-black">
            Não registrado ainda?
            <span className="ml-2 text-[#6c5dd3] underline">Criar conta</span>
          </Link>
        </div>
      </div>
    </main>
  );
};
