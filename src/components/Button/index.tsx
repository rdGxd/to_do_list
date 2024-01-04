interface ButtonProps {
  type: "submit" | "button" | "reset";
  value: "Google" | "Github";
  text: string;
}

export const Button = ({ type, text, value }: ButtonProps) => {
  const handleClick = () => {
    console.log(value);
  };

  return (
    <>
      <button type={type} value={value} onClick={handleClick}>
        {text}
      </button>
    </>
  );
};
