import React, { useEffect } from "react";
import { userDetails } from "../../imports";

const Addresses = () => {
  const {
    userState: { addresses },
    getAddresses,
    addNewAddress,
    deleteAddress,
    updateAddress,
  } = userDetails();

  const newAddress = {
    name: "new",
    house: "new",
    street: "new",
    city: "Hyderabad",
    state: "Telangana",
    country: "India",
    pincode: "500067",
    phone: "9876543210",
  };

  const updater = {
    name: "new updated",
    house: "new updated",
    street: "new",
    city: "Hyderabad",
    state: "Telangana",
    country: "India",
    pincode: "500067",
    phone: "9876543210",
  };

  useEffect(() => {
    getAddresses();
  }, [addresses.length]);

  return (
    <div>
      <header className="flex justify-fs items-center gap-1">
        <p className="cart-header flex-and-center gap-sm">
          <span className="blue">Your</span>
          <span className="black">Addresses&nbsp;</span>
        </p>
      </header>
      <button onClick={() => addNewAddress(newAddress)}>Add</button>
      <div>
        {addresses.map((address) => (
          <div key={address._id}>
            <pre>{JSON.stringify(address, null, 2)}</pre>
            <button
              onClick={() =>
                updateAddress({ ...address, name: "Sharath NAir" })
              }
            >
              Update
            </button>
            <button onClick={() => deleteAddress(address._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Addresses;
