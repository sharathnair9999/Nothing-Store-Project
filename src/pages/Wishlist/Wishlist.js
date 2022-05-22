import React from "react";
import "./Wishlist.css";
import "../../components/Product/ProductCard.css";
import {
  constants,
  EmptyData,
  useWishlist,
  WishlistCard,
} from "../../imports/index";

const Wishlist = () => {
  const {
    wishlistState: { wishlistItems },
    clearWishlist,
  } = useWishlist();
  return (
    <div className="flex-grow-1">
      <header className="flex justify-fs items-center gap-1">
        <p className="cart-header">
          <span className="blue">Wish</span>
          <span className="black">list&nbsp;</span>
        </p>
        <span className="count">{`Total Items - ${wishlistItems?.length}`}</span>
        {wishlistItems.length > 0 && (
          <button onClick={clearWishlist} className="btn-secondary btn">
            Clear Wishlist
          </button>
        )}
      </header>

      {wishlistItems?.length > 0 ? (
        <div className="wishlist-products grid w-100">
          {wishlistItems.map((product) => (
            <WishlistCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <EmptyData
          message={
            "You haven't loved anything from us yet. Go find something interesting"
          }
          imgUrl={constants.void}
        />
      )}
    </div>
  );
};

export default Wishlist;
