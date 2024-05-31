import React from 'react'
import ContentinvoicepelangganPC from './Content Invoice Pelanggan PC/ContentinvoicepelangganPC'
import Contentinvoicepelangganmobile from './Content Invoice Pelanggan Mobile/Contentinvoicepelangganmobile'

function InvoicePelanggan() {
  return (
    <div>
<div className='d-none d-md-block'>
<ContentinvoicepelangganPC />

</div>
<div className='d-block d-lg-none'>
        <Contentinvoicepelangganmobile />
        </div>
    </div>
  )
}

export default InvoicePelanggan