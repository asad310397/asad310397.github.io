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
          <b>Full Stack Developer</b>
        </Typography>
        <p className="text-muted">
          Full-Stack Software Developer with 4+ years of experience building scalable SaaS and internal business platforms using React, Ruby on Rails, Node.js REST APIs, and cloud technologies on AWS. I have contributed to high-volume, multi-tenant systems processing thousands of daily transactions, while working closely with stakeholders to translate customer needs into reliable production features. Passionate about delivering clean, maintainable software that drives real business impact through performance, usability, and data-driven decision making.
        </p>
        <Skills />
      </Grid>
    </Grid>
  );
};
export default Bio;
