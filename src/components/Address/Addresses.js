import React, { useEffect } from "react";
import { userDetails } from "../../imports";
import AddressModal from "./AddressModal";
import "./Address.css";

const Addresses = () => {
  const {
    userState: { addresses },
    getAddresses,
    deleteAddress,
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
          <div key={address._id} className="address-card">
            <p className="font-md-2 bold">{address.name.split(" ")?.[0]}</p>
            <hr className="w-100" />
            <p>
              <strong>Name :</strong> {` ${address.name}`}
            </p>
            <p>
              <strong>Address :</strong>
              {` ${address.house}, ${address.street}, ${address.city}, ${address.state}, ${address.country}, ${address.pincode}`}
            </p>
            <p>
              <strong>Phone : </strong> {`${address.phone}`}
            </p>
            <AddressModal editExisting={true} existingAddress={address} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Addresses;
