import { format } from "../utils/date";
import { languageTag } from "../paraglide/runtime";

type Props = {
  title: string;
  description: string;
  dateStart: Date;
  dateEnd?: Date;
  active: boolean;
  onClick: () => void;
};

const TimelineNode: React.FC<Props> = ({
  title,
  description,
  dateStart,
  dateEnd,
  active,
  onClick,
}) => {
  const language = languageTag();

  return (
    <button
      onClick={() => {
        console.log("click");
        onClick();
      }}
      className="group relative py-6 pl-8 sm:pl-32"
    >
      <div
        className={`mb-1 flex flex-col items-start before:absolute before:left-2 before:h-full before:-translate-x-1/2 before:translate-y-3 before:self-start before:bg-amber-400 before:px-px after:absolute after:left-2 after:box-content after:h-2 after:w-2 after:-translate-x-1/2 after:translate-y-1.5 after:rotate-45 after:border-4 after:border-amber-400 after:bg-amber-400 group-last:before:h-[83%] sm:before:left-0 sm:before:ml-[6.5rem] sm:after:left-0 sm:after:ml-[6.5rem] ${active ? "active" : ""}`}
      >
        <time
          dateTime={dateEnd ? dateEnd.toDateString() : dateStart.toDateString()}
          className="inline-flex h-6 translate-y-0.5 items-center justify-start text-xs font-semibold uppercase text-amber-400 sm:mb-0"
        >
          {format(dateStart, language, { month: "long", year: "numeric" })}{" "}
          {dateEnd && " - "}
          {dateEnd &&
            format(dateEnd, language, { month: "long", year: "numeric" })}
        </time>
        <div className="text-xl font-bold text-neutral-50">{title}</div>
      </div>
      <p className="text-left text-neutral-400">{description}</p>
    </button>
  );
};

export default TimelineNode;
