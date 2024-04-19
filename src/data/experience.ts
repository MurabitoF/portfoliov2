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
    fullDescription:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    dateStar: "04/07/2024",
  },
  {
    id: 2,
    title: "Alkemy",
    shortDescription: m.experience2ShortDesc(),
    fullDescription: `
    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu.
    
    <ul class="list-disc pl-6">
        <li>Cosa 1</li>
        <li>Cosa 2</li>1
        <li>Cosa 3</li>
        <li>Cosa 4</li>
      </ul>`,
    dateStar: "03/20/2022",
    dateEnd: "05/27/2022",
  },
  {
    id: 3,
    title: m.experience3Title(),
    shortDescription: m.experience3ShortDesc(),
    fullDescription:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    dateStar: "03/16/2020",
    dateEnd: "12/18/2021",
  },
];
