import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import Swal from "sweetalert2";

import Contentvarianwarna from "./Isi Konten Tambah Produk/Content Tambah Opsional/Content Tambah Varian Produk/Contentvarianwarna";
import ContentAugmenteRealityDataran from "./Isi Konten Tambah Produk/Content Tambah Augmented Reality Dataran/ContentAugmenteRealityDataran";
import Contentgambarproduk from "./Isi Konten Tambah Produk/Content Tambah Gambar Produk Dataran/Contentgambarproduk";
import Contentinformasiproduk from "./Isi Konten Tambah Produk/Content Tambah Informasi Produk Dataran/Contentinformasiproduk";
import Contentloading from "../../../components/Loaders/Contentloading";
import Contentdiskonproduk from "./Isi Konten Tambah Produk/Content Tambah Diskon Produk Dataran/Contentdiskonproduk";
import ContentSkaladanDimensiProduk from "./Isi Konten Tambah Produk/Content Tambah Opsional/Content Tambah Dimensi Produk/ContentSkaladanDimensiProduk";

function Contenttambahprodukdataran() {
	const [showVarianProduk, setShowVarianProduk] = useState(false); // State untuk mengatur visibilitas bagian Varian Produk
	const [showDiskonProduk, setShowDiskonProduk] = useState(false); // State untuk mengatur visibilitas bagian Diskon Produk
	const [showSkaladanDimensiProduk, setShowSkaladanDimensiProduk] =
		useState(false); // State untuk mengatur visibilitas bagian Skala & Dimensi Produk
	const [isLoading, setIsLoading] = useState(false); // State untuk mengatur visibilitas loader

	const handleSimpanData = () => {
		Swal.fire({
			icon: "question",
			title: "Apakah Anda yakin ingin menyimpan data Produk ?",
			showCancelButton: true,
			confirmButtonText: "Ya, simpan data",
			cancelButtonText: "Tidak",
		}).then((result) => {
			if (result.isConfirmed) {
				// Simulasikan proses loading selama 1 detik
				setIsLoading(true);
				setTimeout(() => {
					setIsLoading(false);
					// Lakukan logika penyimpanan data di sini
					Swal.fire({
						icon: "success",
						title: "Data Produk berhasil disimpan!",
						showConfirmButton: false,
						timer: 1500,
					}).then(() => {
						window.location.href = "/Produkdataranadmin"; // Mengarahkan ke halaman yang dimaksud
					});
				}, 1000);
			}
		});
	};

	const handleBatal = () => {
		Swal.fire({
			icon: "warning",
			title: "Anda yakin ingin membatalkan?",
			showCancelButton: true,
			confirmButtonText: "Ya, batalkan!",
			cancelButtonText: "Tidak",
		}).then((result) => {
			if (result.isConfirmed) {
				// Simulasikan proses loading selama 1 detik
				setIsLoading(true);
				setTimeout(() => {
					setIsLoading(false);
					Swal.fire({
						icon: "info",
						title: "Penambahan produk dataran dibatalkan!",
						showConfirmButton: false,
						timer: 1500,
					}).then(() => {
						window.location.href = "/Produkdataranadmin"; // Mengarahkan ke halaman yang dimaksud
					});
				}, 1000);
			}
		});
	};

	// Fungsi untuk menampilkan atau menyembunyikan bagian Varian Produk saat switch diubah
	const toggleVarianProduk = () => {
		setIsLoading(true);
		setTimeout(() => {
			setShowVarianProduk(!showVarianProduk);
			// Simulasikan proses loading selama 1 detik
			setIsLoading(false);
		}, 1300);
	};

	// Fungsi untuk menampilkan atau menyembunyikan bagian Diskon Produk saat switch diubah
	const toggleDiskonProduk = () => {
		setIsLoading(true); // Aktifkan loader saat switch diubah
		setTimeout(() => {
			setShowDiskonProduk(!showDiskonProduk);
			setIsLoading(false); // Nonaktifkan loader setelah 1.3 detik
		}, 1300);
	};

	// Fungsi untuk menampilkan atau menyembunyikan bagian Skala & Dimensi Produk saat switch diubah
	const toggleSkaladanDimensiProduk = () => {
		setIsLoading(true); // Aktifkan loader saat switch diubah
		setTimeout(() => {
			setShowSkaladanDimensiProduk(!showSkaladanDimensiProduk);
			setIsLoading(false); // Nonaktifkan loader setelah 1.3 detik
		}, 1300);
	};

	return (
		<div>
			<div className="pagetitle">
				<h1>Tambah Produk Dataran</h1>
				<nav>
					<ol className="breadcrumb">
						<li className="breadcrumb-item">
							<a href="/">Home</a>
						</li>
						<li className="breadcrumb-item active">Tambah Produk Dataran</li>
					</ol>
				</nav>
			</div>

			<section className="section dashboard">
				{/* Bagian 1 */}
				<div className="card large-card">
					<div className="card-body">
						<h5 className="card-title">Informasi Produk</h5>
						<Contentinformasiproduk />
					</div>
				</div>
				<Card>
					<Card.Body>
						<Card.Title>Gambar Produk</Card.Title>
						<Contentgambarproduk />
					</Card.Body>
				</Card>
				<Card>
					<Card.Body>
						<Card.Title>Augmented Reality Dataran</Card.Title>
						<ContentAugmenteRealityDataran />
					</Card.Body>
				</Card>
				<Card>
					<Card.Body>
						<Card.Title>Opsional</Card.Title>
						<div className="d-flex justify-content-between">
							<p>
								{showVarianProduk
									? "Non-Aktifkan Varian produk ?"
									: "Aktifkan Varian produk ?"}{" "}
								<span className="text-muted">(Opsional)</span>
							</p>
							<Form.Check
								type="switch"
								id="custom-switch-varian"
								onChange={toggleVarianProduk}
							/>
						</div>
						<div className="d-flex justify-content-between">
							<p>
								{showDiskonProduk
									? "Non-Aktifkan Diskon produk ?"
									: "Aktifkan Diskon produk ?"}{" "}
								<span className="text-muted">(Opsional)</span>
							</p>
							<Form.Check
								type="switch"
								id="custom-switch-diskon"
								onChange={toggleDiskonProduk}
							/>
						</div>

						<div className="d-flex justify-content-between">
							<p>
								{showSkaladanDimensiProduk
									? "Non-Aktifkan Dimensi Produk ?"
									: "Aktifkan Dimensi Produk ?"}{" "}
								<span className="text-muted">(Opsional)</span>
							</p>
							<Form.Check
								type="switch"
								id="custom-switch-skaladanDimensi"
								onChange={toggleSkaladanDimensiProduk}
							/>
						</div>
					</Card.Body>
				</Card>
				{isLoading && <Contentloading />}{" "}
				{/* Tampilkan loader jika isLoading true */}
				{/* End Bagian 1 */}
				{/* Bagian 2 (Varian Produk) */}
				{showVarianProduk && <Contentvarianwarna />}
				{/* Bagian 3 (Diskon Produk) */}
				{showDiskonProduk && <Contentdiskonproduk />}
				{/* Bagian 4 (Skala & Dimensi Produk) */}
				{showSkaladanDimensiProduk && <ContentSkaladanDimensiProduk />}
				<Card className="mt-5">
					<Card.Body>
						<div className="d-flex justify-content-between mb-2 mt-4">
							<Button variant="outline-dark" onClick={handleBatal}>
								Kembali
							</Button>
							<Button onClick={handleSimpanData}>Tampilkan Produk</Button>
						</div>
					</Card.Body>
				</Card>
			</section>
		</div>
	);
}

export default Contenttambahprodukdataran;
