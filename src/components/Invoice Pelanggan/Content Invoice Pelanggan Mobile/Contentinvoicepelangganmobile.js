import React, { useEffect } from "react";
import { Container, Image, Button, Card } from "react-bootstrap";

function Contentinvoicepelangganmobile() {
	useEffect(() => {
		// Menonaktifkan fitur inspect element
		document.addEventListener("contextmenu", preventRightClick);
		document.addEventListener("keydown", preventInspectElement);

		return () => {
			// Menghapus listener saat komponen dibongkar
			document.removeEventListener("contextmenu", preventRightClick);
			document.removeEventListener("keydown", preventInspectElement);
		};
	}, []);

	// Fungsi untuk mencegah klik kanan
	const preventRightClick = (e) => {
		e.preventDefault();
	};

	// Fungsi untuk mencegah kombinasi tombol yang digunakan untuk inspect element
	const preventInspectElement = (e) => {
		if (
			(e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
			(e.ctrlKey && e.shiftKey && e.keyCode === 67)
		) {
			// Ctrl+Shift+C
			e.preventDefault();
		}
	};

	// Mendapatkan waktu saat ini
	const currentTime = new Date().toLocaleString();

	return (
		<div>
			<Container fluid>
				<div className="text-center mt-4">
					<Image src="../gambar/logo.png" alt="Logo" fluid />
					<br />
				</div>
				<Container>
					<style>
						{`
          @media print {
            .print-button {
              display: none;
            }
          }
        `}
					</style>
					<hr />

					<Card>
						{/* Tambahkan badge ribbon bertuliskan paid disini*/}
						<Card.Header className="bg-white" style={{ marginBottom: "10px" }}>
							<div className="d-flex align-items-center justify-content-between">
								<img
									src="../gambar/logo.png"
									style={{ marginRight: "5px", maxHeight: "40px" }}
									alt=""
								/>
								<span style={{ fontSize: "0.85rem" }}>
									AR-F/ORD-003/TRX-003/INV-001
								</span>
							</div>
						</Card.Header>
						<Card.Body>
							<div className="d-flex justify-content-between">
								<p>
									<b>No. Pesanan</b>
								</p>
								<p>AR-F/ORD-20230815-0003</p>
							</div>
							<hr style={{ marginTop: "-5px" }} />
							<div className="d-flex justify-content-between">
								<p>
									<b>No. Transaksi</b>
								</p>
								<p>AR-F/ORD-20230815-0003</p>
							</div>
							<hr style={{ marginTop: "-5px" }} />
							<div className="d-flex justify-content-between">
								<p>
									<b>Informasi Pemesan</b>
								</p>
								<p className="text-end">
									John Doe 1 <br />
									john.doe@example.com
									<br />
									0813-2534-5828
								</p>
							</div>
							<hr style={{ marginTop: "-5px" }} />
							<div className="d-flex justify-content-between">
								<p>
									<b>Alamat Pelanggan</b>
								</p>
								<p> Jalan Raya No. 123</p>
							</div>
							<hr style={{ marginTop: "-5px" }} />
							<div className="d-flex justify-content-between">
								<p>
									<b>Waktu Pemesanan</b>
								</p>
								<p>2023-01-19 03:12:06</p>
							</div>
							<hr style={{ marginTop: "-5px" }} />
							<div className="d-flex justify-content-between">
								<p>
									<b>Status Pembayaran</b>
								</p>
								<h4 style={{ fontSize: "1.3rem" }}>
									<b>
										<span className="badge rounded-pill text-bg-success">
											Sudah Dibayar
										</span>
									</b>
								</h4>
							</div>
							<hr style={{ marginTop: "-5px" }} />
							<div className="d-flex justify-content-between">
								<p>
									<b>Waktu Pembayaran</b>
								</p>
								<p>2023-01-19 03:12:06</p>
							</div>
							<hr style={{ marginTop: "-5px" }} />

							<div className="d-flex justify-content-between">
								<p>
									<b>Metode Pembayaran</b>
								</p>
								<p className="fw-bold">BCA</p>
							</div>
							<hr style={{ marginTop: "-5px" }} />
							<Card.Title className="mt-5 mb-3 fw-bold">
								Produk yang dipesan.
							</Card.Title>
							<Card>
								<Card.Body>
									<div className="d-flex justify-content-between mt-3">
										<p className="fw-bold">Sofa Klasik Eropa</p>
										<p className="text-muted">x 1</p>
									</div>
									<div
										className="d-flex justify-content-between"
										style={{ marginTop: "-15px" }}
									>
										<p className="text-muted">varian : Biru</p>
										<p>Rp. 1.500.000</p>
									</div>
									<hr />
									<div className="d-flex justify-content-between">
										<p>Harga Satuan: </p>
										<p>Rp 500.000</p>
									</div>
									<div className="d-flex justify-content-between">
										<p>Sub Total Produk: </p>
										<p>Rp 500.000</p>
									</div>
									<div className="d-flex justify-content-between">
										<p>Ongkos Kirim: </p>
										<p>Rp 500.000</p>
									</div>
									<div className="d-flex justify-content-between">
										<p>Sub Total Ongkos Kirim: </p>
										<p>Rp 500.000</p>
									</div>
								</Card.Body>
								<Card.Footer>
									<div className="d-flex justify-content-between">
										<p className="fw-bold">Total Pesanan: </p>
										<p className="fw-bold ">Rp 500.000</p>
									</div>
								</Card.Footer>
							</Card>
						</Card.Body>
					</Card>
					<p>
						<b>Dicetak Oleh: </b>Admin 1{" "}
					</p>
					<p>
						<b>Waktu dicetak: </b>
						{currentTime}{" "}
					</p>
					<div className="d-flex justify-content-end">
						<Button
							className="mb-5 mt-5 print-button"
							onClick={() => window.print()}
						>
							Cetak Halaman ini{" "}
							<i className="bi bi-printer" style={{ marginLeft: "10px" }}></i>
						</Button>
					</div>
				</Container>
			</Container>
		</div>
	);
}

export default Contentinvoicepelangganmobile;
