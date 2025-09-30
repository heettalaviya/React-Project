import { useState } from "react";
import { Container, Navbar, Button, Nav, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const [city, setCity] = useState("Surat");

  const cities = ["Ahmedabad", "Vadodara", "Surat", "Rajkot", "Gandhinagar"];

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm py-3">
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="fw-bold fs-3 text-danger"
          style={{ letterSpacing: "1px" }}
        >
          BookMyShow
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar">
          <FaBars size={20} />
        </Navbar.Toggle>

        <Navbar.Collapse id="main-navbar" className="justify-content-end">
          <Nav className="align-items-center gap-3">
            <Dropdown>
              <Dropdown.Toggle variant="light" id="location-dropdown" className="fw-medium">
                {city} 
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {cities.map((c) => (
                  <Dropdown.Item key={c} onClick={() => setCity(c)}>
                    {c}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            <Button as={Link} to="/AddProduct" variant="warning" className="fw-semibold">
              Add Product
            </Button>

            <Button variant="danger" className="fw-semibold px-4">
              Sign In
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
