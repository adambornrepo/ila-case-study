import { Breadcrumb, Container } from "react-bootstrap";
import Products from "../../components/dashboard/products";

const ProductListPage = () => {
  return (
    <Container className="product-list-page-container py-3 bg-primary h-100">
      <Breadcrumb>
        <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
      </Breadcrumb>
      <Products/>
    </Container>
  );
};

export default ProductListPage;
