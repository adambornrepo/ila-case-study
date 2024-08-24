import { Container } from "react-bootstrap";
import Products from "../../components/dashboard/products";
import { HiChevronRight } from "react-icons/hi2";

const ProductListPage = () => {
  return (
    <Container className="product-list-page-container py-3 h-100">
      <div className="d-flex align-items-center gap-2 fs-10 py-2">
        <HiChevronRight size={20} />
        <span>Dashboard</span>
      </div>
      <Products />
    </Container>
  );
};

export default ProductListPage;
