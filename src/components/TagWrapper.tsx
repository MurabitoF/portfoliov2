import type { PropsWithChildren } from "react";

type Props = {
  title: string;
  className?: string;
};

const TagWrapper: React.FC<PropsWithChildren<Props>> = ({
  title,
  children,
  className,
}) => {
  return (
    <div className={`${className} flex flex-col`}>
      <h2 className="font-mono font-semibold text-amber-400">{`<${title}>`}</h2>
      {children}
      <h2 className="self-end text-right font-mono font-semibold text-amber-400">{`</${title}>`}</h2>
    </div>
  );
};

export default TagWrapper;
