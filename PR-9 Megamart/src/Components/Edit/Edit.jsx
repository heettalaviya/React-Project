import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { GetOneMenData, UpdateMenData } from '../Services/Action/Action';

const Edit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { MenData } = useSelector((state) => state);

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
    dispatch(GetOneMenData(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (MenData) setFormData(MenData);
  }, [MenData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(UpdateMenData(formData));
    navigate('/Men');
  };

  return (
    <>
      <h1 className="text-center my-4">Edit Product</h1>
      <section className="container">
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Product Name
            </Form.Label>
            <Col sm="6">
              <Form.Control
                type="text"
                placeholder="Product Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Product Description
            </Form.Label>
            <Col sm="6">
              <Form.Control
                type="text"
                placeholder="Product Description"
                name="desc"
                value={formData.desc}
                onChange={handleChange}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Product Price
            </Form.Label>
            <Col sm="6">
              <Form.Control
                type="number"
                placeholder="Product Price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Product Category Type
            </Form.Label>
            <Col sm="6">
              <Form.Select
                name="categoryType"
                value={formData.categoryType}
                onChange={handleChange}
                required
              >
                <option value="">Select Category</option>
                {categoryOptions.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Product Brand
            </Form.Label>
            <Col sm="6">
              <Form.Select
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                required
              >
                <option value="">Select Brand</option>
                {brandOptions.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm="2">
              Product Pattern
            </Form.Label>
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

          <Form.Group as={Row} className="mb-4">
            <Form.Label column sm="2">
              Product Image
            </Form.Label>
            <Col sm="6">
              <Form.Control
                type="text"
                placeholder="Enter Image URL"
                name="image"
                value={formData.image}
                onChange={handleChange}
                required
              />
            </Col>
          </Form.Group>

          <Button variant="primary" type="submit">
            Update 
          </Button>
        </Form>
      </section>
    </>
  );
};

export default Edit;
