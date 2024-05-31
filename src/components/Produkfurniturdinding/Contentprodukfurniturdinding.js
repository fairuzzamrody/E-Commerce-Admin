import React from "react";
import {
	Card,
	Row,
	Col,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import Contenttabelprodukdindingaktif from "./Tabel Furnitur PC/Contenttabelprodukdindingaktif";
import Contenttabelprodukdindingsegerahabis from "./Tabel Furnitur PC/Contenttabelprodukdindingsegerahabis";
import Contenttabelprodukdindingnonaktif from "./Tabel Furnitur PC/Contenttabelprodukdindingnonaktif";

function Contentprodukfurniturdinding() {
	return (
		<div>
			<div className="pagetitle">
				<h1>Produk Furnitur Pada Dinding</h1>
				<nav>
					<ol className="breadcrumb">
						<li className="breadcrumb-item">
							<a href="/">Home</a>
						</li>
						<li className="breadcrumb-item active">
							Produk Furnitur Pada Dinding
						</li>
					</ol>
				</nav>
			</div>

			<section className="section dashboard">
			<div class="row">
					<div class="col-sm-4">
						<div className="card info-card sales-card">
							<div className="filter">
								<a className="icon" href="#" data-bs-toggle="dropdown">
								</a>
							</div>
							{/* Jumlah Pelanggan */}
							<div className="card-body">
								<h5 className="card-title">Produk Aktif</h5>
								<div className="d-flex align-items-center">
								<div className="card-icon rounded-circle d-flex align-items-center 
									justify-content-center
									" style={{ backgroundColor : "rgb(242, 242, 242)" }}>									<i class="bi bi-box"></i>
									</div>
									<div className="ps-3">
										<h6>20</h6>
										<span className="text-muted small pt-1">
										Total Produk Aktif
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
								<h5 className="card-title">Produk Segera Habis</h5>
								<div className="d-flex align-items-center">
									<div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
									<i class="bi bi-box-seam"></i>
									</div>
									<div className="ps-3">
										<h6>20</h6>
										<span className="text-muted small pt-1" style={{ fontSize : "13px" }}>
										Total Segera Habis
										</span>{" "}
										<br />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-sm-4">
						<div className="card info-card customers-card">
							<div className="filter">
								<a className="icon" href="#" data-bs-toggle="dropdown">
									{/* <i className="bi bi-three-dots"></i> */}
								</a>
							</div>
							{/* Jumlah Total Terjual */}
							<div className="card-body">
								<h5 className="card-title">Produk Habis</h5>
								<div className="d-flex align-items-center">
									<div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
									<i class="bi bi-dropbox"></i>
									</div>
									<div className="ps-3">
										<h6>25</h6>
										<span className="text-muted small pt-1">
										Total Produk Habis
										</span>{" "}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Row>
					<Col>
						<div className="card info-card customers-card">
							{/* Jumlah Total Terjual */}
							<div className="card-body">
								<h5 className="card-title">Produk Diarsipkan</h5>
								<div className="d-flex align-items-center">
									<div className="card-icon rounded-circle d-flex align-items-center justify-content-center" 
									style={{ backgroundColor: "rgb(232, 232, 232)" }}>
									<i class="bi bi-box-fill" style={{ color: "rgb(173, 173, 173)" }}></i>
									</div>
									<div className="ps-3">
										<h6>25</h6>
										<span className="text-muted small pt-1">
										Total Produk Diarsipkan
										</span>{" "}										
									</div>
								</div>
							</div>
						</div>
					</Col>
					<Col>
						<div className="card info-card customers-card">
							{/* Jumlah Total Terjual */}
							<div className="card-body">
								<h5 className="card-title">Total Keseluruhan</h5>
								<div className="d-flex align-items-center">
									<div className="card-icon rounded-circle d-flex align-items-center justify-content-center" style={{ backgroundColor: "rgb(255, 254, 217)" }}>
									<i class="bi bi-boxes" style={{ color: "rgb(255, 206, 69)" }}></i>
									</div>
									<div className="ps-3">
										<h6>200<span style={{ fontSize: "1.2rem" }}> Produk</span></h6>
									</div>
								</div>
							</div>
						</div>
					</Col>
				</Row>

				<div style={{ marginTop: "-20px" }}>
					<Link
						to="/Tambahprodukdinding"
						className="btn btn-primary btn-lg btn-block mt-3"
					>
						Tambah Produk
						<FontAwesomeIcon
							icon={faPlus}
							size="sm"
							style={{ marginLeft: "15px" }}
						/>
					</Link>
				</div>
				{/* Isi Konten Produk Dinding */}
				<Card className="mt-4">
					<Card.Body>
						<div className="d-flex justify-content-between">
							<Card.Title>
								List Produk Furnitur Dinding<br />
								<span>Manajemen Produk Anda</span>
							</Card.Title>
						
						</div>

						<div className="d-none d-md-block">
							<Contenttabelprodukdindingaktif />
							<Contenttabelprodukdindingsegerahabis />
							<Contenttabelprodukdindingnonaktif />
						</div>

		
					</Card.Body>
				</Card>
			</section>
		</div>
	);
}

export default Contentprodukfurniturdinding;
