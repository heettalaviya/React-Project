import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Form, Row, Col, Button, Card } from 'react-bootstrap';
import './Add.css';
import {  addNewMenAsync } from '../Services/Action/Action';

const Add = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isCreated, isError } = useSelector((state) => state);

  const initialState = {
    id: '',
    name: '',
    desc: '',
    price: '',
    categoryType: '',
    brand: '',
    pattern: [],
    image: ''
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        pattern: checked
          ? [...prev.pattern, value]
          : prev.pattern.filter((p) => p !== value)
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Product name is required.';
    if (!formData.desc.trim()) newErrors.desc = 'Description is required.';
    if (!formData.price) newErrors.price = 'Price is required.';
    if (!formData.categoryType) newErrors.categoryType = 'Select a category.';
    if (!formData.brand) newErrors.brand = 'Select a brand.';
    if (formData.pattern.length === 0)
      newErrors.pattern = 'Select at least one pattern.';
    if (!formData.image.trim()) newErrors.image = 'Image URL is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newData = { ...formData, id: Math.floor(Math.random() * 10000) };
      dispatch(addNewMenAsync(newData));
    }
  };

  useEffect(() => {
    if (isCreated) {
      navigate('/men');
    }
  }, [isCreated]);

  return (
    <div className="add-container">
      <Card className="shadow-lg p-4 rounded-4">
        <h2 className="text-center mb-4 title">Add Product</h2>
        {isError && <p className="text-danger text-center">{isError}</p>}

        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="3">Product Name</Form.Label>
            <Col sm="9">
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter product name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'is-invalid' : ''}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="3">Description</Form.Label>
            <Col sm="9">
              <Form.Control
                as="textarea"
                rows={2}
                name="desc"
                placeholder="Enter product description"
                value={formData.desc}
                onChange={handleChange}
                className={errors.desc ? 'is-invalid' : ''}
              />
              {errors.desc && <span className="error">{errors.desc}</span>}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="3">Price (₹)</Form.Label>
            <Col sm="9">
              <Form.Control
                type="number"
                name="price"
                placeholder="Enter price"
                value={formData.price}
                onChange={handleChange}
                className={errors.price ? 'is-invalid' : ''}
              />
              {errors.price && <span className="error">{errors.price}</span>}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="3">Category</Form.Label>
            <Col sm="9">
              <Form.Select
                name="categoryType"
                value={formData.categoryType}
                onChange={handleChange}
                className={errors.categoryType ? 'is-invalid' : ''}
              >
                <option value="">Select category</option>
                {['bootcut Jeans', 'straightfit', 'oversized', 'denim'].map((v) => (
                  <option key={v} value={v}>{v}</option>
                ))}
              </Form.Select>
              {errors.categoryType && (
                <span className="error">{errors.categoryType}</span>
              )}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="3">Brand</Form.Label>
            <Col sm="9">
              <Form.Select
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                className={errors.brand ? 'is-invalid' : ''}
              >
                <option value="">Select brand</option>
                {['Raymond', 'USPA', 'Levis', 'Mufti'].map((v) => (
                  <option key={v} value={v}>{v}</option>
                ))}
              </Form.Select>
              {errors.brand && <span className="error">{errors.brand}</span>}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="3">Pattern</Form.Label>
            <Col sm="9">
              <div className="d-flex flex-wrap gap-3">
                {['cotton', 'linen', 'polyester', 'wool'].map((v) => (
                  <Form.Check
                    key={v}
                    type="checkbox"
                    label={v}
                    value={v}
                    checked={formData.pattern.includes(v)}
                    onChange={handleChange}
                  />
                ))}
              </div>
              {errors.pattern && <span className="error">{errors.pattern}</span>}
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-4">
            <Form.Label column sm="3">Image URL</Form.Label>
            <Col sm="9">
              <Form.Control
                type="text"
                name="image"
                placeholder="Paste image link"
                value={formData.image}
                onChange={handleChange}
                className={errors.image ? 'is-invalid' : ''}
              />
              {errors.image && <span className="error">{errors.image}</span>}
            </Col>
          </Form.Group>

          <div className="text-center">
            <Button variant="primary" type="submit" className="px-5 py-2 rounded-pill">
              Submit
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Add;
