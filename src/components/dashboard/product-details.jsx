import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useParams, useNavigate } from "react-router-dom";
import { getProductDetails } from "../../api/product-service";
import { Row, Col, Spinner, Button, Image } from "react-bootstrap";
import { HiStar } from "react-icons/hi2";
import { TbArrowBackUp } from "react-icons/tb";
import "./product-details.scss";

const ProductDetails = () => {
  const { data } = useSelector((state) => state.product);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  const formatRating = (product) => {
    const { rate, count } = product?.rating || {};
    const starCount = rate || 0;
    const reviewCount = count || 0;
    const starText = rate >= 1 ? "stars" : "star";
    const reviewText = count >= 1 ? "reviews" : "review";

    return `${starCount} ${starText} (${reviewCount} ${reviewText})`;
  };

  const fetchProductDetails = async () => {
    try {
      const resp = await getProductDetails(id);
      // This code was written to show products
      // that cannot be fetched from the backend
      // when the product is added
      // since FakeApi is used.
      // If Fake Api cannot be fetched, find it from the state.data

      if (!resp) {
        const foundProduct = data.find((product) => product.id === +id);
        if (!foundProduct) {
          toast.error("Product not found");
          navigate("/dashboard");
        }
        setProduct(foundProduct);
      } else {
        setProduct(resp);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="product-details-loading">
        <Spinner animation="border" size="lg" />
      </div>
    );
  }

  return (
    <div className="product-details">
      <Button
        variant="link"
        className="back-button"
        onClick={() => navigate(-1)}
      >
        <TbArrowBackUp /><span>Back</span>
      </Button>
      <Row className="product-details-row">
        <Col xs={12} md={6} className="product-image-col">
          <Image
            src={product.image}
            alt={product.title}
            className="product-image mb-3 mb-md-0"
            fluid
          />
        </Col>
        <Col xs={12} md={6} className="product-info-col">
          <div className="product-info-wrapper">
            <div className="product-category">{product.category}</div>
            <div className="product-title">{product.title}</div>
            <div className="product-rating"><HiStar size={20} color="orange" /> {formatRating(product)}</div>
            <div className="product-description">{product.description}</div>
            <div className="product-price">€&nbsp;{product.price}</div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
