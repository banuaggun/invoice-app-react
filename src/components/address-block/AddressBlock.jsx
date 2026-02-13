import React from "react"; 
import './address-block.css'; 

const AddressBlock = ({ title, address }) => (
  <div className="address-block">
    <h3 className="detail-header">{title}</h3>
  
     <table className="items-table">
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
  </div>
);

export default AddressBlock;
