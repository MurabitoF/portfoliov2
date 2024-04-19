import type { Experience } from "../data/experience";
import { format } from "../utils/date";
import * as m from "../paraglide/messages";
import { languageTag } from "../paraglide/runtime";

type Props = {
  experience: Experience;
};

const ExperienceDetail: React.FC<Props> = ({ experience }) => {
  const language = languageTag();

  return (
    <article className="flex flex-wrap items-center justify-between gap-y-3 text-neutral-50">
      <h2 className="text-2xl font-semibold">{experience.title}</h2>
      <section className="text-sm text-neutral-400">
        <time dateTime={experience.dateStar}>
          {`${m.experienceDetailFrom()} `}
          {format(new Date(experience.dateStar), language, {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}
        </time>
        {` ${m.experienceDetailTo()} `}
        <time dateTime={experience.dateEnd}>
          {experience.dateEnd
            ? format(new Date(experience.dateEnd), language, {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })
            : m.experienceDetailCurrent()}
        </time>
      </section>
      <p
        className="w-full text-balance text-neutral-200"
        dangerouslySetInnerHTML={{ __html: experience.fullDescription }}
      />
    </article>
  );
};

export default ExperienceDetail;
