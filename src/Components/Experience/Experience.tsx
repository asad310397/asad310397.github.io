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
        <p>
          Over the past several years, I have progressed from Junior Developer to Senior and Staff-level responsibilities, contributing to both customer-facing and internal platforms. My work spans full-stack development, system modernization, feature delivery, and collaboration with cross-functional teams. I have built and maintained applications supporting enterprise customers across North America, while mentoring developers, performing code reviews, and delivering scalable solutions that improve operational efficiency.
        </p>
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
                    {
                      job.description.length > 1 ? (<ul>
                        {job.description.map((point) => {
                          return <li>{point}</li>;
                        })}
                      </ul>) : (<p>{job.description[0]}</p>)
                    }

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
