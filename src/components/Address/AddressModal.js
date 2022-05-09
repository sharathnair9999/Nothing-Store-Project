import React, { useState } from "react";
import { useClickOutside } from "../../custom-hooks";
import { userDetails } from "../../imports";
import "./Address.css";
import AddressInput from "./AddressInput";

const AddressModal = ({ editExisting, newAddress, existingAddress }) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useClickOutside(false);

  const { addNewAddress, updateAddress } = userDetails();

  const initialAddressState = {
    name: "",
    street: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    phone: "",
  };
  const [address, setAddress] = useState(
    editExisting ? existingAddress : initialAddressState
  );

  const addAddressHandler = (e) => {
    e.preventDefault();
    console.log(address);
    editExisting && updateAddress(address);
    newAddress && addNewAddress(address);
    setAddress(initialAddressState)
    setIsComponentVisible(!isComponentVisible)
  };
  return (
    <div ref={ref}>
      {newAddress && (
        <button
          onClick={() => {
            setIsComponentVisible(!isComponentVisible);
            setAddress(initialAddressState);
          }}
        >
          Add
        </button>
      )}
      {editExisting && (
        <button
          onClick={() => {
            setIsComponentVisible(!isComponentVisible);
            setAddress(existingAddress);
          }}
        >
          Edit
        </button>
      )}
      <div className={`${isComponentVisible ? "show-modal" : "hide-modal"}`}>
        <form onSubmit={addAddressHandler}>
          <AddressInput
            legend={"Name"}
            type={"text"}
            name="name"
            value={address.name}
            setAddress={setAddress}
          />
          <AddressInput
            legend={"Street"}
            type={"text"}
            name="street"
            value={address.street}
            setAddress={setAddress}
          />
          <AddressInput
            legend={"City"}
            type={"text"}
            name="city"
            value={address.city}
            setAddress={setAddress}
          />
          <AddressInput
            legend={"State"}
            type={"text"}
            setAddress={setAddress}
            name="state"
            value={address.state}
          />
          <AddressInput
            legend={"Country"}
            setAddress={setAddress}
            type={"text"}
            name="country"
            value={address.country}
          />
          <AddressInput
            legend={"PIN Code"}
            type={"number"}
            name="pincode"
            setAddress={setAddress}
            value={address.pincode}
          />
          <AddressInput
            legend={"Phone"}
            type={"number"}
            setAddress={setAddress}
            value={address.phone}
            name="phone"
          />
          {newAddress && <button type="submit">Add Address</button>}
          {editExisting && <button type="submit">Update</button>}
        </form>
        <button onClick={() => setAddress(initialAddressState)}>Reset</button>
        <button
          onClick={() => {
            setIsComponentVisible(!isComponentVisible);
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddressModal;
