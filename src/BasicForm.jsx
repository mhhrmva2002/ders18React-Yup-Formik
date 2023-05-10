import { useFormik } from "formik";
import { BasicFormValidation } from "./schema";
import { v4 as uuidv4 } from 'uuid';
import "./form.css";

const BasicForm = () => {
  //form submit function
  const handleSubmit = async(values, actions) => {
    values.id = uuidv4();
    console.log(values);
    // await axios.post("random_url",values);
    actions.resetForm();
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      discountPercentage: "",
      imageURL: "",
      unitsInStock: "",
    },
    onSubmit: handleSubmit,
    validationSchema: BasicFormValidation,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        className={
          formik.errors.name && formik.touched.name ? "input-error" : ""
        }
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.name}
        name="name"
        placeholder="Enter Name"
        type="text"
      />
      {formik.errors.name && formik.touched.name && (
        <p style={{ color: "red" }}>{formik.errors.name}</p>
      )}


      <input
        className={formik.errors.price && formik.touched.price ? "input-error" : ""}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.price}
        name="price"
        placeholder="Enter price"
        type="number"
      />
      {formik.errors.price && formik.touched.price && (
        <p style={{ color: "red" }}>{formik.errors.price}</p>
      )}



      <input
        className={
          formik.errors.discountPercentage && formik.touched.discountPercentage ? "input-error" : ""
        }
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.discountPercentage}
        name="discountPercentage"
        placeholder="Enter discountPercentage"
        type="number"
        min="0"
        max="100"
      />
      {formik.errors.discountPercentage && formik.touched.discountPercentage && (
        <p style={{ color: "red" }}>{formik.errors.discountPercentage}</p>
      )}


      <input
        className={
          formik.errors.imageURL && formik.touched.imageURL ? "input-error" : ""
        }
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.imageURL}
        name="imageURL"
        placeholder="Enter imageURL"
        type="imageURL"
      />


      <input
        className={
          formik.errors.unitsInStock && formik.touched.unitsInStock
            ? "input-error"
            : ""
        }
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.unitsInStock}
        name="unitsInStock"
        placeholder=" Enter unitsInStock"
        type="unitsInStock"
      />    
     <button disabled={formik.isSubmitting || Object.keys(formik.errors).length>0} type="submit">Submit Form</button>
    </form>
  );
};

export default BasicForm;
