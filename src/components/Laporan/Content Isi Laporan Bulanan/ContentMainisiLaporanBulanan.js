import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from React Router

import ContentlaporanjumlahtransaksiBulanan from "./OverView/ContentlaporanjumlahtransaksiBulanan";
import ContentlaporanpelangganBulanan from "./OverView/ContentlaporanpelangganBulanan";
import ContentlaporanterjualBulanan from "./OverView/ContentlaporanterjualBulanan";
import ContentlaporantotalinvoiceBulanan from "./OverView/ContentlaporantotalinvoiceBulanan";
import ContentlaporantransaksibelumdibayarBulanan from "./OverView/ContentlaporantransaksibelumdibayarBulanan";
import ContentlaporanytransaksilunasBulanan from "./OverView/ContentlaporantransaksilunasBulanan";

import ContentlaporanpendapatanBulanan from "./Penghasilan/ContentlaporanpendapatanBulanan";

import ContentlaporanprodukterlarisBulanan from "./Produk Terlaris/ContentlaporanprodukterlarisBulanan";

import ContentlaporankategoriterlarisBulanan from "./Kategori Terlaris/ContentlaporankategoriterlarisBulanan";

import ContentlapaorandatalengkapBulanan from "./Data Laporan Lengkap Penjualan/ContentlaporandatalengkapBulanan";

import ContentlaporangrafikpenilaianBulanan from "./Grafik/ContentlaporangrafikpenilaianBulanan";
import ContentLaporanTransaksiDibatalkanBulanan from "./OverView/ContentLaporanTransaksiDibatalkanBulanan";

function ContentMainisiLaporanBulanan() {
	return (
		<div>
			{/* sesuaikan dengan apa yang user pilih, waktu di bawah cuma data dummy  */}

			<section className="section dashboard">
				<Card.Title>Over View bulan Januari - Maret 2023.</Card.Title>

				<div class="row">
					<div class="col-sm-4">
						<div className="card info-card sales-card">
							{/* Jumlah Pelanggan */}

							<ContentlaporanpelangganBulanan />
						</div>
					</div>
					<div class="col-sm-4">
						<div className="card info-card revenue-card">
							{/* Jumlah Terjual */}
							<ContentlaporanterjualBulanan />
						</div>
					</div>
					<div class="col-sm-4">
						<div className="card info-card customers-card">
							{/* Jumlah Total Terjual */}
							<ContentlaporanjumlahtransaksiBulanan />
						</div>
					</div>
				</div>

				<Row>
					<Col>
						<div className="card info-card customers-card">
							{/* Jumlah Total Terjual */}
							<ContentlaporanytransaksilunasBulanan />
						</div>
					</Col>
					<Col>
						<div className="card info-card customers-card">
							{/* Jumlah Total Terjual */}
							<ContentlaporantransaksibelumdibayarBulanan />
						</div>
					</Col>
				</Row>
				<Row>
					
					<Col>
						<div className="card info-card customers-card">
							<ContentLaporanTransaksiDibatalkanBulanan />
						</div>
					</Col>
					<Col>
						<div className="card info-card customers-card">
							{/* Jumlah Total Terjual */}
							<ContentlaporantotalinvoiceBulanan />
						</div>
					</Col>
				</Row>

				<Card.Title>Penghasilan Januari - Maret 2023.</Card.Title>
				<ContentlaporanpendapatanBulanan />

				<Card.Title>5 Produk Terlaris bulan Januari - Maret 2023.</Card.Title>
				<ContentlaporanprodukterlarisBulanan />

				<Card.Title>Kategori Terlaris bulan Januari - Maret 2023.</Card.Title>

				<ContentlaporankategoriterlarisBulanan />		

				<Card.Title>Grafik Penilaian Januari - Maret 2023.</Card.Title>
				<ContentlaporangrafikpenilaianBulanan />

				<Card.Title>Data Lengkap Penjualan Januari - Maret 2023.</Card.Title>
				<ContentlapaorandatalengkapBulanan />

				<div className="d-flex justify-content-between">
					{/* Use Link component to create a link */}
					<Link to="/Outputhasilprintlaporanbulanan">
						<button className="btn btn-primary">Cetak Laporan</button>
					</Link>
				</div>
			</section>
		</div>
	);
}
export default ContentMainisiLaporanBulanan;
