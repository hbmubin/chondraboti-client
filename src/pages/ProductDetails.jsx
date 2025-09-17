import { useLoaderData } from "react-router";
import ProductTop from "../components/productDeatils/ProductTop";


const ProductDetails = () => {
    const product = useLoaderData()
    





  return (
    <div className="product-details">
      <div className="container-default px-2 py-6">
        <ProductTop product={product}></ProductTop>
      </div>
    </div>
  );
};

export default ProductDetails;
