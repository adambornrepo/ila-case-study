import { useDispatch, useSelector } from "react-redux";
import {
  setCreateFormState,
  setTableMode,
} from "../../store/slices/product-slice";
import { Button, ButtonGroup } from "react-bootstrap";
import { BsList, BsCardText, BsPlus } from "react-icons/bs";
import CreateProduct from "./create-product";
import EditProduct from "./edit-product";

const TableTop = () => {
  const { tableMode } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const handleProductCreateForm = () => {
    dispatch(setCreateFormState(true));
  };
  return (
    <>
      <div className="table-top-buttons">
        <ButtonGroup className="table-modes">
          <Button
            variant="secondary"
            title="Compact"
            active={tableMode === "compact"}
            onClick={() => dispatch(setTableMode("compact"))}
          >
            <BsList size={16} />
          </Button>
          <Button
            variant="secondary"
            title="Flexible"
            active={tableMode === "flexible"}
            onClick={() => dispatch(setTableMode("flexible"))}
          >
            <BsCardText size={16} />
          </Button>
        </ButtonGroup>
        <Button
          className="btn-new-product"
          title="Create Product"
          onClick={handleProductCreateForm}
        >
          <BsPlus size={20} />
          New
        </Button>
      </div>
      <CreateProduct />
      <EditProduct />
    </>
  );
};

export default TableTop;
