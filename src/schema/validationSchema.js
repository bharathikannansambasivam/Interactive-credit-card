import * as Yup from "yup";

const validationSchema = Yup.object({
  customerName: Yup.string()
    .matches(
      /^[a-zA-Z\s]*$/,
      "Name cannot contain numbers or special characters"
    )

    .required("Please enter your name"),
  cardNo: Yup.number()

    .typeError("Wrong format, numbers only")
    .min(16, "Card number must be 16 digits")
    .required("Card number is required"),
  cvc: Yup.number()
    .typeError("Must be a number")
    .required("Can't be blank")
    .min(3, "Enter three digit valid number"),
  month: Yup.number()
    .typeError("Must be a number")
    .max(12, "Month must be between 1 and 12")
    .required("Can't be blank"),
  year: Yup.number()
    .typeError("Must be a number")
    .min(23, "Year must be 23 or later")
    .max(99, "Year must be less than 100")
    .required("Can't be blank"),
});

export default validationSchema;
