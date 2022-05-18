import React, { useState } from "react";
import { useClickOutside } from "../../custom-hooks";
import { userDetails } from "../../imports";
import "./Address.css";
import AddressInput from "./AddressInput";

const AddressModal = ({ editExisting, newAddress, existingAddress }) => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useClickOutside(false);

  const { addNewAddress, updateAddress, deleteAddress } = userDetails();

  const initialAddressState = {
    name: "",
    house: "",
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
    editExisting && updateAddress(address);
    newAddress && addNewAddress(address);
    setAddress(initialAddressState);
    setIsComponentVisible(!isComponentVisible);
  };
  return (
    <div>
      {newAddress && (
        <button
          className="btn btn-primary"
          onClick={() => {
            setIsComponentVisible(!isComponentVisible);
            setAddress(initialAddressState);
          }}
        >
          Add
        </button>
      )}
      <section className="address-action-btns flex justify-fs items-center gap-sm">
        {editExisting && (
          <button
            className="btn btn-primary"
            onClick={() => {
              setIsComponentVisible(!isComponentVisible);
              setAddress(existingAddress);
            }}
          >
            <i className="fa-solid fa-pen"></i>
          </button>
        )}
        {existingAddress && (
          <button
            className="btn btn-danger"
            onClick={() => deleteAddress(address._id)}
          >
            <i className="fa-solid fa-trash-can"></i>
          </button>
        )}
      </section>
      <div
        className={`${
          isComponentVisible ? "show-modal" : "hide-modal"
        } address-modal-container`}
      >
        <form onSubmit={addAddressHandler} className="address-modal" ref={ref}>
          <AddressInput
            legend={"Name"}
            type={"text"}
            name="name"
            value={address.name}
            placeholder="Ken Adams"
            setAddress={setAddress}
          />
          <AddressInput
            legend={"House"}
            type={"text"}
            name="house"
            value={address.house}
            placeholder="Apt. 19"
            setAddress={setAddress}
          />
          <AddressInput
            legend={"Street"}
            type={"text"}
            name="street"
            placeholder="Street No. 10"
            value={address.street}
            setAddress={setAddress}
          />
          <AddressInput
            legend={"City"}
            type={"text"}
            placeholder="Hyderabad"
            name="city"
            value={address.city}
            setAddress={setAddress}
          />
          <AddressInput
            legend={"State"}
            placeholder="Telangana"
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
            placeholder="India"
            value={address.country}
          />
          <AddressInput
            legend={"PIN Code"}
            type={"number"}
            placeholder={123456}
            name="pincode"
            setAddress={setAddress}
            value={address.pincode}
          />
          <AddressInput
            legend={"Phone"}
            placeholder={9876543210}
            type={"number"}
            setAddress={setAddress}
            value={address.phone}
            name="phone"
          />
          <section className="address-action-btns mt-1 flex-and-center gap-sm">
            {newAddress && (
              <button type="submit" className="btn-primary btn">
                Add Address
              </button>
            )}
            {editExisting && (
              <button type="submit" className="btn-primary btn">
                Update
              </button>
            )}
            <button
              className="btn btn-light"
              type="button"
              onClick={() => setAddress(initialAddressState)}
            >
              Reset
            </button>
            <button
              className="btn btn-danger"
              type="button"
              onClick={() => {
                setIsComponentVisible(!isComponentVisible);
              }}
            >
              Cancel
            </button>
          </section>
        </form>
      </div>
    </div>
  );
};

export default AddressModal;
