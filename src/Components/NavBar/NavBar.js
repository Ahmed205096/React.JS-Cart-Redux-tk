import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const cartLength = cart.length > 99 ? "+99" : cart.length;

  return (
    <>
      <Navbar
        style={{ position: "fixed", zIndex: 100, width: "100%" }}
        expand="lg"
        className="bg-body-tertiary"
      >
        <Container>
          
              <Link className="navbar-brand" to={"/"}>
                Cart App
              </Link>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
       
              <Navbar.Collapse className="basic-navbar-nav">
                <Nav className="me-auto">
                  <Link to={"/"} className="nav-link">
                    Home
                  </Link>
                  <Link to={"/cart"} className="nav-link">
                    <FontAwesomeIcon icon={faCartShopping} />
                    <span style={{ color: "red", fontSize: "12px" }}>
                      {cartLength}
                    </span>
                  </Link>
                </Nav>
              </Navbar.Collapse>
            
        </Container>
      </Navbar>
    </>
  );
}
