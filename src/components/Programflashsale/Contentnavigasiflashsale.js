import React from "react";
import Programflashsalesedangberjalan from "./Flashsalesedangberjalan/Programflashsalesedangberjalan";
import Programflashsalesakandatang from "./Flashsaleakandatang/Programflashsaleakandatang";
import { Card } from "react-bootstrap";
import Contentflashsaletelahberakhir from "./Flashsaletelahberakhir/Contentflashsaletelahberakhir";
function Contentnavigasiflashsale() {
	return (
		<div>
			<div className="d-none d-md-block">
				<nav className="mt-3">
					<div class="nav nav-tabs" id="nav-tab" role="tablist">
						<button
							class="nav-link active"
							id="nav-home-tab"
							data-bs-toggle="tab"
							data-bs-target="#nav-home"
							type="button"
							role="tab"
							aria-controls="nav-home"
							aria-selected="true"
						>
							Semua
						</button>
						<button
							class="nav-link"
							id="nav-profile-tab"
							data-bs-toggle="tab"
							data-bs-target="#nav-profile"
							type="button"
							role="tab"
							aria-controls="nav-profile"
							aria-selected="false"
						>
							Sedang Berjalan
						</button>
						<button
							class="nav-link"
							id="nav-contact-tab"
							data-bs-toggle="tab"
							data-bs-target="#nav-contact"
							type="button"
							role="tab"
							aria-controls="nav-contact"
							aria-selected="false"
						>
							Akan Datang
						</button>
						<button
							class="nav-link"
							id="nav-disabled-tab"
							data-bs-toggle="tab"
							data-bs-target="#nav-disabled"
							type="button"
							role="tab"
							aria-controls="nav-disabled"
							aria-selected="false"
						>
							Telah Berakhir
						</button>
					</div>
				</nav>
			</div>

			<div className="d-block d-lg-none">
				<nav className="mt-3">
					<div class="nav nav-tabs" id="nav-tab" role="tablist">
						<button
							class="nav-link active"
							id="nav-home-tab"
							data-bs-toggle="tab"
							data-bs-target="#nav-home"
							type="button"
							role="tab"
							aria-controls="nav-home"
							aria-selected="true"
							style={{ fontSize: "10px" }}
						>
							Semua
						</button>
						<button
							class="nav-link"
							id="nav-profile-tab"
							data-bs-toggle="tab"
							data-bs-target="#nav-profile"
							type="button"
							role="tab"
							aria-controls="nav-profile"
							aria-selected="false"
							style={{ fontSize: "9px" }}
						>
							Sedang Berjalan
						</button>
						<button
							class="nav-link"
							id="nav-contact-tab"
							data-bs-toggle="tab"
							data-bs-target="#nav-contact"
							type="button"
							role="tab"
							aria-controls="nav-contact"
							aria-selected="false"
							style={{ fontSize: "9px" }}
						>
							Akan Datang
						</button>
						<button
							class="nav-link"
							id="nav-disabled-tab"
							data-bs-toggle="tab"
							data-bs-target="#nav-disabled"
							type="button"
							role="tab"
							aria-controls="nav-disabled"
							aria-selected="false"
							style={{ fontSize: "9px" }}
						>
							Berakhir
						</button>
					</div>
				</nav>
			</div>

			<div class="tab-content" id="nav-tabContent">
				<div
					class="tab-pane fade show active"
					id="nav-home"
					role="tabpanel"
					aria-labelledby="nav-home-tab"
					tabindex="0"
				>
					<div className="d-flex justify-content-between mt-3">
					<Card.Title>Semua</Card.Title>
						<div class="dropdown mb-3 mt-3">
							<button
								class="btn btn-outline-dark dropdown-toggle"
								type="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Filter Berdasarkan
							</button>
							<ul class="dropdown-menu">
								<li>
									<a class="dropdown-item">Nama Flash Sale</a>
								</li>
								<li>
									<a class="dropdown-item">Waktu Flash Sale</a>
								</li>
								<li>
									<a class="dropdown-item">Jumlah Produk</a>
								</li>
							</ul>
						</div>
					</div>
					
					<Programflashsalesedangberjalan />
					<hr />
					<Contentflashsaletelahberakhir />
				</div>
				<div
					class="tab-pane fade"
					id="nav-profile"
					role="tabpanel"
					aria-labelledby="nav-profile-tab"
					tabindex="0"
				>
					<Card.Title>Sedang Berjalan</Card.Title>
					<Programflashsalesedangberjalan />
				</div>
				<div
					class="tab-pane fade"
					id="nav-contact"
					role="tabpanel"
					aria-labelledby="nav-contact-tab"
					tabindex="0"
				>
					<Card.Title>Akan Datang</Card.Title>
					<Programflashsalesakandatang />
				</div>
				<div
					class="tab-pane fade"
					id="nav-disabled"
					role="tabpanel"
					aria-labelledby="nav-disabled-tab"
					tabindex="0"
				>
					<Card.Title>Telah Berakhir</Card.Title>
					<Contentflashsaletelahberakhir />
				</div>
			</div>
		</div>
	);
}

export default Contentnavigasiflashsale;
