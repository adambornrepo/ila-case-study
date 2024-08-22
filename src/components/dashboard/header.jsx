import { useEffect, useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Image,
  Button,
  NavDropdown,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./header.scss";

const Header = () => {
  const [mode, setMode] = useState("default");

  const handleScroll = () => {
    const scrollYPosition = window.scrollY;
    if (scrollYPosition > 250) {
      setMode("changed");
    } else {
      setMode("default");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <Navbar sticky="top" className={`top-nav-menu bg-${mode}`}>
        <Container fluid>
          <Navbar.Brand>
            <Image
              src={`/logos/${
                mode === "default" ? "logo-green.png" : "logo-white.png"
              }`}
              className="img-fluid"
              alt="ILA - Logo"
            />
          </Navbar.Brand>

          <div className="menu-wrapper">
            <Button className="add-property">Profile</Button>
          </div>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
