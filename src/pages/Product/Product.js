import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import CartActionButton from "../../components/CartButton/CartActionButton";
import {
  Loader,
  Rating,
  useProducts,
  EmptyData,
  useCart,
  userDetails,
  useWishlist,
} from "../../imports/index";
import ImageDialog from "./ImageDialog";
import "./Product.css";

const Product = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { productState, productDispatch, showAlert } = useProducts();
  const { addToCart, productInCart } = useCart();
  const { addToWishlist, removeFromWishlist, productInWishlist } =
    useWishlist();
  const { product, loading, error } = productState;
  const inWishlist = productInWishlist(product);
  const inCart = productInCart(product);
  const { isLoggedUser } = userDetails();
  const [openDialog, setOpenDialog] = useState(false);

  const getProduct = async (id) => {
    try {
      productDispatch({ type: "LOADING", payload: true });
      const productData = await axios.get(`/api/products/${parseInt(id)}`);
      productDispatch({ type: "PRODUCT", payload: productData.data.product });
      productDispatch({ type: "LOADING", payload: false });
    } catch (error) {
      productDispatch({
        type: "SHOW_ALERT",
        payload: "Error Loading Product Information",
      });
      productDispatch({ type: "LOADING", payload: false });
    }
  };

  const wishlistAction = (prod) => {
    if (!isLoggedUser) {
      showAlert("danger", "Authentication is required", 1500);
      navigate("/login");
      return;
    }
    inWishlist ? removeFromWishlist(prod?.product._id) : addToWishlist(prod);
  };

  const sendProduct = () => {
    showAlert("success", "Copied Link to Clipboard");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getProduct(productId);
  }, [productId]);

  return (
    <div className="px-1 flex justify-fs items-center flex-col w-100">
      <div>
        {loading ? (
          <Loader />
        ) : error?.length > 0 ? (
          <EmptyData message={error} />
        ) : !product ? (
          <EmptyData message={"Error Loading Product Information"} />
        ) : (
          <main
            className={`product-section  flex-and-center flex-col w-100 py-1 relative ${
              inWishlist ? "saved" : ""
            } `}
          >
            <Link
              className="back_to_home mr-auto flex-and-center gap-sm"
              to={"/products"}
            >
              <i className="fa-solid fa-angle-left"></i>
              <span>Back To Products</span>
            </Link>
            <div className="product-main-info justify-fs items-fs flex gap-2">
              <div className="image-container relative">
                <img
                  src={product.imgUrl}
                  alt={product.title}
                  className="responsive-img"
                  onClick={() => setOpenDialog(true)}
                />
                <div className="absolute corner-btns">
                  <button
                    className="btn flex-and-center"
                    onClick={() => wishlistAction({ product })}
                  >
                    <i className="fas fa-heart save"></i>
                  </button>
                  <button
                    className="btn flex-and-center"
                    onClick={() => {
                      sendProduct();
                    }}
                  >
                    <i className="fas fa-share send"></i>
                  </button>
                </div>
              </div>
              <div className="side-details flex justify-center items-fs  flex-col p-sm">
                <h2 className="product-title">{product.title}</h2>
                {product.unitsLeft < 20 && (
                  <span className="alert-text">{`Only ${product.unitsLeft} left!`}</span>
                )}
                <div className="rate-section">
                  <span className="curr-price">{`₹ ${product.price?.toLocaleString()}`}</span>
                  <span className="mrp-price">{`₹ ${(
                    product.price +
                    (product.price * product.discountPercent) / 100
                  )?.toLocaleString()} `}</span>
                  <span className="percent-off">{`(${product.discountPercent}% off)`}</span>
                </div>
                <Rating rating={product.rating} />
                <div className="action-btns card-action-btns flex-and-center flex-col gap-sm">
                  <CartActionButton
                    product={product}
                    inStock={product.inStock}
                    inCart={inCart}
                    isLoggedUser={isLoggedUser}
                  />
                </div>
              </div>
            </div>
            <div className="product-info flex justify-center items-fs flex-col mb-1">
              <h3>About this item</h3>
              <ul>
                {product.description?.map((eachLine) => (
                  <li key={eachLine}>{eachLine}</li>
                ))}
              </ul>
              <br />
              <h3>Manufactured at</h3>
              <p>{product.company}</p>
            </div>

            <ImageDialog
              setOpenDialog={setOpenDialog}
              openDialog={openDialog}
              img={product.imgUrl}
            />
          </main>
        )}
      </div>
    </div>
  );
};

export default Product;
