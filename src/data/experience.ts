import * as m from "../paraglide/messages";

export type Experience = {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  dateStar: string;
  dateEnd?: string;
};

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Full Stack Developer",
    shortDescription: m.experience1ShortDesc(),
    fullDescription: m.experience1FullDesc(),
    dateStar: "04/07/2024",
  },
  {
    id: 2,
    title: "Alkemy",
    shortDescription: m.experience2ShortDesc(),
    fullDescription: m.experience2FullDesc(),
    dateStar: "03/20/2022",
    dateEnd: "05/27/2022",
  },
  {
    id: 3,
    title: m.experience3Title(),
    shortDescription: m.experience3ShortDesc(),
    fullDescription: m.experience3FullDesc(),
    dateStar: "03/16/2020",
    dateEnd: "12/18/2021",
  },
];
