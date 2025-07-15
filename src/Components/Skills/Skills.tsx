import { Box } from "@mui/material";
import Slider from "react-slick";
import { SkillList } from "../../data/SkillList";

const Skills = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box id="skills" className="slider-container skills-section">
      <Slider {...settings}>
        {SkillList.filter((skill) => {
          return skill.show && skill.highlight;
        }).map((skill, index) => {
          return (
            <div key={index}>
              <img className="skill-icon" src={skill.link} alt={skill.alt} />
            </div>
          );
        })}
      </Slider>
    </Box>
  );
};
export default Skills;
