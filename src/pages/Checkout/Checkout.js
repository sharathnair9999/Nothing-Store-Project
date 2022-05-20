import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AddressCard from "../../components/Address/AddressCard";
import { loadScript } from "../../contexts/Products/utils";
import { useCart, userDetails } from "../../imports";
import "./Checkout.css";
import { v4 as uuid } from "uuid";
import CheckoutCard from "./CheckoutCard";

const Checkout = () => {
  const navigate = useNavigate();
  const {
    userState: {
      addresses,
      orderDetails: { orderAddress },
    },
    userDispatch,
    addToOrders,
    completeAddress,
  } = userDetails();

  const {
    cartState: { cartItems },
    cartPriceSummary,
    clearCartItems,
  } = useCart();

  React.useEffect(() => {
    cartItems.length === 0 && navigate("/products");
  }, [cartItems]);

  const cartSummary = cartPriceSummary(cartItems);

  const finalTotal = cartSummary.finalTotal + cartSummary.deliveryCharges;

  const displayRazorpay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: process.env.REACT_APP_RAZORPAY_ID,
      currency: "INR",
      amount: finalTotal * 100,
      name: "Nothing store",
      description: "Order Products",
      handler: async function (response) {
        const paymentId = response.razorpay_payment_id;
        const orderId = uuid();

        const order = {
          paymentId,
          orderId,
          amountPaid: finalTotal,
          orderedProducts: [...cartItems],
          deliveryAddress: { ...orderAddress },
        };

        await addToOrders(order);
        await clearCartItems();

        userDispatch({
          type: "SET_ORDER_DETAILS",
          payload: { orderDetails: { orderId } },
        });
        navigate("/user/orderSummary", {
          state: { orderId },
        });
      },
      prefill: {
        name: orderAddress.name,
        email: "chandler.bing@friends.com",
        contact: "9876543210",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const placeOrderHandler = () => {
    displayRazorpay();
  };

  return (
    <div className="checkout-page flex justify-fs items-fs flex-col w-100">
      <section className="flex-and-center w-100">
        <Link
          className="mr-auto link-primary border-rounded-sm "
          to={"/user/orders"}
        >
          All Orders
        </Link>
        <h1 className="mr-auto">Checkout</h1>
      </section>
      <div className="checkout-container flex justify-fs items-fs gap-1 w-100">
        <aside className="address-select">
          <p className="pb-1">
            <span className="title"> Select Address</span>
            <Link
              className="p-sm border-rounded-xsm font-sm-1 ml-1 tex-center mx-auto mt-1 btn-secondary "
              to={"/user/addresses"}
            >
              {"Add"}
            </Link>
          </p>
          <div className="address-select-container gap-1">
            {addresses?.map((address, id) => (
              <div key={id} className="flex justify-center gap-sm items-fs">
                <input
                  type="radio"
                  name="address"
                  id={id}
                  className="mt-1"
                  checked={
                    completeAddress(address) === completeAddress(orderAddress)
                  }
                  onChange={() => {
                    userDispatch({ type: "SELECT_ADDRESS", payload: address });
                  }}
                />
                <label htmlFor={id}>
                  <AddressCard address={address} key={address._id} />
                </label>
              </div>
            ))}
          </div>
        </aside>
        <div className="items-summary flex-grow-1 flex justify-fs items-fs h-100 flex-col">
          <p className="title">Items Summary</p>
          <div className="checkout-items w-100 flex flex-col justify-fs items-fs gap-sm">
            {cartItems.map((item, id) => (
              <CheckoutCard sNo={id + 1} key={id} item={item} />
            ))}
          </div>
          <div className="cart-summary mt-1 w-100 flex justify-space-btw items-center mt-1">
            <p className="font-md-1 bold">{`Cart Total  -  ₹ ${finalTotal.toLocaleString()}`}</p>
            <button className={` btn btn-primary`} onClick={placeOrderHandler}>
              Confirm &amp; Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
