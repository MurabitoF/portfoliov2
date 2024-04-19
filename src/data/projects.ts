import * as m from "../paraglide/messages";

export type Project = {
  id: number;
  title: string;
  img: string;
  imgDescription: string;
  description: string;
  urlGithub: string;
  urlDemo: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Prototypes",
    img: "/projects/prototypes.png",
    imgDescription: "Prototypes preview",
    description: m.project1Desc(),
    urlGithub: "https://github.com/murabitof/prototypes",
    urlDemo: "https://prototypes-gamma.vercel.app/",
  },
  {
    id: 2,
    title: "Devscord",
    img: "/projects/devscord.png",
    imgDescription: "Devscord preview",
    description: m.project2Desc(),
    urlGithub: "https://github.com/MurabitoF/devscord",
    urlDemo: "https://devscord.vercel.app/",
  },
  {
    id: 3,
    title: m.project3Title(),
    img: "/projects/tateti.png",
    imgDescription: `${m.project3Title()} preview`,
    description: m.project3Desc(),
    urlGithub: "https://github.com/MurabitoF/tateti",
    urlDemo: "https://tateti-murabitof.vercel.app/",
  },
];
