import type { PropsWithChildren } from "react";

interface Props {
  href: string;
}

const CardButton: React.FC<PropsWithChildren<Props>> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="flex items-center gap-2 rounded-full border border-neutral-600 bg-transparent px-4 py-2 text-neutral-400 transition-colors hover:border-neutral-100 hover:text-neutral-100 active:border-neutral-50 active:text-neutral-50"
    >
      {children}
    </a>
  );
};

export default CardButton;
