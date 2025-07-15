export interface ProjectLanguageIcon {
  link: string;
  alt: string;
}

export interface ProjectsListType {
  link: string;
  title: string;
  image: string;
  short_description: string;
  description: () => JSX.Element;
  tags: ProjectLanguageIcon[];
  active: boolean;
}

export interface ProjectsObjectsType {
  [k: string]: ProjectsListType[];
  games: ProjectsListType[];
  web: ProjectsListType[];
  others: ProjectsListType[];
}
