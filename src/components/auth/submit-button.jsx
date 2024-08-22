import ButtonLoader from "../common/button-loader";
import { Button } from "react-bootstrap";
import "./submit-button.scss";

const SubmitButton = ({ formik, loading = false, label }) => {
  return (
    <Button
      variant="secondary"
      type="submit"
      className="submit-button"
      disabled={!formik.isValid || loading}
    >
      {loading ? (
        <>
          <span>&nbsp;</span>
          <ButtonLoader />
          <span>&nbsp;</span>
        </>
      ) : (
        <span className="button-label">{label}</span>
      )}
    </Button>
  );
};

export default SubmitButton;
