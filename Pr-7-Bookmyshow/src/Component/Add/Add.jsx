import { Button, Container, Row, Form, Col } from "react-bootstrap";
import { getStorageData, setStorageData } from "../../services/storage";
import { useNavigate } from "react-router-dom";
import generateUniqueId from "generate-unique-id";
import "./Add.css";
import { useState } from "react";

const AddProduct = () => {
  const initialState = {
    id: "",
    title: "",
    desc: "",
    price: "",
    quantity: "",
    category: "",
    image: "",
  };

  const [inputForm, setInputForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validationForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newProduct = {
      ...inputForm,
      id: generateUniqueId({ length: 5, useLetters: false }),
    };

    const oldData = getStorageData();
    setStorageData([...oldData, newProduct]);

    setInputForm(initialState);
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validationForm = () => {
    const errors = {};
    if (!inputForm.title.trim()) errors.title = "Title is required";
    if (!inputForm.desc.trim()) errors.desc = "Description is required";
    if (!inputForm.price) errors.price = "Price is required";
    else if (Number(inputForm.price) <= 0)
      errors.price = "Price must be positive";
    if (!inputForm.quantity) errors.quantity = "Quantity is required";
    else if (Number(inputForm.quantity) <= 0)
      errors.quantity = "Quantity must be positive";
    if (!inputForm.category) errors.category = "Category is required";
    if (!inputForm.image.trim()) errors.image = "Image URL is required";
    return errors;
  };

  return (
    <Container className="form-container py-5">
      <h2 className="form-title text-center mb-4">Add New Product</h2>
      <Form onSubmit={handleSubmit} className="p-4 shadow-lg rounded bg-white">
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={3} style={{color:"black"}}>
            Title
          </Form.Label>
          <Col sm={7}>
            <Form.Control
              type="text"
              placeholder="Enter product title"
              value={inputForm.title}
              name="title"
              onChange={handleChange}
              isInvalid={!!errors.title}
            />
            <Form.Control.Feedback type="invalid">
              {errors.title}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={3}>
            Description
          </Form.Label>
          <Col sm={7}>
            <Form.Control
              type="text"
              placeholder="Enter product description"
              value={inputForm.desc}
              name="desc"
              onChange={handleChange}
              isInvalid={!!errors.desc}
            />
            <Form.Control.Feedback type="invalid">
              {errors.desc}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={3}>
            Price
          </Form.Label>
          <Col sm={7}>
            <Form.Control
              type="number"
              placeholder="Enter product price"
              value={inputForm.price}
              name="price"
              onChange={handleChange}
              isInvalid={!!errors.price}
            />
            <Form.Control.Feedback type="invalid">
              {errors.price}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={3}>
            Quantity
          </Form.Label>
          <Col sm={7}>
            <Form.Control
              type="number"
              placeholder="Enter product quantity"
              value={inputForm.quantity}
              name="quantity"
              onChange={handleChange}
              isInvalid={!!errors.quantity}
            />
            <Form.Control.Feedback type="invalid">
              {errors.quantity}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={3}>
            Category
          </Form.Label>
          <Col sm={7}>
            <Form.Select
              name="category"
              value={inputForm.category}
              onChange={handleChange}
              isInvalid={!!errors.category}
            >
              <option value="">Select Movie Category...</option>
              <option value="Gujarati Movie">Gujarati Movie</option>
              <option value="Hindi Movie">Hindi Movie</option>
              <option value="English Movie">English Movie</option>
              <option value="South Indian Movie">South Indian Movie</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.category}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-4">
          <Form.Label column sm={3}>
            Product Image
          </Form.Label>
          <Col sm={7}>
            <Form.Control
              type="text"
              placeholder="Enter product image URL"
              value={inputForm.image}
              name="image"
              onChange={handleChange}
              isInvalid={!!errors.image}
            />
            <Form.Control.Feedback type="invalid">
              {errors.image}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <div className="text-center">
          <Button variant="success" size="lg" type="submit">
            Add Product
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default AddProduct;
