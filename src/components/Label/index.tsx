interface LabelProps {
  htmlFor: string;
  value: string;
}

export const Label = ({ htmlFor, value }: LabelProps) => {
  return (
    <>
      <label htmlFor={htmlFor} className=" flex text-sm text-[#081735]">
        {value}
      </label>
    </>
  );
};