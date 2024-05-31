import React, { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import Swal from "sweetalert2";

function Contenttambahkategoridinding() {
	const [gambarKategori, setGambarKategori] = useState(null);
	const [namaKategori, setNamaKategori] = useState("");
	const [showModal, setShowModal] = useState(false);
	const maxGambarKategoriCount = 1; // Batasan jumlah gambar kategori

	const handleGambarChange = (event) => {
		const file = event.target.files[0];
		setGambarKategori(file);
	};

	const handleNamaKategoriChange = (event) => {
		setNamaKategori(event.target.value);
	};

	const isExistingCategory = (inputCategory, existingCategories) => {
		const inputCategoryLowerCase = inputCategory.toLowerCase();
		return existingCategories.some(
			(existingCategory) =>
				existingCategory.toLowerCase() === inputCategoryLowerCase,
		);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		if (!gambarKategori || !namaKategori) {
			const emptyFields = [];
			if (!gambarKategori) emptyFields.push("Gambar Kategori");
			if (!namaKategori) emptyFields.push("Nama Kategori");

			showErrorAlert(
				"Isian Tidak Lengkap",
				`Harap lengkapi ${emptyFields.join(", ")} sebelum menyimpan data.`,
			);
			return;
		}

		const existingCategories = ["Kursi", "Meja", "Lemari", "kursi"]; // Replace with your existing category names

		const existingCategory = existingCategories.find(
			(existingCategory) =>
				existingCategory.toLowerCase() === namaKategori.toLowerCase(),
		);

		if (existingCategory) {
			showErrorAlert(
				"Nama Kategori Sudah Ada",
				`Maaf, nama kategori ("${existingCategory}") sudah ada. Mohon gunakan nama kategori lain.`,
			);
			return;
		}

		// Simulate data submission
		resetStateAndShowSuccessAlert("Data berhasil disimpan!");
	};

	const resetStateAndShowSuccessAlert = (message) => {
		setGambarKategori(null);
		setNamaKategori("");
		showSuccessAlert(message);
	};

	const showSuccessAlert = (title) => {
		Swal.fire({
			icon: "success",
			title: title,
			showConfirmButton: false,
			timer: 1500,
		}).then(() => {
			// Berikan waktu penundaan sebelum mengarahkan ke halaman
			setTimeout(() => {
				window.location.href = "/Kategoridindingadmin";
			}, 1000);
		});
	};

	const showErrorAlert = (title, text) => {
		Swal.fire({
			icon: "error",
			title: title,
			text: text,
		});
	};

	const handleModalClose = () => {
		setShowModal(false);
	};

	const handleImageClick = () => {
		setShowModal(true);
	};

	const handleRemoveImage = () => {
		setGambarKategori(null);
	};

	const handleSimpanData = () => {
		if (!gambarKategori || !namaKategori) {
			const emptyFields = [];
			if (!gambarKategori) emptyFields.push("Gambar Kategori");
			if (!namaKategori) emptyFields.push("Nama Kategori");

			showErrorAlert(
				"Isian Tidak Lengkap",
				`Harap lengkapi ${emptyFields.join(", ")} sebelum menyimpan data.`,
			);
			return;
		}

		const existingCategories = ["Kursi", "Meja", "Lemari", "kursi"]; // Replace with your existing category names

		const existingCategory = existingCategories.find(
			(existingCategory) =>
				existingCategory.toLowerCase() === namaKategori.toLowerCase(),
		);

		if (existingCategory) {
			showErrorAlert(
				"Nama Kategori Sudah Ada",
				`Maaf, nama kategori ("${existingCategory}") sudah ada. Mohon gunakan nama kategori lain.`,
			);
			return;
		}

		Swal.fire({
			icon: "question",
			title: "Apakah Anda yakin ingin menyimpan data?",
			showCancelButton: true,
			confirmButtonText: "Ya, simpan data",
			cancelButtonText: "Tidak",
		}).then((result) => {
			if (result.isConfirmed) {
				resetStateAndShowSuccessAlert("Data berhasil disimpan!");
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
				Swal.fire({
					icon: "info",
					title: "Penambahan produk dinding dibatalkan!",
					showConfirmButton: false,
					timer: 1500,
				}).then(() => {
					window.location.href = "/Kategoridindingadmin"; // Mengarahkan ke halaman yang dimaksud
				});
			}
		});
	};

	return (
		<div>
			<div className="pagetitle">
				<h1>Kategori Pada Dinding</h1>
				<nav>
					<ol className="breadcrumb">
						<li className="breadcrumb-item">
							<a href="/">Home</a>
						</li>
						<li className="breadcrumb-item active">Kategori Pada Dinding</li>
					</ol>
				</nav>
			</div>

			<section className="section dashboard">
				<div className="row d-flex flex-wrap justify-content-between">
					<div className="col-12 mb-0">
						<div className="card large-card">
							<div className="card-body">
								<h5 className="card-title">Tambah Kategori</h5>
								<Form onSubmit={handleSubmit}>
									<Form.Group controlId="gambarKategori">
										<Form.Label>Gambar Kategori</Form.Label>
										<Form.Control
											type="file"
											accept="image/*"
											onChange={handleGambarChange}
											className="mb-3"
											required // Menandakan bahwa gambar wajib diisi
										/>
										<figcaption className="blockquote-footer mt-2">
											Sisa gambar Kategori yang dapat diunggah (
											{maxGambarKategoriCount - (gambarKategori ? 1 : 0)})
										</figcaption>
										{gambarKategori && (
											<div
												style={{
													position: "relative",
													maxWidth: "30%",
													cursor: "pointer",
													borderRadius: "10px",
													overflow: "hidden",
												}}
											>
												<img
													src={URL.createObjectURL(gambarKategori)}
													alt="Preview"
													style={{ width: "100%", height: "auto" }}
													onClick={handleImageClick}
												/>
												<button
													className="btn btn-danger btn-sm"
													style={{
														position: "absolute",
														top: "5px",
														right: "5px",
														zIndex: 1,
													}}
													onClick={handleRemoveImage}
												>
													<i className="bi bi-x"></i>
												</button>
											</div>
										)}
									</Form.Group>

									<Form.Group controlId="namaKategori" className="mt-3">
										<Form.Label>Nama Kategori</Form.Label>
										<Form.Control
											type="text"
											value={namaKategori}
											onChange={handleNamaKategoriChange}
											placeholder="Masukkan nama kategori"
											className="mb-3"
											required
										/>
									</Form.Group>

									<div className="d-flex justify-content-between mb-2 mt-5">
										<Button variant="outline-dark" onClick={handleBatal}>
											Batal
										</Button>
										<Button onClick={handleSimpanData}>Tampilkan Kategori</Button>
									</div>
								</Form>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Modal show={showModal} onHide={handleModalClose}>
				<Modal.Header closeButton>
					<Modal.Title>Preview Gambar Kategori</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{gambarKategori && (
						<img
							src={URL.createObjectURL(gambarKategori)}
							alt="Preview"
							style={{ maxWidth: "100%" }}
						/>
					)}
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleModalClose}>
						Tutup
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default Contenttambahkategoridinding;
