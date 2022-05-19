import React, { useEffect } from "react";
import { userDetails } from "../../imports";
import "./Order.css";

const Orders = () => {
  const {
    userState: { orders, orderDetails },
    getAllOrders,
  } = userDetails();

  useEffect(() => {
    orders.length === 0 && getAllOrders();
  }, []);
  console.log(orders);
  console.log(orderDetails);

  return <div>Orders</div>;
};

export default Orders;
