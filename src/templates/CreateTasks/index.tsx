import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useState } from "react";

interface CreateTasksProps {
  user: string;
  value: boolean;
  set: Dispatch<SetStateAction<boolean>>;
}

export const CreateTasks = ({ user, value, set }: CreateTasksProps) => {
  const [task, setTask] = useState("");
  const { reload } = useRouter();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      handleClick();
    }
  };

  const handleClick = async () => {
    set(true);
    try {
      const body = { task, user };
      await fetch("/api/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      reload();
    } catch (error) {
      //
    }
    set(false);
  };

  return (
    <div className="mb-6 mt-2 flex">
      <input
        disabled={value}
        type="text"
        value={task}
        className="block w-full rounded-lg border border-[#D8DAE5] p-4 ps-5 font-bold text-gray-900"
        placeholder="Digite sua tarefa"
        onChange={(e) => setTask(e.currentTarget.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        className="rounded bg-gradient-to-r from-[#07FDFD] via-[#4D69FE] to-[#CC00FF] px-6 py-4 text-white disabled:opacity-50"
        disabled={value}
        onClick={handleClick}
      >
        Salvar
      </button>
    </div>
  );
};
