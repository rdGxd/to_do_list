import { Trash } from "@/assets";
import { GetServerSideProps } from "next";
import { getSession, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { prisma } from "../../prisma/lib/prisma";

interface tasksDate {
  id: string;
  title: string;
  published: true;
  authorId: string;
}

interface tasksProps {
  tasks: tasksDate[];
}

export default function Create({ tasks = [] }: tasksProps) {
  const { data: session, status } = useSession();
  const { reload, push } = useRouter();
  const [enabledButton, setEnabledButton] = useState(false);
  const [task, setTask] = useState("");
  const user = session?.user?.email as string;

  if (status === "loading") return;
  if (status !== "authenticated") push("/");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      handleClick();
    }
  };

  const handleClick = async () => {
    setEnabledButton(true);
    try {
      const body = { task, user };
      await fetch("/api/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (error) {
      //
    }
    reload();
    setEnabledButton(false);
  };

  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/post/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      reload();
    } catch (error) {
      //
    }
  };

  return (
    <>
      {/* CRIANDO TASKS */}
      <div className="mb-6 mt-2 flex">
        <input
          disabled={enabledButton}
          type="text"
          value={task}
          className="block w-full rounded-lg border border-[#D8DAE5]  p-4 ps-5 font-bold text-gray-900"
          placeholder="Digite sua tarefa"
          onChange={(e) => setTask(e.currentTarget.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="rounded bg-gradient-to-r from-[#07FDFD] via-[#4D69FE] to-[#CC00FF] px-6 py-4 text-white disabled:opacity-50"
          disabled={enabledButton}
          onClick={handleClick}
        >
          Salvar
        </button>
      </div>
      {/* PEGANDO TASKS */}
      {tasks.map((task) => (
        <div
          className="mb-2 flex justify-between border p-4 text-sm font-bold"
          key={task.id}
        >
          <h3>{task.title}</h3>
          <div onClick={() => handleDelete(task.id)} className="cursor-pointer">
            <Image src={Trash} alt="delete" />
          </div>
        </div>
      ))}
    </>
  );
}

export const getServerSideProps = async (ctx: any) => {
  const session = await getSession({ ctx });

  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }

  try {
    const result = await prisma.post.findMany({
      where: {
        author: { email: session?.user?.email },
      },
      orderBy: [
        {
          createdAt: "desc",
        },
      ],
    });

    return {
      props: {
        tasks: JSON.parse(JSON.stringify(result)),
      },
    };
  } catch (error) {
    //
  }
};
