import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


function Contentflashsaletelahberakhir() {
    const [toggleInProgress, setToggleInProgress] = useState(false);
	const [flashSaleActive, setFlashSaleActive] = useState(true); // State untuk mengontrol status Flash Sale

	const handleToggleClick = () => {
		const action = flashSaleActive ? "aktifkan" : "nonaktifkan";

		Swal.fire({
			icon: "warning",
			title: `Apakah Anda yakin ingin ${action} Flash Sale?`,
			showCancelButton: true,
			confirmButtonText: `Iya, ${action}`,
			cancelButtonText: "Batalkan",
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire({
					icon: "info",
					title: "Mohon Tunggu",
					text: `Flash Sale sedang tahap proses untuk ${action}.....`,
					showCancelButton: false,
					showConfirmButton: false,
					timerProgressBar: true,
					timer: 8000, // Simulasi proses selama 8 detik
					allowOutsideClick: false,
					didOpen: () => {
						Swal.showLoading();
					},
					willClose: () => {
						setFlashSaleActive(!flashSaleActive); // Mengubah status Flash Sale
						setToggleInProgress(false); // Set toggleInProgress menjadi false

						// Menampilkan Sweet Alert 2 dengan pesan "Flash Sale berhasil di aktifkan/nonaktifkan"
						Swal.fire({
							icon: "success",
							title: `Flash Sale berhasil di ${action}`,
							timer: 2000, // Menutup otomatis dalam 2 detik
							timerProgressBar: true,
						});
					},
				});

				setToggleInProgress(true);
			}
		});
	};

	return (
		<div>
			<Card className="large-card">
				<Card.Body>
					<div className="d-flex justify-content-between">
						<Card.Title>Flash Sale 10.10</Card.Title>
						<Card.Title>
							<small>
                            <span class="badge text-bg-secondary">Telah Berakhir</span>
							</small>
						</Card.Title>
					</div>
					<Card.Text>
						<div className="d-flex justify-content-between">
							<p className="fw-bold">Waktu Mulai</p>
							<span style={{ fontSize: "0.8rem" }}>2023-05-12 23:59:00</span>
						</div>
						<div className="d-flex justify-content-between">
							<p className="fw-bold">Waktu Berakhir</p>
							<span  style={{ fontSize: "0.8rem" }}>2023-05-12 23:59:00</span>
						</div>
						<hr style={{ marginTop: "-5px" }} />
						<div className="d-flex justify-content-between">
							<p className="fw-bold">Total Produk Daratan</p>
							<span className="text-end">4 Produk</span>
						</div>
						<div className="d-flex justify-content-between">
							<p className="fw-bold">Total Produk Keseluruhan</p>
							<span className="text-end">4 Produk dari 2 Kategori</span>
						</div>
						<hr style={{ marginTop: "-5px" }} />
						<div className="d-flex justify-content-between">
							<p className="fw-bold">Total Terjual</p>
							<span className="fw-bold">10 Produk</span>
						</div>
						<hr style={{ marginTop: "-5px" }} />
						<div className="d-flex justify-content-between">
							<p className="fw-bold">Total Pendapatan</p>
							<span className="fw-bold">Rp 12.000.000     </span>
						</div>
						

						<hr />
						<div className="d-flex justify-content-between mt-3 ">
							<Button
								className="d-none d-md-block"
								variant={flashSaleActive ? "success" : "outline-danger"}
								onClick={handleToggleClick}
								disabled={toggleInProgress}
							>
								{toggleInProgress
									? `Proses ${flashSaleActive ? "aktifkan" : "nonaktifkan"}...`
									: ` ${
											flashSaleActive
												? "Aktifkan Lagi Flash Sale"
												: "Shut down flash sale"
									  }`}
							</Button>
							<Button variant="outline-success">Edit Flash Sale</Button>

							<Link to="/AnalisisFlashSale">
								<Button variant="primary">Lihat Flash Sale</Button>
							</Link>
						</div>
					</Card.Text>
					<div className="d-block d-md-none">
						<hr />
						<Button
							variant={flashSaleActive ? "success" : "outline-danger"}
							onClick={handleToggleClick}
							disabled={toggleInProgress}
						>
							{toggleInProgress
								? `Proses ${flashSaleActive ? "aktifkan" : "nonaktifkan"}...`
								: ` ${
										flashSaleActive
											? "Aktifkan Lagi Flash Sale"
											: "Shut down flash sale"
								  }`}
						</Button>
					</div>
				</Card.Body>
			</Card>
		</div>
  )
}

export default Contentflashsaletelahberakhir