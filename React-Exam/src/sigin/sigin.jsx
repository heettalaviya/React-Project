import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import { signInAsync } from "../service/ation/athencation";
import "./Signin.css";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { errMsg, user } = useSelector((state) => state.authReducer);

  const [inputForm, setInputForm] = useState({
    email: "",
    password: "",
  });

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setInputForm({
      ...inputForm,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signInAsync(inputForm));
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <Container fluid className="signin-container">
      <Row className="vh-100">
        {/* LEFT SIDE DARK UI */}
        <Col
          md={6}
          className="d-none d-md-flex justify-content-center align-items-center signin-left"
        >
          <h1 className="brand-title">BLOG</h1>
          <p className="brand-subtitle">Create. Share. Inspire.</p>
        </Col>

        {/* RIGHT SIDE FORM */}
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center bg-white"
        >
          <Card className="p-5 shadow-lg border-0 signin-card">
            <h2 className="fw-bold text-center mb-2 text-dark">
              Welcome Back 👋
            </h2>
            <p className="text-center text-muted mb-4">
              Login to manage your blogs easily
            </p>

            {errMsg && <p className="text-danger text-center">{errMsg}</p>}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={inputForm.email}
                  onChange={handleChanged}
                  placeholder="Enter your email"
                  className="custom-input"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={inputForm.password}
                  onChange={handleChanged}
                  placeholder="Enter your password"
                  className="custom-input"
                  required
                />
              </Form.Group>

              <div className="d-grid mb-3">
                <Button type="submit" variant="dark" className="py-2 custom-btn">
                  Sign In
                </Button>
              </div>
            </Form>

            <p className="text-center mt-3 text-muted">
              Don't have an account?{" "}
              <Link to="/signUp" className="text-dark fw-semibold">
                Create Account
              </Link>
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
