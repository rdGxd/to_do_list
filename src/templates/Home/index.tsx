import { LoginGithub, LoginGoogle } from "@/utils";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Loading } from "../Loading";

export const Home = () => {
  const { status } = useSession();
  const { push } = useRouter();

  if (status === "loading") return <Loading />;
  if (status === "authenticated") push("/create");

  return (
    <main className="flex h-screen flex-wrap  content-center items-center justify-center text-center ">
      <div className="flex flex-wrap items-center justify-center md:block md:w-full ">
        <h1 className="text-2xl font-bold text-blue-950 lg:text-3xl">
          Oi, Bem vindo
        </h1>
        <span className="p-2 text-xs text-gray-500 lg:text-lg">
          Faça login na sua conta para começar a aproveitar a sua To do List
        </span>
      </div>
      <section className="md:flex md:flex-col md:items-center md:justify-center">
        <LoginGoogle />
        <LoginGithub />
      </section>
    </main>
  );
};
