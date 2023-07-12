import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo1 from "./../Home/images/logo1.png";
import "./Navs.css";

const Navs = () => {
  return (
    <Container style={{ fontFamily: "AvenirArabic" }}>
      <Navbar className="navbar" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Brand
            className="logo"
            href="#home"
            style={{ fontFamily: "AvenirArabic", marginRight:0 }}
          >
            <img src={logo1} alt=""></img>
            <>
              كلين <span className="stead">ستيد</span>
            </>
          </Navbar.Brand>
          <Nav className="nav-contents" style={{ fontFamily: "AvenirArabic" }}>
            <Nav.Link className="home" href="#home">
              <h6>الرئيسية</h6>
            </Nav.Link>
            <Nav.Link className="services" href="#home">
              <h6>الخدمات</h6>
            </Nav.Link>
            <Nav.Link className="who-us" href="#link">
              <h6>من نحن</h6>
            </Nav.Link>
            <Nav.Link className="call-us" href="#home">
              <h6>اتصل بنا</h6>
            </Nav.Link>
          </Nav>
          <Nav
            className="book-now mr-auto"
            style={{ fontFamily: "AvenirArabic" }}
          >
            <button className="btn btn-success">احجز الان</button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Navs;
