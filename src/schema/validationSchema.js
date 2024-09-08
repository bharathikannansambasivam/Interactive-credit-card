import * as Yup from "yup";

const validationSchema = Yup.object({
  customerName: Yup.string().required("Please enter your name"),
  cardNo: Yup.string()
    .matches(/^\d+$/, "Wrong format, numbers only")
    .min(16, "Card number must be 16 digits")
    .required("Card number is required"),
});

export default validationSchema;
