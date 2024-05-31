import React from 'react';


function Contenttotalproduk() {
  return (
    <div>
      <div className="card info-card revenue-card">
        <div className="filter">
        </div>

        <div className="card-body">
          <h5 className="card-title">
           Total Terjual Keseluruhan.
          </h5>

          <div className="d-flex align-items-center">
            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
              <i className="bi bi-bag"></i>
            </div>
            {/* <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '15vh' }}>
  <p style={{ fontSize : "1.4vw" }}>Belum ada data.</p>
</Container>   */}
            <div className="ps-3">
              <h6>20</h6>
              <span className="text-success small pt-1 fw-bold">Total Terjual</span>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contenttotalproduk;
