import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { createUserAsync } from "../service/ation/athencation";
import "./Signup.css";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { errMsg, isCreated } = useSelector((state) => state.authReducer);

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
    if (!inputForm.email || !inputForm.password) {
      alert("Please fill all fields");
      return;
    }
    dispatch(createUserAsync(inputForm));
  };

  useEffect(() => {
    if (isCreated) {
      navigate("/signIn");
    }
  }, [isCreated, navigate]);

  return (
    <Container fluid className="signup-container">
      <Row className="vh-100">

        {/* LEFT DARK SIDE */}
        <Col
          md={6}
          className="d-none d-md-flex justify-content-center align-items-center signup-left"
        >
          <h1 className="brand-title">BLOG</h1>
          <p className="brand-subtitle">Join & Start Writing Today</p>
        </Col>

        {/* RIGHT FORM SIDE */}
        <Col
          md={6}
          className="d-flex justify-content-center align-items-center bg-white"
        >
          <Card className="p-5 shadow-lg border-0 signup-card">
            <h2 className="fw-bold text-center mb-2 text-dark">
              Create Account ✨
            </h2>
            <p className="text-center text-muted mb-4">
              Fill in your details to sign up
            </p>

            {errMsg && (
              <p className="text-danger text-center fw-semibold">{errMsg}</p>
            )}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
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
                  Sign Up
                </Button>
              </div>
            </Form>

            <p className="text-center mt-3 text-muted">
              Already have an account?{" "}
              <Link to="/signIn" className="text-dark fw-semibold">
                Sign In
              </Link>
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
