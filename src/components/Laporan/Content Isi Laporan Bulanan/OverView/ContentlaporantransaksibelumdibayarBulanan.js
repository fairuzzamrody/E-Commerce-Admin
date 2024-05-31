import React from 'react'

function Contentlaporantransaksibelumdibayar() {
  return (
    <div>
        
        <div className="card-body">
              <h5 className="card-title">Transaksi Belum Di Bayar</h5>

              <div className="d-flex align-items-center">
                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center" 
                style={{ 
                  backgroundColor: "rgb(204, 238, 255)",
                  
                }}>
                   
                <i class="bi bi-cart-dash" style={{ color: "rgb(6, 128, 189)" }}></i>                
                </div>
                <div className="ps-3">
                <h6>12 <span style={{ fontSize : "1rem" }}>Transaksi</span></h6>
						
                </div>
              </div>
            </div>
    </div>
  )
}

export default Contentlaporantransaksibelumdibayar