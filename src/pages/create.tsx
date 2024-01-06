import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Create() {
  const { data: session } = useSession();
  const { push } = useRouter();
  const [task, setTask] = useState("");

  useEffect(() => {
    if (!session) push("/");
  });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      handleClick();
    }
  };

  const handleClick = async () => {
    const user = session?.user?.email;
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
  };

  return (
    <>
      <>
        <div className="mb-6 mt-2 flex">
          <input
            type="text"
            value={task}
            className="block w-full rounded-lg border border-[#D8DAE5]  p-4 ps-5 font-bold text-gray-900"
            placeholder="Digite sua tarefa"
            onChange={(e) => setTask(e.currentTarget.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            className="rounded bg-gradient-to-r from-[#07FDFD] via-[#4D69FE] to-[#CC00FF] px-6 py-4 text-white"
            onClick={handleClick}
          >
            Salvar
          </button>
        </div>
      </>
    </>
  );
}
