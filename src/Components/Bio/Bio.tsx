import { Box, Grid, Typography } from "@mui/material";
import Skills from "../Skills/Skills";

const Bio = () => {
  return (
    <Grid id="bio" container className={"bio-section"}>
      <Grid
        className="profile-img"
        offset={{ xs: 3, sm: 3, md: 1 }}
        size={{ xs: 7, sm: 6, md: 3 }}
      >
        <Box component="img" src="asad_profile2.jpg" />
      </Grid>
      <Grid
        offset={{ xs: 1, md: 1 }}
        size={{ xs: 10, md: 7 }}
        className="profile-txt"
      >
        <Typography variant="h3" color="light">
          Asad Siddiqui
        </Typography>
        <Typography variant="h5" color="secondary">
          <b>Full-Stack Developer</b>
        </Typography>
        <Typography variant="subtitle1" color="secondary">
          <b>React • TypeScript • Ruby on Rails • Node.js • AWS</b>
        </Typography>
        <p className="text-muted">
          Full-Stack Software Developer with 4+ years of experience building
          scalable SaaS and internal platforms using React
          (TypeScript/JavaScript), Ruby on Rails, Node.js REST APIs, and AWS.
          I’ve contributed to high-volume, multi-tenant systems processing
          thousands of daily transactions and enjoy building reliable software
          that drives real business impact.
        </p>
        <br />
        <p className="text-muted">
          Currently building high-volume payment systems with Ruby on Rails,
          React (TypeScript), and AWS.
        </p>
        <Skills />
      </Grid>
    </Grid>
  );
};
export default Bio;
