import React from 'react';

function Contentlaporantransaksilunas() {
  return (
    <div>
      <div className="card-body">
        <h5 className="card-title">Transaksi Sudah Di Bayar</h5>

        <div className="d-flex align-items-center">
          <div
            className="card-icon rounded-circle d-flex align-items-center justify-content-center"
            style={{
              backgroundColor: "rgb(192, 252, 230)", // Perbaikan warna RGB
            }}
          >
            <i className="bi bi-cart-check" style={{ color: "rgb(68, 166, 130)" }}></i>
          </div>
          <div className="ps-3">
          <h6>12 <span style={{ fontSize : "1rem" }}>Transaksi</span></h6>
					
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contentlaporantransaksilunas;
