import React from "react";
import { useLocation } from "react-router-dom";
import { userDetails } from "../../imports";

const Order = () => {
  const {
    state: { orderId },
  } = useLocation();

  const {
    userState: { orderDetails, orders },
  } = userDetails();

  const latestOrder = orders.find((order) => order.orderId === orderId);

  console.log(latestOrder);

  return <div>Order</div>;
};

export default Order;
