import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import Swal from "sweetalert2"; // Import SweetAlert2
import ContentdetailtransaksibelumbayarPCdiskon from "./Componen Detail transaksi belum bayar/ContentdetailtransaksibelumbayarPCdiskon";

function Contentdetailtransaksibelumbayardiskon() {
	const [showSuccessAlert, setShowSuccessAlert] = useState(false);
	const [isFollowUpSent, setIsFollowUpSent] = useState(false);

	const handleFollowUpClick = () => {
		Swal.fire({
			title: "Mengirim Follow Up....",
			text: "Mengirim Follow Up ke Email pelanggan yang terdaftar....",
			icon: "info",
			showConfirmButton: false,
			allowOutsideClick: false,
			didOpen: () => {
				Swal.showLoading();
				setTimeout(() => {
					setShowSuccessAlert(true);
					setIsFollowUpSent(true);
					Swal.close();
					Swal.fire({
						title: "Follow Up Terkirim!",
						text: "Follow up telah berhasil dikirim melalui Email pelanggan yang terdaftar.",
						icon: "success",
					});
				}, 8000);
			},
		});
	};
	return (
		<div>
			<div>
				<div>
					<div className="pagetitle">
						<h1>Belum Di bayar</h1>
						<nav>
							<ol className="breadcrumb">
								<li className="breadcrumb-item">
									<a href="/">Home</a>
								</li>
								<li className="breadcrumb-item active">
									Detail Akun Transaksi Belum Dibayar
								</li>
							</ol>
						</nav>
					</div>

					<section className="section dashboard">
						<h5 className="card-title">Informasi Identitas Pelanggan</h5>

						<div className="row d-flex flex-wrap justify-content-between">
							<div className="col-12 mb-0">
								<div className="card large-card">
									<div className="card-body">
										<Card.Title>
											<i class="bi bi-geo-alt-fill"></i> Informasi Pelanggan
										</Card.Title>
										<p style={{ marginBottom: "2px" }} className="text-muted">
											Jhon Doe 1
										</p>

										<p style={{ marginBottom: "2px" }} className="text-muted">
											JhonDoe1@gmail.com
										</p>

										<p style={{ marginBottom: "2px" }} className="text-muted">
											081213133187
										</p>

										<p className="text-muted">
											Jl. Mangga BesarSikep, Keboansikep, Kec. Gedangan,
											Kabupaten Sidoarjo, Jawa Timur 61254
										</p>
									</div>
								</div>
							</div>
						</div>
						<h5 className="card-title" style={{ marginTop: "-25px" }}>
							Detail Produk yang Dipesan
						</h5>

						<div className="d-none d-md-block">
							<ContentdetailtransaksibelumbayarPCdiskon />
						</div>

	
					</section>
				</div>
			</div>
		</div>
	);
}

export default Contentdetailtransaksibelumbayardiskon;
