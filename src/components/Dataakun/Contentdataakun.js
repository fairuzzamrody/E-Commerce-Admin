import React from "react";
import {  Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Contenttabeladmin from "./Tabeladmin/Contenttabeladmin";
import Contenttabelpelanggan from "./Tabelpelanggan/Contenttabelpelanggan";
import { Link } from "react-router-dom";
import Contenttabelpelangganydihapuspermanen from "./Tabelpelanggan/Contenttabelpelangganydihapuspermanen";
import Contentinformasidataakun from "./Infomasi Data Akun/Contentinformasidataakun";

function Contentdataakunpelanggan() {
	return (
		<div>
			<div className="pagetitle">
				<h1>Data Akun</h1>
				<nav>
					<ol className="breadcrumb">
						<li className="breadcrumb-item">
							<a href="/">Home</a>
						</li>
						<li className="breadcrumb-item active">Data Akun</li>
					</ol>
				</nav>
			</div>
			<section className="section dashboard">
      				
					<Contentinformasidataakun />
					
        

						<div style={{ marginTop: "-20px" }}>
							{/* Tombol untuk memunculkan modal */}
							<Link
								to="/Tambahadmin"
								className="btn btn-primary btn-lg btn-block mt-3"
							>
								Tambah Admin
								<FontAwesomeIcon
									icon={faPlus}
									size="sm"
									style={{ marginLeft: "15px" }}
								/>
							</Link>
						</div>
						<Card className="mt-4">
							<Card.Body>
								<div className="d-flex justify-content-between">
									<Card.Title>
										List Akun Yang Terdaftar <br />
										<span>Manajemen Akun</span>
									</Card.Title>
									
								</div>
							</Card.Body>
							<Card.Body style={{ marginTop: "-20px" }}>
								<div className="d-none d-md-block">
									<Contenttabeladmin />
									<Contenttabelpelanggan />
									<Contenttabelpelangganydihapuspermanen />
								</div>
							</Card.Body>
						</Card>
			</section>
		</div>
	);
}

export default Contentdataakunpelanggan;
