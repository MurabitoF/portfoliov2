import type { Project } from "../data/projects";
import CardButton from "./CardButton";
import Github from "./icons/Github";
import Link from "./icons/Link";

type Props = {
  project: Project;
};

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <article className="rounded-xl bg-[hsl(220,20%,5%)] shadow-sm shadow-neutral-950 transition-colors hover:bg-[hsl(220,20%,6%)]">
      <div className="group relative h-64 w-full rounded-xl rounded-b-none">
        <img
          src={project.img}
          alt={project.imgDescription}
          className="h-64 rounded-xl rounded-b-none object-cover"
        />
        {/* <div className="absolute left-0 top-0 flex h-full w-full select-none items-center justify-center rounded-xl rounded-b-none bg-neutral-200/10 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          <PopUp />
        </div> */}
      </div>
      <div className="flex h-60 flex-col justify-between p-4">
        <h3 className="text-xl font-medium text-neutral-100">
          {project.title}
        </h3>
        <p className="flex-1 text-pretty text-neutral-400">
          {project.description}
        </p>
        <div className="mt-4 flex justify-end gap-4">
          <CardButton href={project.urlGithub}>
            <span>
              <Github />
            </span>
            <span>Repo</span>
          </CardButton>
          <CardButton href={project.urlDemo}>
            <span>
              <Link />
            </span>
            <span>Demo</span>
          </CardButton>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
