import React from 'react'

function Contentinformasidataakun() {
  return (
    <div>
        	<div class="row">
					<div class="col-sm-4">
						<div className="card info-card sales-card">
							{/* Jumlah Pelanggan */}
							<div className="card-body">
								<h5 className="card-title">Admin</h5>
								<div className="d-flex align-items-center">
									<div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
									<i class="bi bi-person-badge"></i>
									</div>
									<div className="ps-3">
										<h6>2</h6>
										<span className="text-muted small pt-1">
										Total Admin Aplikasi
										</span>{" "}
										<br />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-sm-4">
						<div className="card info-card sales-card">
							{/* Jumlah Pelanggan */}
							<div className="card-body">
								<h5 className="card-title">Admin Non-Aktif</h5>
								<div className="d-flex align-items-center">
									<div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
									<i class="bi bi-person-fill-lock" style={{ color: "rgb(179, 179, 179)" }}></i>									
									
									</div>
									<div className="ps-3">
										<h6>1</h6>
										<span className="text-muted small pt-1">
										Total Admin Non-Aktif
										</span>{" "}
										<br />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-sm-4">
						<div className="card info-card revenue-card">
							<div className="filter">
								<a className="icon" href="#" data-bs-toggle="dropdown">
									{/* <i className="bi bi-three-dots"></i> */}
								</a>
							</div>
							{/* Jumlah Terjual */}
							<div className="card-body">
								<h5 className="card-title">Pelanggan Aktif</h5>
								<div className="d-flex align-items-center">
									<div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
									<i class="bi bi-person-check"></i>
									</div>
									<div className="ps-3">
										<h6>200</h6>
										<span className="text-muted small pt-1">
										Total Pelanggan Aktif
										</span>{" "}
										<br />
									</div>
								</div>
							</div>
						</div>
					</div>
				
					<div class="col-sm-4">
						<div className="card info-card revenue-card">
							{/* Jumlah Terjual */}
							<div className="card-body">
								<h5 className="card-title">Pelanggan Dihapus</h5>
								<div className="d-flex align-items-center">
									<div className="card-icon 
                                    rounded-circle 
                                    d-flex align-items-center 
                                    justify-content-center" style={{ 
                                        backgroundColor: "rgb(252, 207, 207)" }}>
									<i class="bi bi-person-x" style={{ color: "rgb(176, 0, 0)" }}></i>
									</div>
									<div className="ps-3">
										<h6>20</h6>
										<span className="text-muted small pt-1">
										Total Pelanggan Dihapus
										</span>{" "}
										<br />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
    </div>
  )
}

export default Contentinformasidataakun