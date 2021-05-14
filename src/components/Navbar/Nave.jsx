import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../asset/images/logo.png";
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
import { Link, NavLink, withRouter } from "react-router-dom";
import "./navbar.css";
function Nave(props) {
  const pathName = props?.location?.pathname;
  return (
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
          ></Nav.Link>

          <NavDropdown
            title="ABOUT"
            id="basic-nav-dropdown"
            className="about-dropdown"
          >
            <NavDropdown.Item
              id="drop-item"
              as={NavLink}
              to="/about"
              className={pathName == "/" ? "header_link_active" : "header_link"}
            >
              ABOUT US
            </NavDropdown.Item>
            <NavDropdown.Item
              href="#action/3.2"
              id="drop-item"
              as={NavLink}
              to="/about"
              className={pathName == "/" ? "header_link_active" : "header_link"}
            >
              OUR MISSION AND VISION
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3" id="drop-item">
              OUR TEAM
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3" id="drop-item">
              TESTIMONIALS
            </NavDropdown.Item>
          </NavDropdown>

          <Nav.Link
            as={NavLink}
            to="/services"
            className={
              pathName == "/services" ? "header_link_active" : "header_link"
            }
          >
            SERVICES
          </Nav.Link>
          {/*<Nav.Link
              as={NavLink}
              to="/post"
              className={
                pathName == "/contact" ? "header_link_active" : "header_link"
              }
            >
              GALLERY
            </Nav.Link>*/}
          {/*<Nav.Link
              as={NavLink}
              to="/gallery"
              className={
                pathName == "/contact" ? "header_link_active" : "header_link"
              }
            >
              PRICES
            </Nav.Link>*/}
          <Nav.Link
            as={NavLink}
            to="/post"
            className={
              pathName == "/contact" ? "header_link_active" : "header_link"
            }
          >
            BLOG
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
          {
            <a
              href="https://store.beautysecretskincarespa.com/"
              target="_blank"
              className="shop-link"
            >
              SHOP
            </a>
          }
          {
            <a
              href="https://my.setmore.com/bookingpage/5b550b07-a067-4fd2-a79c-9fd7bde90af4"
              target="_blank"
              className="shop-link"
            >
              APPOINTMENT
            </a>
          }
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
  );
}

export default withRouter(Nave);
