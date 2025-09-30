import { useEffect, useState } from "react";
import { Button, Container, Row, Form, Col, Card } from "react-bootstrap";
import { getStorageData, setStorageData } from "../../services/storage";
import { useNavigate, useParams } from "react-router-dom";
import "./Edit.css";

const EditProduct = () => {
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
  const { id } = useParams();

  
useEffect(() => {
  const data = getStorageData() || [];
  console.log("All Products:", data);
  console.log("Edit ID:", id);

  const record = data.find((product) => String(product.id) === String(id));
  console.log("Found Product:", record);

  if (record) {
    setInputForm(record);
  }
}, [id]);


  const validationForm = (formData) => {
    const errors = {};
    if (!formData.title.trim()) errors.title = "Title is required";
    if (!formData.desc.trim()) errors.desc = "Description is required";
    if (!formData.price) errors.price = "Price is required";
    else if (Number(formData.price) <= 0) errors.price = "Price must be positive";
    if (!formData.quantity) errors.quantity = "Quantity is required";
    else if (Number(formData.quantity) <= 0)
      errors.quantity = "Quantity must be positive";
    if (!formData.category) errors.category = "Category is required";
    if (!formData.image.trim()) errors.image = "Image URL is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validationForm(inputForm);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const data = getStorageData() || [];
    const updatedData = data.map((product) =>
      String(product.id) === String(inputForm.id) ? inputForm : product
    );

    setStorageData(updatedData);
    navigate("/"); // redirect after save
  };


  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputForm({ ...inputForm, [name]: value });
  };

  if (!inputForm.id) {
    return (
      <Container className="py-5 text-center text-light">
        <h3>⚠ Product not found</h3>
      </Container>
    );
  }

  return (
    <Container className="edit-container py-5">
      <h2 className="text-center form-title mb-4">Edit Product</h2>

      <Card className="p-4 shadow-lg rounded bg-dark text-light">
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={3} className="text-white">
              Title
            </Form.Label>
            <Col sm={7}>
              <Form.Control
                type="text"
                value={inputForm.title}
                name="title"
                onChange={handleChange}
                isInvalid={!!errors.title}
                placeholder="Enter product title"
              />
              <Form.Control.Feedback type="invalid">
                {errors.title}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={3} className="text-white">
              Description
            </Form.Label>
            <Col sm={7}>
              <Form.Control
                type="text"
                value={inputForm.desc}
                name="desc"
                onChange={handleChange}
                isInvalid={!!errors.desc}
                placeholder="Enter product description"
              />
              <Form.Control.Feedback type="invalid">
                {errors.desc}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={3} className="text-white">
              Price
            </Form.Label>
            <Col sm={7}>
              <Form.Control
                type="number"
                value={inputForm.price}
                name="price"
                onChange={handleChange}
                isInvalid={!!errors.price}
                placeholder="Enter price"
              />
              <Form.Control.Feedback type="invalid">
                {errors.price}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={3} className="text-white">
              Quantity
            </Form.Label>
            <Col sm={7}>
              <Form.Control
                type="number"
                value={inputForm.quantity}
                name="quantity"
                onChange={handleChange}
                isInvalid={!!errors.quantity}
                placeholder="Enter quantity"
              />
              <Form.Control.Feedback type="invalid">
                {errors.quantity}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={3} className="text-white">
              Movie Category
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
            <Form.Label column sm={3} className="text-white">
              Product Image
            </Form.Label>
            <Col sm={7}>
              <Form.Control
                type="text"
                value={inputForm.image}
                name="image"
                onChange={handleChange}
                isInvalid={!!errors.image}
                placeholder="Enter image URL"
              />
              <Form.Control.Feedback type="invalid">
                {errors.image}
              </Form.Control.Feedback>
            </Col>
          </Form.Group>

          {inputForm.image && (
            <div className="text-center mb-3">
              <img
                src={inputForm.image}
                alt="Preview"
                className="img-preview rounded shadow"
              />
            </div>
          )}

          <div className="text-center">
            <Button variant="warning" type="submit" size="lg">
              Save Changes
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default EditProduct;

