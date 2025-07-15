import { Box, Grid } from "@mui/material";
import ContactForm from "./Components/ContactForm";
import MediaGrid from "./Components/MediaGrid";

const Contact = () => {
  return (
    <Box
      id="contact"
      className="contact-section"
      sx={{ mt: "40px", mb: "40px" }}
    >
      <Grid container spacing={2} direction="row">
        <ContactForm />
        <MediaGrid />
      </Grid>
    </Box>
  );
};
export default Contact;
