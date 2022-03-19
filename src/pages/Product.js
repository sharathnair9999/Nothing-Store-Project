import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useProducts } from "../contexts/product-context";


const Product = () => {
  
  const {productId} = useParams()
  const {findProduct} = useProducts()
  const product = findProduct(parseInt(productId))

  return (
    <div>
    <p>My product page {product?.name}</p>

    <br />
    <Link to={'/products'}>Back to Products</Link>
    </div>
  );
};

export default Product;
