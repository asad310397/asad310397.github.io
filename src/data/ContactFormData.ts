import * as Yup from "yup";
import { ContactFormValuesType } from "../@types/ContactFormValuesType";

export const initialValues: ContactFormValuesType = {
  fname: "",
  lname: "",
  company: "",
  email: "",
  phone: "",
  message: "",
};

export const yupValidation = Yup.object().shape({
  fname: Yup.string()
    .required("Please enter a first name")
    .min(1, "Please enter a first name"),
  lname: Yup.string()
    .required("Please enter a last name")
    .min(1, "Please enter a last name"),
  company: Yup.string(),
  email: Yup.string()
    .required("Please enter a valid email")
    .email("Please enter a valid email"),
  phone: Yup.string()
    .required("Please enter a valid phone number")
    .min(18, "Phone Number must be exactly 10 digits")
    .test(
      "valid-number",
      "Sorry, only numbers (0-9) are allowed",
      (value: string) => {
        return Boolean(
          value &&
            value.split("@").length > 0 &&
            // eslint-disable-next-line
            value.split("@")[0].match(/[(0-9)(\-)(\()(\))( ))]*/g)[0] ==
              value.split("@")[0]
        );
      }
    ),
  message: Yup.string()
    .required("Please enter a message")
    .min(1, "Please enter a message"),
});
