import React from "react";
import TableHeader from "../list-elements/table-header/TableHeader";
import "./form-elements.css";

const AddressBlock = ({ title, address, onChange, editable = false }) => {
  const columns = ["Street", "City", "Post Code", "Country"];
  return (
    <div className="form-block">
      {editable ? (
        <div className="forms">
          <table className="items-table">
            <caption>{title}</caption>
            <TableHeader columns={columns} />

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
        <div className="form-card-area">

        
        <div className="form-card">
          <h3>{title}</h3>
          <div className="form-card-content">
            <p>
              <strong>Street:</strong> {address.street}
            </p>
            <p>
              <strong>City:</strong> {address.city}
            </p>
            <p>
              <strong>Post Code:</strong> {address.postCode}
            </p>
            <p>
              <strong>Country:</strong> {address.country}
            </p>
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default AddressBlock;
