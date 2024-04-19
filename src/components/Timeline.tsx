import { useState } from "react";
import TagWrapper from "./TagWrapper";
import TimelineNode from "./TimelineNode";
import { experiences } from "../data/experience";
import ExperienceDetail from "./ExperienceDetail";

const Timeline = () => {
  const [active, setActive] = useState(experiences[0]);

  return (
    <section className=" w-full justify-between lg:flex">
      <div className="w-full lg:w-1/3">
        <TagWrapper title="experience">
          <div className="-my-6">
            {experiences.map((exp) => (
              <TimelineNode
                key={exp.id}
                title={exp.title}
                description={exp.shortDescription}
                dateStart={new Date(exp.dateStar)}
                dateEnd={exp.dateEnd ? new Date(exp.dateEnd) : undefined}
                active={active.id === exp.id}
                onClick={() => setActive(exp)}
              />
            ))}
          </div>
        </TagWrapper>
      </div>
      <div
        key={active.id}
        className="max-w-prose animate-fade-right pt-4 animate-duration-[400ms] animate-once animate-ease-in-out lg:pt-0"
      >
        <TagWrapper title="details">
          <ExperienceDetail experience={active} />
        </TagWrapper>
      </div>
    </section>
  );
};

export default Timeline;
