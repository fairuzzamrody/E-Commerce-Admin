import React from "react";
import { Card, Table } from "react-bootstrap";

function ContentdetailtransaksidibatalkanPCdiskon() {
	return (
		<div>
			<Card>
				<Card.Body>
					<Card.Title></Card.Title>
					<Table striped bordered hover>
						<thead>
							<tr>
								<th className="text-center">Produk</th>
								<th className="text-center">Nama Produk</th>
								<th className="text-center">Kategori</th>
								<th className="text-center">Kuantitas</th>
								<th className="text-center">Sub Total Harga</th>
								<th className="text-center">Status</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="text-center">
									<img
										src="assets/assets/img/product-1.jpg"
										alt=""
										style={{ maxWidth: "100px", borderRadius: "10px" }}
									/>
								</td>
								<td>
									<div className="text-dark fw-bold">
										Produk 1 <br />
										<small style={{ fontSize: "0.8rem" }}>Varian : -</small>
									</div>
								</td>
								<td className="text-center">Meja</td>
								<td className="text-center">2 Produk</td>
								<td className="text-center">
									Rp 1.500.000 <br />
									<span class="badge rounded-pill text-bg-warning">
										Flash Sale 1.1 <i class="bi bi-lightning-fill"></i>
									</span>
								</td>
								<td className="text-center">
									<span className="badge badge-danger">Dibatalkan</span>
								</td>
							</tr>
						</tbody>
					</Table>
					<hr />
					<div className="d-flex justify-content-between">
						<p>No Pengajuan Pembatalan :</p>
						<p className="fw-bold">AR-F/ORD/C4NC3L-20230815-0001</p>
					</div>
					<div className="d-flex justify-content-between">
						<p>Diminta Oleh :</p>
						<p className="text-muted">Pembeli</p>
					</div>
					<div className="d-flex justify-content-between">
						<p>Diminta Pada :</p>
						<p className="text-muted">26-09-2023 00:51</p>
					</div>
					<div className="d-flex justify-content-between">
						<p>Alasan :</p>
						<p className="text-muted">Lainnya/ berubah pikiran</p>
					</div>
					<hr style={{ marginTop: "-5px" }} />
					<div className="d-flex justify-content-between">
						<p>Harga satuan :</p>
						<p>Rp 1.000.000</p>
					</div>
					<div className="d-flex justify-content-between">
						<p>
							Harga Flash sale :{" "}
							<span class="badge rounded-pill text-bg-warning">-25%</span>
						</p>
						<p>Rp 750.000</p>
					</div>
					<div className="d-flex justify-content-between">
						<p>Sub Total Produk :</p>
						<p>Rp 1.500.000</p>
					</div>
					<div className="d-flex justify-content-between">
						<p>Ongkos Kirim :</p>
						<p>Rp 5.000</p>
					</div>
					<div className="d-flex justify-content-between">
						<p>Sub Total Ongkos Kirim :</p>
						<p>-Rp 5.000</p>
					</div>

					<div className="d-flex justify-content-between">
						<p className="fw-bold">Total Pesanan :</p>
						<p className="fw-bold">Rp 1.500.000</p>
					</div>

					<hr style={{ marginTop: "-5px" }} />
					<div className="d-flex justify-content-between">
						<p>No Pesanan :</p>
						<p>AR-F/ORD-20230815-0001</p>
					</div>
					<div className="d-flex justify-content-between">
						<p>No Transaksi :</p>
						<p>AR-F/TRX-20230815-0001</p>
					</div>
					<div className="d-flex justify-content-between">
						<p>Waktu Pemesanan:</p>
						<p className="text-muted">10-05-2023 00:18</p>
					</div>
					<div className="d-flex justify-content-between">
						<p>Waktu Pembayaran:</p>
						<p className="text-muted">11-05-2023 07:30</p>
					</div>
					<div className="d-flex justify-content-between">
						<p>Status Pembayaran :</p>
						<p>Lunas</p>
					</div>
					<div className="d-flex justify-content-between">
						<p>Metode Pembayaran :</p>
						<p>BCA</p>
					</div>
					<hr />
					<div className="d-flex justify-content-between">
						<p>
							<b> Total Keseluruhan :</b>
						</p>
						{/* Nama Produk */}
						<p> Produk 1,</p>
						{/* Jumlah kuantitas */}
						<p> 2x,</p>
						{/* Varian Produk */}
						<p>-,</p>
						{/* Total Keseluruhan Harga */}
						<p>
							<b> Rp 1.500.000</b>
						</p>
					</div>
				</Card.Body>
			</Card>
		</div>
	);
}

export default ContentdetailtransaksidibatalkanPCdiskon;
