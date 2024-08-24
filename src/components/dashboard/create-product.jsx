import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  setCreateFormState,
} from "../../store/slices/product-slice";
import { Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { isInValid, isValid } from "../../helpers/function/forms";
import { createProduct } from "../../api/product-service";
import toast from "react-hot-toast";
import { Modal } from "react-bootstrap";
import SubmitButton from "../auth/submit-button";
import "./product-form.scss";

const CreateProduct = () => {
  const { createFormState } = useSelector((state) => state.product);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => {
    formik.resetForm();
    dispatch(setCreateFormState(false));
  };

  const initialValues = {
    title: "",
    description: "",
    category: "",
    image: "",
    price: 0,
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required").min(2, "Minimum 2 chars").max(150, "Maximum 150 chars"),
    description: Yup.string().required("Description is required").min(2, "Minimum 2 chars").max(800, "Maximum 800 chars"),
    category: Yup.string().required("Category is required").min(2, "Minimum 2 chars"),
    price: Yup.number()
      .required("Price is required")
      .positive("Price must be positive"),
    image: Yup.string().required("Image URL is required"),
  });

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      const resp = await createProduct(values);
      dispatch(addProduct(resp));
      toast.success("New product created");
      handleClose();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <>
      <Modal
        show={createFormState}
        onHide={handleClose}
        className="create-product-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Create Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            noValidate
            onSubmit={formik.handleSubmit}
            className="create-product-form"
          >
            <Form.Group controlId="title" className="form-input-group">
              <Form.Control
                className="user-input"
                type="text"
                placeholder="Title"
                {...formik.getFieldProps("title")}
                isInvalid={isInValid(formik, "title")}
                isValid={isValid(formik, "title")}
              />
              <Form.Control.Feedback type="invalid" className="form-feedback">
                {formik.errors.title}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="description" className="form-input-group">
              <Form.Control
                className="user-input"
                as="textarea"
                maxLength={800}
                rows={3}
                placeholder="Description"
                {...formik.getFieldProps("description")}
                isInvalid={isInValid(formik, "description")}
                isValid={isValid(formik, "description")}
              />
              <Form.Control.Feedback type="invalid" className="form-feedback">
                {formik.errors.description}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="category" className="form-input-group">
              <Form.Control
                className="user-input"
                type="text"
                placeholder="Category"
                {...formik.getFieldProps("category")}
                isInvalid={isInValid(formik, "category")}
                isValid={isValid(formik, "category")}
              />
              <Form.Control.Feedback type="invalid" className="form-feedback">
                {formik.errors.category}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="image" className="form-input-group">
              <Form.Control
                className="user-input"
                type="text"
                placeholder="Image URL"
                {...formik.getFieldProps("image")}
                isInvalid={isInValid(formik, "image")}
                isValid={isValid(formik, "image")}
              />
              <Form.Control.Feedback type="invalid" className="form-feedback">
                {formik.errors.image}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="price" className="form-input-group">
              <Form.Control
                className="user-input"
                type="number"
                placeholder="Price"
                {...formik.getFieldProps("price")}
                isInvalid={isInValid(formik, "price")}
                isValid={isValid(formik, "price")}
              />
              <Form.Control.Feedback type="invalid" className="form-feedback">
                {formik.errors.price}
              </Form.Control.Feedback>
            </Form.Group>
            <SubmitButton formik={formik} loading={loading} label="Create" />
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CreateProduct;
