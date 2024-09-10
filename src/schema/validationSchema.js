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
    .required("Card number is required"),

  month: Yup.number()
    .typeError("Must be a number")
    .max(12, "Month must be between 1 and 12")
    .required("Can't be blank"),
  year: Yup.number()
    .typeError("Must be a number")
    .min(23, "Year must be 23 or later")
    .max(99, "Year must be less than 100")
    .required("Can't be blank"),
  cvc: Yup.string()
    .matches(/^\d{3}$/, "Enter a valid 3-digit CVC number")
    .required("Can't be blank"),
});

export default validationSchema;
