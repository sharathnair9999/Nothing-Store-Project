import React from "react";
import { useNavigate } from "react-router-dom";
import { userDetails } from "../index/index";
import { useEffect } from "react";

const Cart = () => {
  const { userState } = userDetails();
  const { encodedToken } = userState;
  const navigate = useNavigate();
  useEffect(() => {
    !encodedToken && navigate("/login");
  }, []);
  return (
    <div>
      <h3>cart</h3>
    </div>
  );
};

export default Cart;
