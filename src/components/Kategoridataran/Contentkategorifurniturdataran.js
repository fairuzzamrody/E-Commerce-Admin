import React from "react";
import {
	Card,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import Contenttabelkategoridataranaktif from "./Tabel Kategori PC/Contenttabelkategoridataranaktif";
import Contenttabelkategoridatarannonaktif from "./Tabel Kategori PC/Contenttabelkategoridatarannonaktif";

function Contentkategorifurniturdataran() {
	return (
		<div>
			<div className="pagetitle">
				<h1>Kategori Pada Dataran</h1>
				<nav>
					<ol className="breadcrumb">
						<li className="breadcrumb-item">
							<a href="/">Home</a>
						</li>
						<li className="breadcrumb-item active">Kategori Pada Dataran</li>
					</ol>
				</nav>
			</div>
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
								<h5 className="card-title">Kategori Aktif</h5>
								<div className="d-flex align-items-center">
									<div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
									<i class="bi bi-journal-check"></i>
									</div>
									<div className="ps-3">
										<h6>20</h6>
										<span className="text-muted small pt-1">
											Total Kategori Aktif
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
								<h5 className="card-title">Kategori Diarsipkan</h5>
								<div className="d-flex align-items-center">
									<div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
									<i class="bi bi-journal-bookmark-fill"></i>
									</div>
									<div className="ps-3">
										<h6>20</h6>
										<span className="text-muted small pt-1">
											Total Kategori Diarsipkan
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
								<h5 className="card-title">Total Keseluruhan</h5>
								<div className="d-flex align-items-center">
									<div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
									<i class="bi bi-journals"></i>									
									</div>
									<div className="ps-3">
									<h6>20<span style={{ fontSize: "1.2rem" }}> Kategori</span></h6>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Link
					to="/Tambahkategoridataran"
					className="btn btn-primary btn-lg btn-block mb-2"
				>
					Tambah Kategori
					<FontAwesomeIcon
						icon={faPlus}
						size="sm"
						style={{ marginLeft: "15px" }}
					/>
				</Link>
				{/* Isi Konten Kategori Dataran */}
				<Card className="mt-3">
					<Card.Body>
						<div className="d-flex justify-content-between">
							<Card.Title>
								List Kategori Dataran <br />
								<span>Manajemen Kategori Anda</span>
							</Card.Title>
							<Card.Title>
								<div className="d-flex justify-content-between">
									<div className="d-flex">
									</div>
								</div>
							</Card.Title>
						</div>
						<div style={{ marginTop: "-25px" }}>
							{/* Start Untuk Desktop atau PC */}
							<div className="d-none d-md-block">
								<Contenttabelkategoridataranaktif />
								<Contenttabelkategoridatarannonaktif />
							</div>
	
						</div>
					</Card.Body>
				</Card>
			</section>
		</div>
	);
}

export default Contentkategorifurniturdataran;
