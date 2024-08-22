import { Image } from "react-bootstrap";
import "./form-header.scss";

const FormHeader = ({ title = "form" }) => {
  const spacingText = title.slice(0, -1);
  const lastLetter = title.slice(-1);

  return (
    <div className="form-header-wrapper">
      <Image src="/logos/logo-black.png" fluid />
      <div className="form-title">
        <h6 className="text-with-spacing">{spacingText}</h6>
        <h6 className="text-without-spacing">{lastLetter}</h6>
      </div>
    </div>
  );
};

export default FormHeader;
