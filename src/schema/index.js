import * as yup from "yup";


export const BasicFormValidation = yup.object().shape({
  name: yup
    .string()
    .min(4, "name must be at least 4 characters")
    .required("name is required"),
    price: yup
    .number()
    .positive("price cannot be negative number")
    .integer()
    .required("price is required"),
  discountPercentage: yup
    .number()
    .positive("discountPercentage cannot be negative number")
    .min(0, "discountPercentage must be greater than 0")
    .max(100, "discountPercentage must be less than 100")
    .required("discountPercentage is required"),
    imageURL: yup
    .string()
    .required("imageURL is required"),
    unitsInStock: yup
    .number()
    .positive("unitsInStock cannot be negative number")
    .integer()
    .required("unitsInStock is required"),
});
