import { useEffect, useState } from "react";
import { Button, Container, Row, Col, Form, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { getSingleBlogAsync, updateBlogAsync } from "../service/ation/action";
import "./Edit.css";

const EditBlog = () => {
  const { id } = useParams();
  const { blog, isUpdated } = useSelector((state) => state.blogReducer);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialState = {
    id: "",
    title: "",
    desc: "",
    img: "",
    category: "",
  };

  const [inputForm, setInputForm] = useState(initialState);
  const [error, setError] = useState({});

  const handleChange = (e) => {
    setInputForm({
      ...inputForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formError = {};
    if (!inputForm.title) formError.title = "Title Required";
    if (!inputForm.desc) formError.desc = "Description Required";
    if (!inputForm.img) formError.img = "Image URL Required";
    if (!inputForm.category) formError.category = "Category Required";

    setError(formError);
    if (Object.keys(formError).length > 0) return;

    dispatch(updateBlogAsync(inputForm));
  };

  useEffect(() => {
    if (isUpdated) navigate("/");
  }, [isUpdated]);

  useEffect(() => {
    dispatch(getSingleBlogAsync(id));
  }, [id]);

  useEffect(() => {
    if (blog) {
      setInputForm({
        ...initialState,
        ...blog,
      });
    }
  }, [blog]);

  return (
    <Container className="py-5 edit-wrapper">
      <Card className="p-4 p-md-5 glass-card rounded-4 shadow-lg">

        <Row>
          {/* Header */}
          <Col md={12} className="text-center mb-4">
            <h1 className="fw-bold display-6">Edit Blog</h1>
            <p className="text-muted">Update your blog content ✏️</p>
          </Col>

          {/* Left Form */}
          <Col md={7}>
            <Form onSubmit={handleSubmit} className="form-modern">

              {/* Title */}
              <div className="mb-4">
                <label className="form-label">Blog Title</label>
                <input
                  type="text"
                  className="form-control modern-input"
                  name="title"
                  value={inputForm.title}
                  onChange={handleChange}
                  placeholder="Enter blog title"
                />
                {error.title && <small className="text-danger">{error.title}</small>}
              </div>

              {/* Category */}
              <div className="mb-4">
                <label className="form-label">Category</label>
                <select
                  className="form-select modern-input"
                  name="category"
                  value={inputForm.category}
                  onChange={handleChange}
                >
                  <option value="">Select category</option>
                  {["Tech", "Fashion", "Sports", "News", "Travel", "Lifestyle"].map((v, i) => (
                    <option value={v} key={i}>{v}</option>
                  ))}
                </select>
                {error.category && <small className="text-danger">{error.category}</small>}
              </div>

              {/* Description */}
              <div className="mb-4">
                <label className="form-label">Description</label>
                <textarea
                  className="form-control modern-input"
                  rows="4"
                  name="desc"
                  value={inputForm.desc}
                  onChange={handleChange}
                  placeholder="Update your blog description"
                ></textarea>
                {error.desc && <small className="text-danger">{error.desc}</small>}
              </div>

              {/* Image URL */}
              <div className="mb-4">
                <label className="form-label">Image URL</label>
                <input
                  type="text"
                  className="form-control modern-input"
                  name="img"
                  value={inputForm.img}
                  onChange={handleChange}
                  placeholder="Enter image URL"
                />
                {error.img && <small className="text-danger">{error.img}</small>}
              </div>

              {/* Submit */}
              <Button className="submit-btn mt-3 px-4 py-2" type="submit">
                Update Blog
              </Button>
            </Form>
          </Col>

          {/* Right Preview */}
          <Col md={5} className="text-center mt-4 mt-md-0">
            <div className="preview-box shadow-sm rounded-4">
              {inputForm.img ? (
                <img
                  src={inputForm.img}
                  alt="preview"
                  className="preview-img rounded-4"
                />
              ) : (
                <div className="no-img">🖼 Image preview will appear here</div>
              )}
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default EditBlog;
