import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

const Education = () => {
  return (
    <Box id="education" className="education-section" sx={{ mt: "40px" }}>
      <Typography variant="h4" sx={{ mb: "40px" }}>
        Education
      </Typography>
      <Grid container spacing={3}>
        <Grid size={{ md: 6, lg: 5 }}>
          <Card className="education-card">
            <CardActionArea>
              <CardContent>
                <Grid container>
                  <Grid size={{ lg: 4, sm: 6 }}>
                    <img
                      width="150px"
                      height="150px"
                      src="coding/600px-University_of_Guelph.png"
                      alt="University Of Guelph"
                    />
                  </Grid>
                  <Grid size={{ lg: 8, sm: 6 }}>
                    <Stack direction={"column"} spacing={3}>
                      {" "}
                      <Typography variant="h5">
                        {" "}
                        Bachelor Of Computing
                      </Typography>
                      <Typography variant="subtitle1">
                        {" "}
                        University Of Guelph
                      </Typography>
                      <Typography variant="body1" color="text.disabled">
                        Sept 2015 - Dec 2019
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Education;
