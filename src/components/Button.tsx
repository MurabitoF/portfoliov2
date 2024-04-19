import type { PropsWithChildren } from "react";

const Button: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <button className="flex gap-2 rounded-full border-2 border-neutral-100 px-3 py-2 font-medium text-neutral-100 transition-colors ease-in-out hover:border-amber-500 hover:bg-amber-500 hover:text-neutral-900 active:border-amber-400 active:bg-amber-400">
      {children}
    </button>
  );
};

export default Button;
