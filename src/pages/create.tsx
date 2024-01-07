import { CreateTasks, Loading, ShowTasks } from "@/templates";
import { GetServerSideProps } from "next";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { prisma } from "../../prisma/lib/prisma";

interface tasksDate {
  id: string;
  title: string;
  published: true;
  authorId: string;
}

export interface tasksProps {
  tasks: tasksDate[];
}

export default function Create({ tasks = [] }: tasksProps) {
  const [enabledButton, setEnabledButton] = useState(false);
  const { data: session, status } = useSession();
  const { push } = useRouter();

  if (status === "loading") return <Loading />;
  if (status !== "authenticated") push("/");
  const user = session?.user?.email as string;

  return (
    <>
      <CreateTasks user={user} value={enabledButton} set={setEnabledButton} />
      <ShowTasks
        tasks={tasks}
        user={user}
        set={setEnabledButton}
        value={enabledButton}
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession({ ctx });

  try {
    const result = await prisma.post.findMany({
      where: {
        author: { email: session?.user?.email },
      },
      orderBy: [
        {
          created_at: "desc",
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

  return {
    props: {},
  };
};
