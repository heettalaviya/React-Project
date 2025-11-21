import { useEffect, useState } from "react";
import { Container, Row, Card, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogsAsync, deleteBlogAsync } from "../../service/ation/action";
import { useNavigate } from "react-router";
import "./Home.css";

const HOME = () => {
  const { blogs } = useSelector((state) => state.blogReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    dispatch(getAllBlogsAsync());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteBlogAsync(id));
  };

  const handleEdit = (id) => {
    navigate(`/editblog/${id}`);
  };


  const filteredBlogs = blogs?.filter((blog) => {
    const matchSearch =
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.desc.toLowerCase().includes(search.toLowerCase());

    const matchCategory = category ? blog.category === category : true;

    return matchSearch && matchCategory;
  });

 
  const categories = [...new Set(blogs?.map((b) => b.category))];

  return (
    <Container className="py-5 home-container">
      <h1 className="fw-bold text-center mb-4 display-6">Latest Blogs</h1>
      <div className="d-flex justify-content-between align-items-center gap-3 mb-4 flex-wrap">

        <Form.Control
          type="text"
          placeholder="Search blogs..."
          className="w-50"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Category Dropdown */}
        <Form.Select
          className="w-25"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </Form.Select>
      </div>

      <Row className="gy-4">
        {filteredBlogs && filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <div className="col-md-4 col-sm-6" key={blog.id}>
              <Card className="blog-card shadow-sm border-0">

                <div className="img-wrapper">
                  <Card.Img src={blog.img} className="card-img-top" alt="blog" />
                </div>

                <Card.Body className="p-4">
                  <span className="badge category-badge">{blog.category}</span>

                  <h5 className="fw-bold mt-2">{blog.title}</h5>

                  <p className="blog-desc text-muted">
                    {blog.desc.length > 100
                      ? blog.desc.slice(0, 100) + "..."
                      : blog.desc}
                  </p>

                  <div className="d-flex gap-2 mt-3">
                    <Button
                      size="sm"
                      className="btn-edit"
                      onClick={() => handleEdit(blog.id)}
                    >
                      Edit
                    </Button>

                    <Button
                      size="sm"
                      className="btn-delete"
                      onClick={() => handleDelete(blog.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))
        ) : (
          <h3 className="text-center text-muted">No Blogs Found</h3>
        )}
      </Row>
    </Container>
  );
};

export default HOME;
