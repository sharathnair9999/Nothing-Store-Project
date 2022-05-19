import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { userDetails } from "../../imports";
import "./Order.css";

const Order = () => {
  const {
    state: { orderId },
  } = useLocation();

  const navigate = useNavigate();

  const {
    userState: { orders },
  } = userDetails();

  const latestOrder = orders.find((order) => order.orderId === orderId);

  React.useEffect(() => {
    if (!latestOrder || Object.entries(latestOrder).length === 0 || !orderId) {
      console.log("entered");
      navigate("/products");
    }
  }, [latestOrder]);

  return (
    <div className="latest-order-page w-100">
      <section className="flex justify-space-btw items-center">
        <Link
          className="mr-auto link-primary border-rounded-sm  "
          to={"/user/orders"}
        >
          Orders
        </Link>
        <h1 className="mr-auto">Order Placed Successfully!!!</h1>
      </section>
      <div className="grid grid-col-3 gap-1 imp-details w-100">
        <section className="flex justify-fs items-fs gap-sm flex-col">
          <span>Order ID</span>
          <span className="bold">{latestOrder._id}</span>
        </section>
        <section className="flex justify-fs items-fs gap-sm flex-col">
          <span>Order Date</span>
          <span className="bold">{latestOrder.updatedAt.substring(0, 10)}</span>
        </section>
        <section className="flex justify-fs items-fs gap-sm flex-col">
          <span>Delivered To</span>
          <span className="bold">{latestOrder.deliveryAddress.name}</span>
        </section>
      </div>
      <div className="ordered-items py-1 gap-1 flex flex-col justify-fs items-fs">
        {latestOrder.orderedProducts?.map((product, id) => (
          <div className="ordered-item " key={product._id}>
            <span>{id + 1}</span>
            <img src={product.imgUrl} alt={product.title} />
            <section className="product-info flex flex-col justify-fs items-fs gap-xsm">
              <h3>{product.title}</h3>
              <p>{`Qty : ${product.qty}`}</p>
              <p>{`Total Price : ${product.qty} X ₹${product.price} = ₹${
                product.qty * product.price
              } `}</p>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
