import React from "react";
import { Button, Card } from "react-bootstrap";

import Contentisianalisisflashsalependapatan from "./Isianalisisflashsale.js/Over View/Contentisianalasisflashsalependapatan";
import Contentisianalisisflashsalelistproduk from "./Isianalisisflashsale.js/List semua produk yang flash sale/Contentisianalisisflashsalelistproduk";
import Contentisianalisisflashsaleterjual from "./Isianalisisflashsale.js/Over View/Contentisianalisisflashsaleterjual";
import Contentisianalisisflashsalejumlahtransaksi from "./Isianalisisflashsale.js/Over View/Contetisianalisisjumlahtransaksi";

import Contentanalisisflashsaleprodukterlarisdataran from "./Isianalisisflashsale.js/5 produk terlaris/Contentanalisisflashsaleprodukterlarisdataran";
import Contentanalisisflashsaleprodukterlarisdinding from "./Isianalisisflashsale.js/5 produk terlaris/Contentanalisisflashsaleprodukterlarisdinding";
import ContentisianalisisTotalProduk from "./Isianalisisflashsale.js/Over View/ContentisianalisisTotalProduk";
import ContentisianalisisTotalPembeli from "./Isianalisisflashsale.js/Over View/ContentisianalisisTotalPembeli";
import Contentisianalisisflashsaletotalprodukdilihat from "./Isianalisisflashsale.js/Over View/Contentisianalisisflashsaletotalprodukdilihat";

function Contentanalisisflashsale() {
	return (
		<div>
			<div class="pagetitle">
				<h1>Program Flash Sale 1.1 (Aktif)</h1>
				<nav>
					<ol class="breadcrumb">
						<li class="breadcrumb-item">
							<a href="/">Home</a>
						</li>
						<li class="breadcrumb-item active">
							Program Flash Sale 1.1 (Aktif)
						</li>
					</ol>
				</nav>
			</div>
			<section className="section dashboard">
				<Card>
					<Card.Body>
						<div className="d-flex justify-content-between">
							<Card.Title>Program Flash Sale 1.1</Card.Title>
							<Card.Title>
								<p class="badge rounded-pill bg-primary">Sedang Berjalan</p>
							</Card.Title>
						</div>
						<div className="d-flex justify-content-between">
							<p>Waktu Mulai : 2023-05-29</p>
							<p>Waktu Akhir : 2023-05-30</p>
						</div>
					</Card.Body>
				</Card>
				<Card.Title>Overview</Card.Title>

				<div class="row">
					<div class="col-sm-4">
						<div className="card info-card sales-card">
							{/* Jumlah Pelanggan */}
							<Contentisianalisisflashsaleterjual />
						</div>
					</div>
					<div class="col-sm-4">
						<div className="card info-card revenue-card">
							{/* Jumlah Terjual */}
							{/* <Contentlaporanterjual /> */}
							<Contentisianalisisflashsalejumlahtransaksi />
						</div>
					</div>
					<div class="col-sm-4">
						<div className="card info-card customers-card">
							{/* Jumlah Total Terjual */}
							{/* <Contentlaporanjumlahtransaksi /> */}
							<Contentisianalisisflashsalependapatan />
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-sm-4">
						<ContentisianalisisTotalProduk />
					</div>
					<div class="col-sm-4">
						<ContentisianalisisTotalPembeli />
					</div>

					<div class="col-sm-4">
						<Contentisianalisisflashsaletotalprodukdilihat />
					</div>
				</div>
				<Card.Title>List Produk Flash Sale</Card.Title>

				<Contentisianalisisflashsalelistproduk />

				<Card.Title>Top 5 Produk Terlaris</Card.Title>

				<Contentanalisisflashsaleprodukterlarisdataran />

				<Contentanalisisflashsaleprodukterlarisdinding />
				
				
			</section>
		</div>
	);
}

export default Contentanalisisflashsale;
