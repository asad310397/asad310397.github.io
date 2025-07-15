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
          A highly motivated and enthusiastic Senior Software Developer with
          over 5 years of experience in web development. Extensive experience in
          React, Node, MySQL, and AWS, with a track record of identifying,
          designing, and developing robust features in record time. Recognized
          for teamwork, code efficiency, and innovative programming.
        </p>
        <Skills />
      </Grid>
    </Grid>
  );
};
export default Bio;
