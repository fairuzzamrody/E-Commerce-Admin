import React from "react";
import { Card} from "react-bootstrap";

import Contentnavigasitabratingpelanggan from "./Contentnavigasitabratingdanulasanpelanggan";
import Contentnavigasitabsemuarating from "./Isi Tab Navigasi Rating dan Ulasan/Contentnavigasitabsemuarating";
import Contentnavigasitabratingbelumdibalas from "./Isi Tab Navigasi Rating dan Ulasan/Contentnavigasitabratingbelumdibalas";
import Contentnavigasitabratingsudahdibalas from "./Isi Tab Navigasi Rating dan Ulasan/Contentnavigasitabratingsudahdibalas";

function Contentratingpelanggan() {
	return (
		<div>
			<div class="pagetitle">
				<h1>Rating dan Ulasan</h1>
				<nav>
					<ol class="breadcrumb">
						<li class="breadcrumb-item">
							<a href="/">Home</a>
						</li>
						<li class="breadcrumb-item active">Rating dan Ulasan</li>
					</ol>
				</nav>
			</div>

			{/* Card Informasi Atas */}
			<section className="section dashboard">
				<div class="row">
				<div class="col-sm-4">
						<div className="card info-card revenue-card">
							<div className="filter">
								<a className="icon" href="#" data-bs-toggle="dropdown">
									{/* <i className="bi bi-three-dots"></i> */}
								</a>
							</div>
							{/* Jumlah Terjual */}
							<div className="card-body">
								<h5 className="card-title">Sudah Dibalas</h5>
								<div className="d-flex align-items-center">
									<div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
										<i class="bi bi-chat-right-dots"></i>
									</div>
									<div className="ps-3">
										<h6> 12</h6>
										<span className="text-muted small pt-1">
											Total Sudah Dibalas
										</span>{" "}
										<br />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-sm-4">
						<div className="card info-card sales-card">
							<div className="card-body">
								<h5 className="card-title">Perlu Dibalas</h5>
								<div className="d-flex align-items-center">
									<div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
										<i class="bi bi-chat-left-text"></i>
									</div>
									<div className="ps-3">
										<h6>20</h6>
										<span className="text-muted small pt-1">
											Total Perlu Dibalas
										</span>{" "}
										<br />
									</div>
								</div>
							</div>
						</div>
					</div>
					
					<div class="col-sm-4">
						<div className="card info-card customers-card">
							<div className="card-body">
								<h5 className="card-title">Total Keseluruhan</h5>
								<div className="d-flex align-items-center">
									<div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
										<i class="bi bi-chat-right"></i>
									</div>
									<div className="ps-3">
										<h6> 245</h6>
										<span className="text-muted small pt-1">
											Total Keseluruhan
										</span>{" "}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Card>
					<Card.Body style={{ marginTop: "-14px" }}>
						<Card.Title>
							<div className="d-flex justify-content-between">
								<Card.Title>
									List Rating & Ulasan
									<br />
									<span>Manajemen Rating & Ulasan Pelanggan</span>
								</Card.Title>
								
							</div>
						</Card.Title>
						<Contentnavigasitabratingpelanggan />

						{/* Start Bagian Semua */}
						<div class="tab-content" id="myTabContent">
							{/* Start */}
							<div
								class="tab-pane fade show active"
								id="home"
								role="tabpanel"
								aria-labelledby="home-tab"
							>
								<Contentnavigasitabsemuarating />
							</div>

							{/* End Of Semua */}

							{/* Start Bagian Perlu dibalas atau belum di tanggapi */}
							<div
								class="tab-pane fade"
								id="profile"
								role="tabpanel"
								aria-labelledby="profile-tab"
							>
								<Contentnavigasitabratingbelumdibalas />
							</div>
							{/* End Perlu dibalas atau belum ditanggapi */}

							{/* Start Sudah dibalas atau sudah di tanggapi */}
							<div
								class="tab-pane fade"
								id="contact"
								role="tabpanel"
								aria-labelledby="contact-tab"
							>
								<Contentnavigasitabratingsudahdibalas />
							</div>
						</div>
					</Card.Body>
				</Card>
			</section>
		</div>
	);
}

export default Contentratingpelanggan;
