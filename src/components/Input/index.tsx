import { emailIcon, passwordIcon } from "@/assets";
import Image from "next/image";

interface InputProps {
  type: string;
  placeholder: string;
  name: string;
  id: string;
  typeImg?: "email" | "password";
}

export const Input = ({ id, name, type, placeholder, typeImg }: InputProps) => {
  return (
    <>
      {typeImg === "email" && (
        <div className="relative mb-6">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
            <Image src={emailIcon} alt="icon password" />
          </div>
          <input
            type={type}
            name={name}
            id={id}
            className="block w-full rounded-lg border border-[#D8DAE5]  p-4 ps-12 font-bold text-gray-900"
            placeholder={placeholder}
          />
        </div>
      )}

      {typeImg === "password" && (
        <div className="relative mb-6 flex">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
            <Image src={passwordIcon} alt="icon password" />
          </div>
          <input
            className="flex w-full rounded-lg border border-[#D8DAE5]  p-4 ps-12  font-bold text-gray-900"
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
          />
        </div>
      )}
    </>
  );
};
