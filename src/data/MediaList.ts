import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiThingiverse } from "react-icons/si";
import { MediaListType } from "../@types/MediaListType";

export const mediaList: MediaListType[] = [
  {
    title: "GitHub",
    icon: FaGithub,
    link: "https://github.com/asad310397",
    tag: "asad310397",
    onClick: () => {
      const link = document.createElement("a");
      link.href = "https://github.com/asad310397";
      link.target = "_blank";
      link.click();
    },
  },
  {
    title: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/asad-h-siddiqui/",
    tag: "asad-h-siddiqui",
    onClick: () => {
      const link = document.createElement("a");
      link.href = "https://www.linkedin.com/in/asad-h-siddiqui/";
      link.target = "_blank";
      link.click();
    },
  },
  {
    title: "Email",
    icon: MdEmail,
    link: "mailto:asad.h.siddiqui@hotmail.com",
    tag: "asad.h.siddiqui@hotmail.com",
    onClick: () => {
      const link = document.createElement("a");
      link.href = "mailto:asad.h.siddiqui@hotmail.com";
      link.target = "_blank";
      link.click();
    },
  },
  {
    title: "Thingiverse",
    icon: SiThingiverse,
    link: "https://www.thingiverse.com/nemo310397/designs",
    tag: "nemo310397",
    onClick: () => {
      const link = document.createElement("a");
      link.href = "https://www.thingiverse.com/nemo310397/designs";
      link.target = "_blank";
      link.click();
    },
  },
];
