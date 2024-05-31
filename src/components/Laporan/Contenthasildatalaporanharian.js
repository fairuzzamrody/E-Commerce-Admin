import React from "react";
import { Card, Col, Row } from "react-bootstrap";

import { Link } from "react-router-dom"; // Import Link from React Router

import Contentlaporanpelanggan from "./Contentisilaporan/Overview/Contentlaporanpelanggan";
import Contentlaporanterjual from "./Contentisilaporan/Overview/Contentlaporanterjual";
import Contentlaporanjumlahtransaksi from "./Contentisilaporan/Overview/Contentlaporanjumlahtransaksi";
import Contentlaporanprodukterlaris from "./Contentisilaporan/Produk Terlaris/Contentlaporanprodukterlaris";
import Contentlaporankategoriterlaris from "./Contentisilaporan/Kategori Terlaris/Contentlaporankategoriterlaris";
import Contentlapaorandatalengkap from "./Contentisilaporan/Datalaporanlengkappenjualan/Contentlaporandatalengkap";
import Contentlaporantransaksilunas from "./Contentisilaporan/Overview/Contentlaporantransaksilunas";
import Contentlaporantransaksibelumdibayar from "./Contentisilaporan/Overview/Contentlaporantransaksibelumdibayar";
import Contentlaporantotalinvoice from "./Contentisilaporan/Overview/Contentlaporantotalinvoice";
import Contentlaporangrafikpenilaian from "./Contentisilaporan/Grafik/Contentlaporangrafikpenilaian";
import Contentlaporanpendapatan from "./Contentisilaporan/Penghasilan/Contentlaporanpendapatan";
import ContentLaporanTransaksiDibatalkan from "./Contentisilaporan/Overview/ContentLaporanTransaksiDibatalkan";

function Contenthasildatalaporanharian() {
	return (
		<div>
			{/* sesuaikan dengan apa yang user pilih, waktu di bawah cuma data dummy  */}

			<section className="section dashboard">
				<Card.Title>Over View tanggal 29 - 30 Agustus 2023.</Card.Title>

				<div class="row">
					<div class="col-sm-4">
						<div className="card info-card sales-card">
							{/* Jumlah Pelanggan */}
							<Contentlaporanpelanggan />
						</div>
					</div>
					<div class="col-sm-4">
						<div className="card info-card revenue-card">
							{/* Jumlah Terjual */}
							<Contentlaporanterjual />
						</div>
					</div>
					<div class="col-sm-4">
						<div className="card info-card customers-card">
							{/* Jumlah Total Terjual */}
							<Contentlaporanjumlahtransaksi />
						</div>
					</div>
				</div>

				<Row>
					<Col>
						<div className="card info-card customers-card">
							{/* Jumlah Total Terjual */}
							<Contentlaporantransaksilunas />
						</div>
					</Col>
					<Col>
						<div className="card info-card customers-card">
							{/* Jumlah Total Terjual */}
							<Contentlaporantransaksibelumdibayar />
						</div>
					</Col>
				</Row>
				<Row>
					
					<Col>
						<div className="card info-card customers-card">
							<ContentLaporanTransaksiDibatalkan />
						</div>
					</Col>
					<Col>
						<div className="card info-card customers-card">
							{/* Jumlah Total Terjual */}
							<Contentlaporantotalinvoice />
						</div>
					</Col>
				</Row>

				<Card.Title>Penghasilan tanggal 29 - 30 Agustus 2023.</Card.Title>
				<Contentlaporanpendapatan />

				<Card.Title>5 Produk Terlaris tanggal 29 - 30 Agustus 2023.</Card.Title>
				<Contentlaporanprodukterlaris />

				<Card.Title>Kategori Terlaris tanggal 29 - 30 Agustus 2023.</Card.Title>

				<Contentlaporankategoriterlaris />


				<Card.Title>Grafik Penilaian tanggal 29 - 30 Agustus 2023.</Card.Title>
				<Contentlaporangrafikpenilaian />

				<Card.Title>Data Lengkap Penjualan tanggal 29 - 30 Agustus 2023.</Card.Title>
				<Contentlapaorandatalengkap />

				<div className="d-flex justify-content-between">
					{/* Use Link component to create a link */}
					
					<Link to="/Outputhasilprintlaporanharian">
						<button className="btn btn-primary">Cetak Laporan</button>
					</Link>
				</div>
			</section>
		</div>
	);
}

export default Contenthasildatalaporanharian;
