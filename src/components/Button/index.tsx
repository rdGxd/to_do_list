import { signIn } from "next-auth/react";

interface ButtonProps {
  type: "submit" | "button" | "reset";
  value?: "Google" | "Github";
  text: string;
}

export const Button = ({ type, text, value }: ButtonProps) => {
  const handleClick = async () => {
    if (value === "Github") await signIn("github");

    if (value === "Google") await signIn("google");
  };

  return (
    <>
      {type === "submit" ? (
        <button
          type={type}
          value={value}
          onClick={handleClick}
          className="w-full rounded-lg bg-[#6C5DD3] p-5 font-bold text-white"
        >
          {text}
        </button>
      ) : (
        <button type={type} value={value} onClick={handleClick}>
          {text}
        </button>
      )}
    </>
  );
};
