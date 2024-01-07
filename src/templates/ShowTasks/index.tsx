import { Button } from "@/components";
import { tasksProps } from "@/pages/create";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";

interface TakeTasksProps extends tasksProps {
  user: string;
  value: boolean;
  set: Dispatch<SetStateAction<boolean>>;
}

export const ShowTasks = ({ tasks = [], user, value, set }: TakeTasksProps) => {
  const { reload } = useRouter();

  const handleDelete = async (id: string) => {
    set(true);
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
    set(false);
  };

  return (
    <div className="">
      {tasks.map((task) => (
        <div
          className="mb-2 flex justify-between border p-4 text-sm font-bold lg:text-2xl"
          key={task.id}
        >
          <h3>{task.title}</h3>
          <div className="flex">
            <Button
              on={value}
              type="button"
              text="Delete"
              onClick={() => handleDelete(task.id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
