import React from 'react';

function Contenttotalinvoiceyangdidapat() {
    return (
      <div>
      <div className="card info-card revenue-card">
        <div className="filter">
         
        </div>

{/*  Total Invoice Keseluruhan */}
        <div className="card-body" style={{ marginBottom : "-10px" }}>
          <h5 className="card-title">
           Invoice Keseluruhan.
          </h5>

          <div className="d-flex align-items-center">
            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
            <i class="bi bi-envelope-paper"></i>
            </div>
            {/* <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '15vh' }}>
  <p style={{ fontSize : "1.4vw" }}>Belum ada data.</p>
</Container>   */}

<div className="ps-3">
            <h6>200</h6>
            <span className="text-success small pt-1 fw-bold">Total Invoice</span>{" "}
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contenttotalinvoiceyangdidapat