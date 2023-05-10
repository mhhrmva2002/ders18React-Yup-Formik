import { useFormik } from "formik";
import { BasicFormValidation } from "./schema";
import { v4 as uuidv4 } from 'uuid';
import "./form.css";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';

const BasicForm = () => {
  //form submit function
  const handleSubmit = async(values, actions) => {
    values.id = uuidv4();
    await axios.post("http://localhost:3000/products",values);
    actions.resetForm();
    window.location.reload()
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
   <div style={{display:"flex", justifyContent:"center", marginTop:"50px", }} >
    <form style={{ width:"45%" ,padding:"50px", boxShadow:"  0.3em 0.3em 1em rgba(0, 0, 0, 0.3)"}} onSubmit={formik.handleSubmit}>
     <div style={{display:"flex", justifyContent:"center"}}><h1>Product Add Form</h1></div> 
      <TextField style={{margin:"15px 0"}}
      fullWidth
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


      <TextField style={{margin:"15px 0"}}
      fullWidth
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


      <TextField style={{margin:"15px 0"}}
      fullWidth
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


      <TextField style={{margin:"15px 0"}}
      fullWidth
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


      <TextField style={{margin:"15px 0"}}
      fullWidth
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
      />    <div style={{display:"flex", justifyContent:"center"}}>
     <Button  variant="contained"  disabled={formik.isSubmitting || Object.keys(formik.errors).length>0} type="submit">Submit Form</Button>
     </div>
    </form>
    </div>
  );
};

export default BasicForm;
