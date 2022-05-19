import React, { useState } from "react";
import { userDetails } from "../../imports";
import AddressModal from "./AddressModal";

const AddressCard = ({ address }) => {
  const { completeAddress } = userDetails();

  let fullAddress = completeAddress(address);
  const [showFullAddress, setShowFullAddress] = useState(false);
  return (
    <div key={address._id} className="address-card">
      <p className="font-md-2 bold">{address.name.split(" ")?.[0]}</p>
      <hr className="w-100" />
      <p>
        <strong>Name :</strong> {` ${address.name}`}
      </p>
      <p>
        <strong>Address :</strong>
        {fullAddress.length <= 30 ? (
          <span>{fullAddress}</span>
        ) : showFullAddress ? (
          <span>
            <span>{`${fullAddress} `}</span>
            <button
              className=" btn-transparent btn-small"
              onClick={() => setShowFullAddress(!showFullAddress)}
            >
              {` Hide`}
            </button>
          </span>
        ) : (
          <span>
            {" "}
            <span>
              {`${fullAddress.substring(0, 30)}...`}{" "}
              <button
                className="btn-transparent btn-small"
                onClick={() => setShowFullAddress(!showFullAddress)}
              >
                Show more
              </button>{" "}
            </span>{" "}
          </span>
        )}
      </p>
      <p>
        <strong>Phone : </strong> {`${address.phone}`}
      </p>
      <AddressModal editExisting={true} existingAddress={address} />
    </div>
  );
};

export default AddressCard;
