import { Container } from "@mui/material";
import { Helmet } from "react-helmet-async";
import Bio from "../../Components/Bio/Bio";
import Contact from "../../Components/Contact/Contact";
import Education from "../../Components/Education/Education";
import Experience from "../../Components/Experience/Experience";
import Projects from "../../Components/Projects/Projects";
import LayoutOne from "../../Layout/LayoutOne/LayoutOne";

const HomePage = () => {
  return (
    <LayoutOne>
      <>
        <Helmet>
          <title> Home | Asad Siddiqui </title>
          <meta name="description" content="" />
          <meta
            name="keyword"
            content="portfolio, react, node, javascript, mysql, full stack, developer"
          />
        </Helmet>
        <Container maxWidth="xl" disableGutters>
          <Bio />
          {/* <Skills /> */}
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </Container>
      </>
    </LayoutOne>
  );
};

export default HomePage;
