import { ProjectsObjectsType } from "../@types/ProjectsListType";
import DanCarliCPADesc from "../Components/Projects/Components/DanCarliCPADesc";
import QamerSuppliesDesc from "../Components/Projects/Components/QamerSuppliesDesc";
import SimonSaysDesc from "../Components/Projects/Components/SimonSaysDesc";
import SnakeDesc from "../Components/Projects/Components/SnakeDesc";
import STRIPECompetitionDesc from "../Components/Projects/Components/STRIPECompetitionDesc";
import WhackAMoleDesc from "../Components/Projects/Components/WhackAMoleDesc";

export const projs: ProjectsObjectsType = {
  games: [
    {
      link: "https://github.com/asad310397/simon_says_game",
      title: "Simon Says",
      image: "simonSaysPy.png",
      short_description: "Simple memory game recreated in Pygame",
      description: SimonSaysDesc,
      active: true,
      tags: [{ link: "coding/python-plain.svg", alt: "Python" }],
    },
    {
      link: "https://github.com/asad310397/whack-a-mole-game",
      title: "Whack-a-mole",
      image: "whackAMolepy.png",
      short_description: "Simple Whack a mole game created in Pygame",
      description: WhackAMoleDesc,
      active: true,
      tags: [{ link: "coding/python-plain.svg", alt: "Python" }],
    },
    {
      link: "https://github.com/asad310397/snake_game",
      title: "Snake",
      image: "snake.png",
      short_description: "Class Snake Game re-created using Pygame",
      description: SnakeDesc,
      active: true,
      tags: [{ link: "coding/python-plain.svg", alt: "Python" }],
    },
  ],
  web: [
    {
      link: "https://qamersupplies.com/",
      title: "Qamer Supplies",
      image: "QamerSuppliesBg.png",
      short_description:
        "Designed and Build a responsive web page to allow customers to rent and view catering equipment from a local Milton Business.",
      description: QamerSuppliesDesc,
      active: true,
      tags: [
        { link: "coding/aws.ac2256dd.svg", alt: "AWS" },
        { link: "coding/react.63480b3c.svg", alt: "React" },
        { link: "coding/node_js.png", alt: "Node" },
      ],
    },
    {
      link: "https://www.stripecompetition.com/",
      title: "STRIPE Competition",
      image: "StripeCompBg.png",
      short_description:
        "Designed and Built web pages to allow competitors to register, pay for, and plan STEM competition events. Lead a team of 4 developers using Git and Bitbucket",
      description: STRIPECompetitionDesc,
      active: true,
      tags: [
        { link: "coding/aws.ac2256dd.svg", alt: "AWS" },
        { link: "coding/react.63480b3c.svg", alt: "React" },
        { link: "coding/node_js.png", alt: "Node" },
      ],
    },
    {
      link: "#todo-add-web-link",
      title: "Dan Carli CPA",
      image: "todo-add-web-image.png",
      short_description: "",
      description: DanCarliCPADesc,
      active: false,
      tags: [
        { link: "coding/react.63480b3c.svg", alt: "React" },
        { link: "coding/node_js.png", alt: "Node" },
      ],
    },
  ],

  others: [],
};
