import { KeyboardEvent, useRef } from "react";

interface InputProps {
  type: string;
  placeholder: string;
  name: string;
  id: string;
  onClick?: (e?: React.SyntheticEvent) => void;
}

export const Input = ({ id, name, type, placeholder, onClick }: InputProps) => {
  const refInput = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      handleClick();
    }
  };

  const handleClick = async () => {
    if (onClick) onClick();
  };

  return (
    <>
      <div className="mb-6 mt-2 flex">
        <input
          type={type}
          name={name}
          id={id}
          className="block w-full rounded-lg border border-[#D8DAE5]  p-4 ps-5 font-bold text-gray-900"
          placeholder={placeholder}
          onKeyDown={handleKeyDown}
          ref={refInput}
        />
        <button
          className="rounded bg-gradient-to-r from-[#07FDFD] via-[#4D69FE] to-[#CC00FF] px-6 py-4 text-white"
          onClick={handleClick}
        >
          Salvar
        </button>
      </div>
    </>
  );
};
