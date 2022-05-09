import React, { useEffect } from "react";
import { userDetails } from "../../imports";
import AddressModal from "./AddressModal";

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
    <div>
      <header className="flex justify-fs items-center gap-1">
        <p className="cart-header flex-and-center gap-sm">
          <span className="blue">Your</span>
          <span className="black">Addresses&nbsp;</span>
        </p>
      </header>
      <AddressModal newAddress={true} />
      <div>
        {addresses.map((address) => (
          <div key={address._id}>
            <pre>{JSON.stringify(address, null, 2)}</pre>
            <AddressModal editExisting={true} existingAddress={address} />
            <button onClick={() => deleteAddress(address._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Addresses;
