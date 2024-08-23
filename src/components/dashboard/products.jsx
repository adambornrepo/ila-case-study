import { useEffect, useState } from "react";
import { getAllProducts } from "../../api/product-service";
import { setProductsData } from "../../store/slices/product-slice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import ProductTable from "./product-table";
import "./products.scss";

const Products = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      const resp = await getAllProducts();
      console.log(resp);
      dispatch(setProductsData(resp));
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="products-wrapper">
          <ProductTable loading={loading}/>
      </div>
    </>
  );
};

export default Products;
