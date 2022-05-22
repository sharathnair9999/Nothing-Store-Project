import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { userDetails, EmptyData } from "../../imports";
import "./Order.css";
import Loader from "../Loader/Loader";

const Orders = () => {
  const {
    userState: { orders, ordersLoading },
    getAllOrders,
  } = userDetails();

  useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <div className="flex-grow-1">
      <p className="cart-header gap-sm flex-and-center">
        <span className="blue">My</span>
        <span className="black">Orders&nbsp;</span>
      </p>
      <div className="orders-container mt-1">
        {ordersLoading ? (
          <Loader />
        ) : orders.length > 0 ? (
          orders.map((order) => (
            <div key={order.orderId} className="each-order w-100 p-sm">
              <section className="imp-details flex justify-fs items-center">
                <span>{id + 1}</span>
                <section className="flex flex-col justify-fs items-fs gap-xsm">
                  <span>Delivered To</span>
                  <span className="bold">{order.deliveryAddress.name}</span>
                </section>
                <section className="flex flex-col justify-fs items-fs gap-xsm">
                  <span>Order ID</span>
                  <span className="bold order-id">{order.orderId}</span>
                </section>
                <section className="flex flex-col justify-fs items-fs gap-xsm">
                  <span>Order Total</span>
                  <span className="bold">
                    {"₹ " + order.amountPaid.toLocaleString()}
                  </span>
                </section>
              </section>
              <p className="pl-1 font-sm-2 pt-1 p-sm">Ordered Products</p>
              <div className="ordered-products w-100 pl-1 flex justify-fs items-fs gap-1">
                {order.orderedProducts.map((product, pid) => (
                  <div
                    key={pid}
                    className="product-card flex justify-fs items-fs w-100 gap-sm flex-col h-100"
                  >
                    <Link to={`/products/${product._id}`} className="w-100 ">
                      <img
                        src={product.imgUrl}
                        alt={product.title}
                        className="w-100"
                      />
                    </Link>
                    <section className="flex-grow-1 flex flex-col justify-fs items-fs gap-sm">
                      <p className="bold font-sm">{`${product.title}`}</p>
                      <p className="font-sm-1">{`Qty : ${product.qty}`}</p>
                      <p className="font-sm-1">{`Price : ₹${product.price.toLocaleString()}`}</p>
                    </section>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <EmptyData message={"You haven't ordered Anything from us yet!!!"} />
        )}
      </div>
    </div>
  );
};

export default Orders;
