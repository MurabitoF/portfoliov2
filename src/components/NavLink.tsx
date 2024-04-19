type Props = {
  href: string;
  label: string;
  toggle?: () => void;
};

const NavLink: React.FC<Props> = ({ href, label, toggle }) => {
  return (
    <a
      className="font-mono font-semibold text-neutral-200 transition-colors hover:text-amber-400"
      href={href}
      onClick={toggle}
    >
      {label}
    </a>
  );
};

export default NavLink;
