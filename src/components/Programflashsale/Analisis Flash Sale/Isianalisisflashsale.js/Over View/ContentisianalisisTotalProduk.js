import React from 'react'

function ContentisianalisisTotalProduk() {
  return (
    <div>
        	<div className="card info-card revenue-card">
							{/* Jumlah Terjual */}
							<div className="card-body">
								<h5 className="card-title">Total Produk</h5>
								<div className="d-flex align-items-center">
									<div className="card-icon rounded-circle 
                                    d-flex align-items-center 
                                    justify-content-center" style={{ backgroundColor: "rgb(251, 237, 255)" }}>
									<i class="bi bi-box" style={{ color: "rgb(120, 48, 219)" }}></i>
									</div>
									<div className="ps-3">
										<h6>
											12<span style={{ fontSize: "1rem" }}> Produk</span>
										</h6>
									</div>
								</div>
							</div>
						</div>
    </div>
  )
}

export default ContentisianalisisTotalProduk