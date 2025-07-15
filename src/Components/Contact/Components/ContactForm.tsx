import {
  Box,
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { Form, Formik } from "formik";
import { initialValues, yupValidation } from "../../../data/ContactFormData";

const ContactForm = () => {
  const getFormattedNumber: (value: string) => string = (value) => {
    value = value.replace(/[^\d]/g, "");
    if (value.length <= 0) {
      return ``;
    } else if (value.length < 4) {
      return `(${value}`;
    } else if (value.length < 7) {
      return `(${value.slice(0, 3)}) ${value.slice(3)}`;
    } else {
      return `(${value.slice(0, 3)}) - ${value.slice(3, 6)} - ${
        value.length > 10 ? value.slice(6, 10) : value.slice(6)
      }`;
    }
  };

  return (
    <Grid size={{ md: 12, lg: 6 }}>
      <Box className="form-box">
        <Typography variant="h4" sx={{ mb: "40px" }}>
          Reach Out
        </Typography>
        {/* <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          facilisis scelerisque augue. Vestibulum bibendum eget nisl feugiat
          tincidunt.
        </p> */}
        <Formik
          initialValues={initialValues}
          validationSchema={yupValidation}
          onSubmit={async (values, { resetForm }) => {
            const mailSent = await axios
              .post("/api/asad_portfolio/mail/contact-us", values)
              .catch((err) => {
                console.log(err);
              });
            if (mailSent?.status === 200) {
              resetForm();
            }
          }}
        >
          {({
            values,
            handleSubmit,
            handleChange,
            handleBlur,
            setFieldValue,
            errors,
            touched,
          }) => (
            <Form>
              <Grid container spacing={2}>
                {/* Name Row */}
                <Grid size={{ md: 12, lg: 6 }}>
                  <FormControl fullWidth variant="standard">
                    <TextField
                      label="First Name"
                      variant="standard"
                      id="fname"
                      type="text"
                      name="fname"
                      auto-complete="given-name"
                      value={values.fname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.fname && Boolean(errors.fname)}
                      helperText={touched.fname && errors.fname}
                    />
                  </FormControl>
                </Grid>
                <Grid size={{ md: 12, lg: 6 }}>
                  <FormControl fullWidth variant="standard">
                    <TextField
                      label="Last Name"
                      variant="standard"
                      id="lname"
                      type="text"
                      name="lname"
                      auto-complete="family-name"
                      value={values.lname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.lname && Boolean(errors.lname)}
                      helperText={touched.lname && errors.lname}
                    />
                  </FormControl>
                </Grid>

                <Grid size={{ md: 12, lg: 6 }}>
                  <FormControl fullWidth variant="standard">
                    <TextField
                      label="Email"
                      variant="standard"
                      id="email"
                      type="email"
                      name="email"
                      auto-complete="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                    />
                  </FormControl>
                </Grid>

                <Grid size={{ md: 12, lg: 6 }}>
                  <FormControl fullWidth variant="standard">
                    <TextField
                      label="Phone #"
                      variant="standard"
                      id="phone"
                      type="phone"
                      name="phone"
                      auto-complete="phone"
                      value={values.phone}
                      onChange={(e) => {
                        setFieldValue(
                          "phone",
                          getFormattedNumber(e.target.value)
                        );
                      }}
                      onBlur={handleBlur}
                      error={touched.phone && Boolean(errors.phone)}
                      helperText={touched.phone && errors.phone}
                    />
                  </FormControl>
                </Grid>
                <Grid size={{ md: 12, lg: 6 }}>
                  <FormControl fullWidth variant="standard">
                    <TextField
                      label="Company Name"
                      variant="standard"
                      id="company"
                      type="company"
                      name="company"
                      value={values.company}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.company && Boolean(errors.company)}
                      helperText={touched.company && errors.company}
                    />
                  </FormControl>
                </Grid>
                <Grid size={{ md: 12, lg: 12 }}>
                  <FormControl fullWidth variant="standard">
                    <TextField
                      label="Message"
                      variant="standard"
                      id="message"
                      type="message"
                      name="message"
                      multiline
                      rows={4}
                      maxRows={4}
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.message && Boolean(errors.message)}
                      helperText={touched.message && errors.message}
                    />
                  </FormControl>
                </Grid>
                <Grid size={4}>
                  <Button
                    size="large"
                    variant="contained"
                    color={"warning"}
                    disabled={
                      Object.keys(errors).length > 0 ||
                      Object.keys(touched).length === 0
                    }
                    onClick={() => {
                      handleSubmit();
                    }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Box>
    </Grid>
  );
};
export default ContactForm;
