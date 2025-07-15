import { IconType } from "react-icons";

export interface MediaListType {
  title: string;
  icon: IconType;
  link: string;
  tag: string;
  onClick: () => void;
}
