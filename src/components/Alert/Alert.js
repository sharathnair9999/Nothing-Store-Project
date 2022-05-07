import React from "react";
import { initialAlertState } from "../../contexts/Products/utils";
import { useProducts } from "../../index/index";
import "./Alert.css";
const Alert = () => {
  const {
    productState: {
      alert: { type, message },
    },
    productDispatch,
  } = useProducts();
  return (
    <div
      className={`alert alert-${type} ${message ? "show-alert" : "hide-alert"}`}
    >
      <p className="alert-message">{message}</p>
      <i
        className="far fa-times-circle alert-close fa-lg flex-and-center"
        onClick={() => {
          productDispatch({ type: "SHOW_ALERT", payload: initialAlertState });
        }}
      ></i>
    </div>
  );
};

export default Alert;
