import React, { useEffect } from "react";
import { userDetails } from "../../imports";
import AddressModal from "./AddressModal";
import "./Address.css";
import AddressCard from "./AddressCard";

const Addresses = () => {
  const {
    userState: { addresses },
    getAddresses,
  } = userDetails();

  useEffect(() => {
    getAddresses();
  }, [addresses.length]);

  return (
    <div className="flex-grow-1 flex-and-center flex-col">
      <header className="flex justify-center items-center gap-1">
        <p className="cart-header flex-and-center gap-sm">
          <span className="blue">Your</span>
          <span className="black">Addresses&nbsp;</span>
        </p>
      </header>
      <AddressModal newAddress={true} />
      <div className="w-100 address-list">
        {addresses.map((address) => (
          <AddressCard address={address} key={address._id} />
        ))}
      </div>
    </div>
  );
};

export default Addresses;
