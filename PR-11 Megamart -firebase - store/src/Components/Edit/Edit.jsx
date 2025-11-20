import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { getMenAsync, updateMenAsync } from '../Services/Action/Action';

const Edit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { currentProduct } = useSelector((state) => state.MenReducer);

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    desc: '',
    price: '',
    categoryType: '',
    brand: '',
    pattern: [],
    image: '',
  });

  const categoryOptions = ['bootcut Jeans', 'straightfit', 'oversized', 'denim'];
  const brandOptions = ['raymond', 'USPA', 'Levis', 'mufti'];
  const patternOptions = ['cotton', 'linen', 'polyester', 'wool'];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        pattern: checked
          ? [...prev.pattern, value]
          : prev.pattern.filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  useEffect(() => {
    dispatch(getMenAsync(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (currentProduct) {
      setFormData(currentProduct);
    }
  }, [currentProduct]);

 const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(updateMenAsync(formData)).then(() => {
    navigate('/Men');
  });
};


  return (
    <>
      <h1 className="text-center my-4">Edit Product</h1>
      <section className="container">
        <Form onSubmit={handleSubmit}>
          {/* Product Name */}
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">Product Name</Form.Label>
            <Col sm="6">
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Col>
          </Form.Group>

          {/* Product Description */}
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">Product Description</Form.Label>
            <Col sm="6">
              <Form.Control
                type="text"
                name="desc"
                value={formData.desc}
                onChange={handleChange}
                required
              />
            </Col>
          </Form.Group>

          {/* Product Price */}
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">Product Price</Form.Label>
            <Col sm="6">
              <Form.Control
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </Col>
          </Form.Group>

          {/* Category */}
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">Category</Form.Label>
            <Col sm="6">
              <Form.Select
                name="categoryType"
                value={formData.categoryType}
                onChange={handleChange}
                required
              >
                <option value="">Select Category</option>
                {categoryOptions.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </Form.Select>
            </Col>
          </Form.Group>

          {/* Brand */}
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">Brand</Form.Label>
            <Col sm="6">
              <Form.Select
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                required
              >
                <option value="">Select Brand</option>
                {brandOptions.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </Form.Select>
            </Col>
          </Form.Group>

          {/* Pattern */}
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">Pattern</Form.Label>
            <Col sm="6" className="d-flex flex-wrap gap-3">
              {patternOptions.map((pattern) => (
                <Form.Check
                  key={pattern}
                  type="checkbox"
                  label={pattern}
                  value={pattern}
                  checked={formData.pattern.includes(pattern)}
                  onChange={handleChange}
                />
              ))}
            </Col>
          </Form.Group>

          {/* Image */}
          <Form.Group as={Row} className="mb-4">
            <Form.Label column sm="2">Image URL</Form.Label>
            <Col sm="6">
              <Form.Control
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                required
              />
            </Col>
          </Form.Group>

          <Button variant="primary" type="submit">Update</Button>
        </Form>
      </section>
    </>
  );
};

export default Edit;
