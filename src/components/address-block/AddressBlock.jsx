import React from "react"; 

const AddressBlock = ({ title, address }) => (
  <div className="address-block">
    
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
              <td data-label="street">{address.street}</td>
              <td data-label="city">{address.city}</td>
              <td data-label="post code">{address.postCode}</td>
              <td data-label="country">{address.country}</td>
            </tr>
    
        </tbody>
      </table>
  </div>
);

export default AddressBlock;
