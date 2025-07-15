import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { exp } from "../../data/JobExp";

const Experience = () => {
  return (
    <>
      <div id="experience" className="experience-section">
        <Typography variant="h4" sx={{ mb: "40px" }}>
          Experience
        </Typography>
        <Grid container spacing={2}>
          {exp.map((job, index) => {
            return (
              <Grid size={{ md: 12, lg: 6 }} key={index}>
                <Accordion className=" drop-shadow-primary job-accordion">
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Stack>
                      <Typography variant="h5">{job.title}</Typography>
                      <Typography variant="subtitle1">
                        <em>{job.company}</em>
                      </Typography>
                      <Typography variant="body1" color="text.disabled">
                        {job.startDate} - {job.endDate}
                      </Typography>
                    </Stack>
                  </AccordionSummary>

                  <AccordionDetails>
                    <ul>
                      {job.description.map((point) => {
                        return <li>{point}</li>;
                      })}
                    </ul>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
};
export default Experience;
