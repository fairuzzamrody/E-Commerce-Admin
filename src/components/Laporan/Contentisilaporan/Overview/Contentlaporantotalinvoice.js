import React from 'react'

function Contentlaporantotalinvoice() {
  return (
    <div>
         <div className="card-body">
              <h5 className="card-title">Total Invoice</h5>
              <div className="d-flex align-items-center">
                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center" 
                style={{ 
                  backgroundColor: "rgb(255, 252, 189)",
                }}>
                <i class="bi bi-envelope-paper" style={{ color: "rgb(255, 237, 43)" }}></i>                
                </div>
                <div className="ps-3">
                <h6>12 <span style={{ fontSize : "1rem" }}>Invoice</span></h6>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Contentlaporantotalinvoice