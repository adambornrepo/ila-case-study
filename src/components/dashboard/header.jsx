import { useDispatch, useSelector } from "react-redux";
import { logout as logoutAction } from "../../store/slices/auth-slice";
import { useAuth0 } from "@auth0/auth0-react";
import { Navbar, Container, Image, NavDropdown } from "react-bootstrap";
import { SlUserFemale, SlUser } from "react-icons/sl";
import { FaUserCircle } from "react-icons/fa";
import "./header.scss";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const { logout } = useAuth0();
  const dispatch = useDispatch();

  const getProfileIcon = () => {
    switch (user?.gender) {
      case "Male":
        return <SlUser className="profile-icon" size={30} />;
      case "Female":
        return <SlUserFemale className="profile-icon" size={30} />;
      default:
        return <FaUserCircle className="profile-icon" size={30} />;
    }
  };

  const handleLogout = () => {
    logout({
      logoutParams: { returnTo: window.location.origin },
      onLogout: () => dispatch(logoutAction()),
    });
  };

  return (
    <Navbar sticky="top" className={`top-nav-menu bg-white`}>
      <Container>
        <Navbar.Brand>
          <Image
            src={`/logos/logo-green.png`}
            className="img-fluid"
            alt="ILA - Logo"
          />
        </Navbar.Brand>

        <div className="menu-wrapper">
          <NavDropdown
            title={getProfileIcon()}
            id="profile-dropdown"
            className="profile-dropdown"
            align="end"
          >
            <NavDropdown.Item
              disabled
            >{`${user?.firstName} ${user?.lastName}`}</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              onClick={() => handleLogout()}
              className="logout-btn"
            >
              LOGOUT
            </NavDropdown.Item>
          </NavDropdown>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
