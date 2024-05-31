import React from "react";
import { Card, Col, Row } from "react-bootstrap";

import Contenttransaksibaru from "./Informasi OverView/Contenttransaksibaru";
import Contentprodukdindinghabis from "./Produk Habis/Contentprodukdindinghabis";

import Contenttotalpelanggan from "./Informasi OverView/Contenttotalpelanggan";
import Contenttotalproduk from "./Informasi OverView/Contenttotalproduk";
import Contenttotalpendapatanyangdidapat from "./Informasi OverView/Contenttotalpendapatanyangdidapat";
import Contentinformasiflashsale from "./Informasi Flash Sale/Contentinformasiflashsale";
import Contenttotalinvoiceyangdidapat from "./Informasi OverView/Contenttotalinvoiceyangdidapat";
import Contentprodukdataranhabis from "./Produk Habis/Contentprodukdataranhabis";
import Contenttotaltransaksi from "./Informasi OverView/Contenttotaltransaksi";
import ContenttopsellingPC from "./5 Produk terlaris/ContenttopsellingPC";
import ContentprodukdataransegerahabisPC from "./Produk Segera Habis/ContentprodukdataransegerahabisPC";
import ContentprodukdindingsegerahabisPC from "./Produk Segera Habis/ContentprodukdindingsegerahabisPC";

function ContentDashboardadmin() {
	return (
		<div>
			{/* Page Title */}
			<div className="pagetitle">
				<h1>Dashboard</h1>
				<nav>
					<ol className="breadcrumb">
						<li className="breadcrumb-item">
							<a href="/">Home</a>
						</li>
						<li className="breadcrumb-item active">Dashboard</li>
					</ol>
				</nav>
			</div>
			{/* End Page Title */}

			<section className="section dashboard">
				<div className="row">
					{/* Total Pelanggan Card */}
					<div className="col-xl-4 col-md-6">
						<Card className="info-card sales-card">
							<Contenttotalpelanggan />
						</Card>
					</div>

					{/* Total Produk Card */}
					<div className="col-xl-4 col-md-6">
						<Contenttotalproduk />
					</div>

					{/* Total Transaksi */}
					<div className="col-xl-4 col-md-6">
						<Contenttotaltransaksi />
					</div>
				</div>

				<Row>
					<Col>
						<Contenttotalpendapatanyangdidapat />
						<Contenttotalinvoiceyangdidapat />
					</Col>
					<Col>
						<Contentinformasiflashsale />
					</Col>
				</Row>
				<Contenttransaksibaru />

				{/* Card Top Selling */}
				<div className="row">
					<div className="col-12">
						<ContenttopsellingPC />
					</div>
				</div>

				<div style={{ marginTop: "-15px" }}>
					{/* Card Produk Yang Telah Habis (Stok = 0) */}
					<Card.Title>Produk Yang Segera Habis (Stok &#60; 5)</Card.Title>
					<div className="row">
						<div className="col-md-6">
							<Card className="top-selling overflow-auto">
								<div className="card-body pb-0">
									<h5 className="card-title">Furnitur Pada Dataran</h5>
									{/* <Contentdataransegerahabis /> */}
									<ContentprodukdataransegerahabisPC />
								</div>
							</Card>
						</div>

						<div className="col-md-6">
							<Card className="top-selling overflow-auto">
								<div className="card-body pb-0">
									<h5 className="card-title">Furnitur Pada Dinding</h5>
									<ContentprodukdindingsegerahabisPC />
								</div>
							</Card>
						</div>
					</div>
				</div>

				<div style={{ marginTop: "-15px" }}>
					<Card.Title>Produk Yang Telah Habis (Stok = 0)</Card.Title>
					<div className="row">
						<div className="col-md-6">
							<Card className="top-selling overflow-auto">
								<div className="card-body pb-0">
									<h5 className="card-title">Furnitur Pada Dataran</h5>
									<Contentprodukdataranhabis />
								</div>
							</Card>
						</div>
						<div className="col-md-6">
							<Card className="top-selling overflow-auto">
								<div className="card-body pb-0">
									<h5 className="card-title">Furnitur Pada Dinding</h5>
									<Contentprodukdindinghabis />
								</div>
							</Card>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default ContentDashboardadmin;
