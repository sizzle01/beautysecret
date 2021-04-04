import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../asset/images/logo.jpeg";
import Data from "../../Utils/data";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavbarBrand,
  NavDropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { Facebook, Twitter, LinkedIn } from "@material-ui/icons";
import { NavLink, Link, withRouter } from "react-router-dom";
import "./navbar.css";
function Nave(props) {
  const pathName = props?.location?.pathname;
  return (
    <div>
      <Navbar expand="lg" sticky="top" className="header">
        {/*Logo Link*/}
        <Nav.Link as={NavLink} to="/" className="">
          <Navbar.Brand className="nav-home">
            <img src={Logo} alt="" className="nav-home" />
          </Navbar.Brand>
        </Nav.Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="drop-down">
          <Nav className="header_left">
            <Nav.Link
              as={NavLink}
              to="/"
              className={pathName == "/" ? "header_link_active" : "header_link"}
            >
              HOME
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/about"
              className={
                pathName == "/about" ? "header_link_active" : "header_link"
              }
            >
              ABOUT
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/services"
              className={
                pathName == "/services" ? "header_link_active" : "header_link"
              }
            >
              SERVICES
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/appointment"
              className={
                pathName == "/appointment"
                  ? "header_link_active"
                  : "header_link"
              }
            >
              APPOINTMENT
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/contact"
              className={
                pathName == "/contact" ? "header_link_active" : "header_link"
              }
            >
              CONTACT
            </Nav.Link>
          </Nav>

          <div className="header_right">
            {Object.keys(Data.socials).map((key) => (
              <a href={Data.socials[key].link} target="_blank">
                {Data.socials[key].icon}
              </a>
            ))}
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default withRouter(Nave);
