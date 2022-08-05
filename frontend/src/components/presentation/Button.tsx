import React from "react";

type ButtonProps = {
  text: string;
};

const Button = ({ text }: ButtonProps) => {
  return (
    <button className="rounded-lg bg-blue-400 px-4 py-2 text-xl font-bold text-white">
      {text}
    </button>
  );
};

export default Button;
