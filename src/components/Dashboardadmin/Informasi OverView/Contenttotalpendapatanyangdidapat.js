import React from "react";

function Contenttotalpendapatanyangdidapat() {
  return (
    <div>
      {/* INI PENDAPATAN TRANSAKSI DI APLIKASI, BUKAN DIAMBIL DARI MIDTRANS */}
      <div className="card info-card customers-card">
        <div className="filter">
         
        </div>

        <div className="card-body">
          <h5 className="card-title">
           Total Pendapatan Di Aplikasi.
          </h5>
      {/* ================== INI PENDAPATAN TRANSAKSI DI APLIKASI, BUKAN DIAMBIL DARI MIDTRANS */}

          <div className="d-flex align-items-center">
            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
              <i className="bi bi-cash-coin"></i>
            </div>
            {/* <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '15vh' }}>
  <p style={{ fontSize : "1.4vw" }}>Belum ada data.</p>
</Container>   */}

            <div className="ps-3">
              <h6 style={{ fontSize: "1.5rem" }}>Rp. 50.000.000 </h6>
                            <span className="text-success small pt-1 fw-bold">
                Total Pendapatan 
              </span>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contenttotalpendapatanyangdidapat;
