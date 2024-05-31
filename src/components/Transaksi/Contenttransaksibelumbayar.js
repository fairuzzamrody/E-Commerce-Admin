import React from "react";
import {
	Card,
	Form,
	FormControl,

} from "react-bootstrap";
import Contenttabeltransaksibelumbayar from "./Tabel/Contenttabeltransaksibelumbayar";

function Contenttransaksibelumbayar() {
	return (
		<div>
			<div className="pagetitle">
				<h1>Transaksi Belum Dibayar</h1>
				<nav>
					<ol className="breadcrumb">
						<li className="breadcrumb-item">
							<a href="/">Home</a>
						</li>
						<li className="breadcrumb-item active">
							Transaksi Belum Dibayar
						</li>
					</ol>
				</nav>
			</div>

			{/* Card Informasi Atas */}
			<section className="section dashboard">
			<div class="row">
					<div class="col-sm-4">
						<div className="card info-card sales-card">
							<div className="filter">
								<a className="icon" href="#" data-bs-toggle="dropdown">
									{/* <i className="bi bi-three-dots"></i> */}
								</a>
							</div>
							{/* Jumlah Pelanggan */}
							<div className="card-body">
								<h5 className="card-title">Belum
												Dibayar</h5>
								<div className="d-flex align-items-center">
									<div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
									<i class="bi bi-cart-dash"></i>
									</div>
									<div className="ps-3">
										<h6>20</h6>
										<span className="text-muted small pt-1" style={{ fontSize : "10px" }}>
										Total Transaksi Belum Dibayar
										</span>{" "}
										<br />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				
					{/* Isi Konten Produk Dataran */}
						<Card className="mt-2">
							<Card.Body>
								<div className="d-flex justify-content-between">
									<Card.Title>
										List Data Transaksi <br />
										<span>
											Manajemen transaksi belum
											dibayar
										</span>
									</Card.Title>
									
								</div>
							</Card.Body>
							<Card.Body>
								<div className="d-flex justify-content-end mb-4">
									<span className="d-flex align-items-center me-2">
										Filter :{" "}
									</span>
									<Form>
										<FormControl as="select">
											<option
												selected
												disabled
											>
												Filter Transaksi
											</option>
											<option value="option1">
												Transaksi Terbaru
											</option>
											<option value="option2">
												Transaksi Terlama
											</option>
											<option value="option3">
												Nominal Tertinggi
											</option>
											<option value="option3">
												Nominal Terendah
											</option>
										</FormControl>
									</Form>
								</div>

								<div className="d-none d-md-block">
								<Contenttabeltransaksibelumbayar />
								</div>
								
							
							</Card.Body>
						</Card>
			</section>
		</div>
	);
}

export default Contenttransaksibelumbayar;
