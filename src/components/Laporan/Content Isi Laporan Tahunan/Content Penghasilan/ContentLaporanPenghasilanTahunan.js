import React from "react";
import { Card } from "react-bootstrap";

function ContentLaporanPenghasilanTahunan() {
    const formatRupiah = (number) => {
		return new Intl.NumberFormat("id-ID", {
			style: "currency",
			currency: "IDR",
			minimumFractionDigits: 0,
		}).format(number);
	};

	const totalPendapatan = 69000000; // Ganti angka sesuai dengan pendapatan yang sesungguhnya
	const jumlahPenjualan = 30; // Ganti dengan jumlah penjualan yang sesungguhnya

	return (
		<div>
			<Card>
				<Card.Body>
					<Card.Title>Penghasilan Yang Didapatkan</Card.Title>
					<p>
						Pendapatan yang berhasil diraih pada tahun 2023 mencapai angka luar biasa sebesar{" "}
						{formatRupiah(totalPendapatan)}.
					</p>
					<hr />
					<Card.Title>Rincian</Card.Title>
					<div className="d-flex justify-content-between">
						<p style={{ fontSize: "0.9rem" }}>Pendapatan Non-Flash Sale</p>
						<p className="text-muted">{formatRupiah(5000000)}</p>
					</div>
					<div className="d-flex justify-content-between">
						<p style={{ fontSize: "0.9rem" }}>Penjualan Non-Flash Sale</p>
						<p className="text-muted">10 Penjualan.</p>
					</div>
					{/* Jika tidak ada flash sale maka kosongi saja */}
					<div className="d-flex justify-content-between">
						<p style={{ fontSize: "0.9rem" }}>Pendapatan Flash Sale 1.1</p>
						<p className="text-muted">{formatRupiah(5000000)}</p>
					</div>
					<div className="d-flex justify-content-between">
						<p style={{ fontSize: "0.9rem" }}>Penjualan dari Flash Sale 1.1</p>
						<p className="text-muted">10 Penjualan.</p>
					</div>
					<div className="d-flex justify-content-between">
						<p style={{ fontSize: "0.9rem" }}>Pendapatan Flash Sale 2.2</p>
						<p className="text-muted">{formatRupiah(5000000)}</p>
					</div>
					<div className="d-flex justify-content-between">
						<p style={{ fontSize: "0.9rem" }}>Penjualan dari Flash Sale 2.2</p>
						<p className="text-muted">10 Penjualan.</p>
					</div>
				</Card.Body>
				<Card.Footer>
					<div className="d-flex justify-content-between">
						<p style={{ fontSize: "0.9rem" }}>
							<b>Total Pendapatan : </b>
						</p>
						<p>
							{formatRupiah(totalPendapatan)}
							<br />
							<span>{jumlahPenjualan} Penjualan</span>{" "}
						</p>
					</div>
				</Card.Footer>
			</Card>
		</div>
	);
}

export default ContentLaporanPenghasilanTahunan