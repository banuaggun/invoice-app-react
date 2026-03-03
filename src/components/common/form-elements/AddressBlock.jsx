import React from "react";

const AddressBlock = ({ title, address, onChange, editable = false }) => {
  return (
    <div className="address-block">
      {editable ? (
        <div className="address-form">
          <table className="items-table">
            <caption>{title}</caption>
            <thead>
              <tr>
                <th scope="col">Street</th>
                <th scope="col">City</th>
                <th scope="col">Post Code</th>
                <th scope="col">Country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="street">
                  <input
                    placeholder="Street"
                    value={address.street}
                    onChange={(e) =>
                      onChange({ ...address, street: e.target.value })
                    }
                  />
                </td>
                <td data-label="city">
                  <input
                    placeholder="City"
                    value={address.city}
                    onChange={(e) =>
                      onChange({ ...address, city: e.target.value })
                    }
                  />
                </td>
                <td data-label="post code">
                  <input
                    placeholder="Post Code"
                    value={address.postCode}
                    onChange={(e) =>
                      onChange({ ...address, postCode: e.target.value })
                    }
                  />
                </td>
                <td data-label="Country">
                  <input
                    placeholder="Country"
                    value={address.country}
                    onChange={(e) =>
                      onChange({ ...address, country: e.target.value })
                    }
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <table className="items-table">
          <caption>{title}</caption>
          <thead>
            <tr>
              <th scope="col">Street</th>
              <th scope="col">City</th>
              <th scope="col">Post Code</th>
              <th scope="col">Country</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Street">{address.street}</td>
              <td data-label="City">{address.city}</td>
              <td data-label="Post Code">{address.postCode}</td>
              <td data-label="Country">{address.country}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AddressBlock;
