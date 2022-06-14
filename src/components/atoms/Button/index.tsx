import type { FC } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const Button: FC<ButtonProps> = ({ title, ...rest }) => {
  return (
    <button
      {...rest}
      className="px-5 py-3 bg-secondary-100 text-white rounded-md block disabled:cursor-not-allowed disabled:bg-primary-100"
    >
      {title}
    </button>
  );
};

export default Button;
