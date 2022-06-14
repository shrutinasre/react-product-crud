import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useEffect } from "react";

function ProductForm({ product, resetForm }) {
  const [mode, setMode] = useState("N");

  useEffect(() => {
    if (product && product.id > 0) {
      setMode("E");
    } else {
      setMode("N");
    }
  }, [product]);

  const doFormReset = () => {
    resetForm();
    formik.handleReset();
  };

  const formik = useFormik({
    initialValues: { product },
    validationSchema: Yup.object({
      title: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
      category: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
      desc: Yup.string().max(25, "Must be 15 characters or less").required("Required"),
      price: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });
  return (
    <>
      <Form>
        <div className="row">
          <div className="col">
            <div className="mb-3">
              <label htmlFor="titleInput" className="form-label">
                Product Title
              </label>
              <input type="text" className={"form-control " + (formik.touched.title && formik.errors.title ? "is-invalid" : "")} id="titleInput" placeholder="Please Enter First Name" name="title" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.title} />
              <small className="text-danger fw-bold">{formik.touched.title && formik.errors.title ? <div>{formik.errors.title}</div> : null}</small>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="mb-3">
              <label htmlFor="descInput" className="form-label">
                Product Description
              </label>
              <input type="text" className={"form-control " + (formik.touched.desc && formik.errors.desc ? "is-invalid" : "")} id="descInput" placeholder="Please Enter First Name" name="desc" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.desc} />
              <small className="text-danger fw-bold">{formik.touched.desc && formik.errors.desc ? <div>{formik.errors.desc}</div> : null}</small>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="mb-3">
              <label htmlFor="catInput" className="form-label">
                Product Category
              </label>
              <input type="text" className={"form-control " + (formik.touched.category && formik.errors.category ? "is-invalid" : "")} id="catInput" placeholder="Please Enter First Name" name="category" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.category} />
              <small className="text-danger fw-bold">{formik.touched.category && formik.errors.category ? <div>{formik.errors.category}</div> : null}</small>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="mb-3">
              <label htmlFor="titlePrice" className="form-label">
                Product Price
              </label>
              <input type="text" className={"form-control " + (formik.touched.price && formik.errors.price ? "is-invalid" : "")} id="titleInput" placeholder="Please Enter First Name" name="price" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.price} />
              <small className="text-danger fw-bold">{formik.touched.price && formik.errors.price ? <div>{formik.errors.price}</div> : null}</small>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <button type="submit" className={"btn me-2 " + (mode == "N" ? "btn-primary" : "btn-warning")}>
              {mode == "N" ? "Save Student" : "Update Student"}
            </button>
            <button type="button" className="btn btn-secondary" onClick={() => doFormReset()}>
              Reset
            </button>
          </div>
        </div>
      </Form>
    </>
  );
}

export default ProductForm;
