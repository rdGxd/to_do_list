interface ButtonProps {
  type?: "submit" | "button" | "reset";
  text: string;
  onClick?: () => void;
  on?: boolean;
}

export const Button = ({ type, text, onClick, on }: ButtonProps) => {
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <>
      {type ? (
        <button
          type={type}
          onClick={handleClick}
          disabled={on}
          className="disabled:hidden lg:text-2xl"
        >
          {text}
        </button>
      ) : (
        <button
          onClick={handleClick}
          className="mt-24 w-full rounded-lg bg-[#6C5DD3] p-5 font-bold text-white"
        >
          {text}
        </button>
      )}
    </>
  );
};
