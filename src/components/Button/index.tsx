interface ButtonProps {
  type: "submit" | "button" | "reset";
  onClick?: () => void;
  text: string;
}

export const Button = ({ type, text, onClick }: ButtonProps) => {
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <>
      {type === "submit" ? (
        <button
          type={type}
          onClick={handleClick}
          className="w-full rounded-lg bg-[#6C5DD3] p-5 font-bold text-white"
        >
          {text}
        </button>
      ) : (
        <button type={type} onClick={handleClick}>
          {text}
        </button>
      )}
    </>
  );
};
