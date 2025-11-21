import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import { addNewBlogAsync } from "../../service/ation/action";

const AddBlog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isCreated, isError } = useSelector((state) => state.blogReducer);

  const initialState = {
    id: "",
    title: "",
    desc: "",
    img: "",
    category: "",
  };

  const [input, setInput] = useState(initialState);
  const [error, setError] = useState({});

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let err = {};

    if (!input.title.trim()) err.title = "Title required";
    if (!input.desc.trim()) err.desc = "Description required";
    if (!input.img.trim()) err.img = "Image URL required";
    if (!input.category.trim()) err.category = "Category required";

    setError(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newBlog = {
      ...input,
      id: String(Math.floor(Math.random() * 10000)),
    };
    dispatch(addNewBlogAsync(newBlog));
  };

  if (isCreated) navigate("/");

  return (
    <Container className="py-5 add-blog-wrapper">
      <Card className="p-4 p-md-5 glass-card rounded-4 shadow-lg">

        <Row>
          {/* Left → Title */}
          <Col md={12} className="text-center mb-4">
            <h1 className="fw-bold display-6">Add New Blog</h1>
            <p className="text-muted">Share your thoughts with the world 🌍</p>
          </Col>

          {/* Left → Form */}
          <Col md={7}>
            <Form onSubmit={handleSubmit} className="form-modern">
              <div className="mb-4">
                <label className="form-label">Blog Title</label>
                <input
                  type="text"
                  className="form-control modern-input"
                  placeholder="Enter title"
                  name="title"
                  value={input.title}
                  onChange={handleChange}
                />
                {error.title && <small className="text-danger">{error.title}</small>}
              </div>

              <div className="mb-4">
                <label className="form-label">Category</label>
                <select
                  name="category"
                  className="form-select modern-input"
                  value={input.category}
                  onChange={handleChange}
                >
                  <option value="">Select category</option>
                  {["Tech", "Fashion", "Sports", "News", "Lifestyle", "Travel"].map(
                    (v, i) => (
                      <option value={v} key={i}>
                        {v}
                      </option>
                    )
                  )}
                </select>
                {error.category && (
                  <small className="text-danger">{error.category}</small>
                )}
              </div>

              <div className="mb-4">
                <label className="form-label">Description</label>
                <textarea
                  className="form-control modern-input"
                  rows={4}
                  placeholder="Write your full blog content..."
                  name="desc"
                  value={input.desc}
                  onChange={handleChange}
                ></textarea>
                {error.desc && <small className="text-danger">{error.desc}</small>}
              </div>

              <div className="mb-4">
                <label className="form-label">Image URL</label>
                <input
                  type="text"
                  className="form-control modern-input"
                  placeholder="Paste image link"
                  name="img"
                  value={input.img}
                  onChange={handleChange}
                />
                {error.img && <small className="text-danger">{error.img}</small>}
              </div>

              <Button type="submit" size="lg" className="submit-btn mt-3">
                Publish Blog
              </Button>
            </Form>
          </Col>

          {/* Right → Live Preview */}
          <Col md={5} className="text-center mt-4 mt-md-0">
            <div className="preview-box shadow-sm rounded-4">
              {input.img ? (
                <img
                  src={input.img}
                  alt="Preview"
                  className="preview-img rounded-4"
                />
              ) : (
                <div className="no-img">🖼 Live preview will show here</div>
              )}
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default AddBlog;
