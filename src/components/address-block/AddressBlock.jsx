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
              <th>Street</th>
              <th>City</th>
              <th>Post Code</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{address.street}</td>
              <td>{address.city}</td>
              <td>{address.postCode}</td>
              <td>{address.country}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AddressBlock;
