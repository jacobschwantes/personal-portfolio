import { NextPageContext, NextComponentType } from "next";
interface ButtonProps {
  children: React.ReactNode;
  action?: () => void;
}
const Button: NextComponentType<NextPageContext, {}, ButtonProps> = ({
  action,
  children,
}) => (
  <button
    onClick={action}
    className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg text-lg"
  >
    {children}
  </button>
);
export default Button;
