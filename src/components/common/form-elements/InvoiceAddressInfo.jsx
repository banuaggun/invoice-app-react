import React from 'react'

const InvoiceAddressInfo = ({title, address}) => {
  return (
    <div>
        <div className='client-address'>
            {address.street}
        </div>
    </div>
  )
}

export default InvoiceAddressInfo