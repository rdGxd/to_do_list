interface ButtonProps {
  type?: "submit" | "button" | "reset";
  text: string;
  onClick?: () => void;
}

export const Button = ({ type, text, onClick }: ButtonProps) => {
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <>
      {type === "button" ? (
        <button type={type} onClick={handleClick}>
          {text}
        </button>
      ) : (
        <button
          type={type}
          onClick={handleClick}
          className="mt-60 w-full rounded-lg bg-[#6C5DD3] p-5 font-bold text-white"
        >
          {text}
        </button>
      )}
    </>
  );
};
