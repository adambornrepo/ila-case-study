import { Image } from "react-bootstrap";
import "./form-header.scss";

const FormHeader = ({ title }) => {
  return (
    <div className="form-header-wrapper">
      <Image src="/logos/logo-black.png" fluid />
      <div className="form-title">
        <h6>{title}</h6>
      </div>
    </div>
  );
};

export default FormHeader;
