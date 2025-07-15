import { Box, Chip, Grid, Typography } from "@mui/material";
import { mediaList } from "../../../data/MediaList";

const MediaGrid = () => {
  return (
    <Grid size={{ md: 12, lg: 6 }}>
      <Box className="form-text">
        <Typography variant="h4" sx={{ mb: "40px" }}>
          Let's Connect
        </Typography>
        <p>Follow me and checkout my work!</p>
        <Grid container spacing={2}>
          {mediaList.map((media) => {
            return (
              <>
                <Grid size={{ md: 3, lg: 3 }}>
                  <Chip
                    className={"media-chip"}
                    avatar={<media.icon className="icon" />}
                    label={media.title}
                    onClick={media.onClick}
                  />
                </Grid>
              </>
            );
          })}
        </Grid>
      </Box>
    </Grid>
  );
};

export default MediaGrid;
