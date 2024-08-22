import { Spinner } from "react-bootstrap";

const ButtonLoader = ({ size = "sm" }) => {
  return <Spinner animation="border" size={size} />;
};

export default ButtonLoader;
