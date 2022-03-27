import React from "react";
import "./Wishlist.css";
import "../../components/Product/ProductCard.css";
import {
  constants,
  EmptyData,
  useWishlist,
  WishlistCard,
} from "../../index/index";

const Wishlist = () => {
  const { wishlistState } = useWishlist();
  const { wishlistItems } = wishlistState;
  return (
    <main className="wishlist-section flex items-center justify-fs flex-col">
      <header className="flex-and-center gap-2">
        <p className="cart-header">
          <span className="blue">Wish</span>
          <span className="black">list&nbsp;</span>
        </p>
        <span className="count">{`Total Items - ${wishlistItems?.length}`}</span>
      </header>
      <div className="wishlist-container flex">
        <div className="products grid gap-2">
          {wishlistItems?.length>0 ? (
            wishlistItems.map((product) => (
              <WishlistCard key={product._id} product={product} />
            ))
          ) : (
            <EmptyData
              message={
                "You haven't loved anything from us yet. Go find something interesting"
              }
              imgUrl={constants.void}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Wishlist;
