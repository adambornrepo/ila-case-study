import { Breadcrumb, Container } from "react-bootstrap";
import { HiChevronRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const ProductDetailsPage = () => {
  return (
    <Container className="product-details-page-container py-3 h-100">
      <div className="d-flex align-items-center gap-2">
        <HiChevronRight size={20} />
        <Link to="/dashboard" className="text-decoration-none text-primary">Dashboard</Link>
        <span>/</span>
        <span>Product</span>
      </div>
    </Container>
  );
};

export default ProductDetailsPage;
