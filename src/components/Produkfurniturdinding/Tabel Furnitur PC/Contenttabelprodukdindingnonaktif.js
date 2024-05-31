import React, { useState } from "react";
import { Button, Card, Form, Table, Dropdown, Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Contentloading from "../../Loaders/Contentloading";

function Contenttabelprodukdindingnonaktif() {
	const [isLoading, setIsLoading] = useState(false); // State untuk mengatur visibilitas loader

  const [products, setProducts] = useState([
		{
			id: 1,
			name: "Wibu",
			variant: ["Putih", "Hitam"],
			price: ["Rp 1.200.000", "Rp 900.000"],
			category: "Meja",
			initialStock: [9, 2],
			currentStock: [0, 0],
			sold: "2X",
			status: "Habis",
			image: "assets/assets/img/product-3.jpg",
		},
		{
			id: 2,
			name: "Wibu2",
			variant: ["-"],
			price: ["Rp 1.200.000"],
			category: "Meja",
			initialStock: [4],
			currentStock: [4],
			sold: "2X",
			status: "Diarsipkan",
			image: "assets/assets/img/product-2.jpg",
		},
		// Tambahkan data produk lainnya sesuai kebutuhan
	]);

	const [showDropdown, setShowDropdown] = useState(false);
	const [selectedProductId, setSelectedProductId] = useState(null);
	const [showUpdateModal, setShowUpdateModal] = useState(false);
	const [newStock, setNewStock] = useState("");
	const [newStock2, setNewStock2] = useState("");


	const handleDeleteClick = () => {
		Swal.fire({
			icon: "question",
			title: "Apakah Anda yakin ingin menghapus produk ini ?",
			showCancelButton: true,
			confirmButtonText: "Ya, hapus produk",
			cancelButtonText: "Batal",
		  }).then((result) => {
			if (result.isConfirmed) {
			  // Simulasikan proses loading selama 1 detik
			  setIsLoading(true);
			  setTimeout(() => {
				setIsLoading(false);
				// Lakukan logika penyimpanan data di sini
				Swal.fire({
				  icon: "success",
				  title: "Produk Berhasil dihapus!",
				  showConfirmButton: true,
				});
			  }, 1500);
			}
		  });
		};

	const handleActivateClick = () => {
		Swal.fire({
			icon: "question",
			title: "Apakah Anda yakin ingin mengaktifkan produk ini ?",
			showCancelButton: true,
			confirmButtonText: "Ya, aktifkan produk",
			cancelButtonText: "Batal",
		  }).then((result) => {
			if (result.isConfirmed) {
			  // Simulasikan proses loading selama 1 detik
			  setIsLoading(true);
			  setTimeout(() => {
				setIsLoading(false);
				// Lakukan logika penyimpanan data di sini
				Swal.fire({
				  icon: "success",
				  title: "Produk Berhasil diaktifkan !",
				  showConfirmButton: true,
				});
			  }, 2500);
			}
		  });
		};

	const handleDropdownOpen = (productId) => {
		setShowDropdown(true);
		setSelectedProductId(productId);
	};

	const handleDropdownClose = () => {
		setShowDropdown(false);
		setSelectedProductId(null);
	};

	const handleUpdateClick = () => {
		setShowUpdateModal(true);
	};

	const handleCloseUpdateModal = () => {
		setShowUpdateModal(false);
	};

	const handleUpdateStock = () => {
		Swal.fire({
			icon: "question",
			title: "Konfirmasi update stok ?",
			showCancelButton: true,
			confirmButtonText: "Ya, update stok",
			cancelButtonText: "Kembali",
		})
			.then((result) => {
				if (result.isConfirmed) {
					setIsLoading(true);
					setTimeout(() => {
						setIsLoading(false);
						const errorOccurred = false;

						if (!errorOccurred) {
							Swal.fire({
								icon: "success",
								title: "Stok Berhasil diupdate!",
								showConfirmButton: true,
							}).then(() => {
								handleCloseUpdateModal();
							});
						} else {
							Swal.fire({
								icon: "error",
								title: "Terjadi kesalahan",
								text: "Stok gagal diupdate. Silakan coba lagi nanti.",
								showConfirmButton: true,
							});
						}
					}, 1800);
				}
			})
			.catch((error) => {
				console.error("Error occurred:", error);
				Swal.fire({
					icon: "error",
					title: "Terjadi kesalahan",
					text: "Stok gagal diupdate. Silakan coba lagi.",
					showConfirmButton: true,
				});
			});
	};

	return (
		<div>
			<Card className="top-selling overflow-auto">
				<div className="card-body pb-0">
					<div className="d-none d-md-block">
						<div className="d-flex justify-content-between">
							<Card.Title>Produk Habis (Stok = 0) dan Diarsipkan</Card.Title>
							<Card.Title>
								<span> 2 Produk </span>
							</Card.Title>
						</div>
					</div>

					<div className="d-flex justify-content-between d-block d-md-none">
						<Card.Title style={{ fontSize: "1rem" }}>
							Produk Habis (Stok = 0) <br /> dan Diarsipkan
						</Card.Title>
						<Card.Title>
							<span
								className="d-block d-md-none"
								style={{ fontSize: "0.8rem" }}
							>
								{" "}
								Tidak <br /> Ditampilkan{" "}
							</span>
						</Card.Title>
					</div>
						<Table className="table table-bordered table-hover">
							<thead>
								<tr>
									<th scope="col" className="text-center">
										Gambar
									</th>
									<th scope="col" className="text-center">
										Produk
									</th>
									<th scope="col" className="text-center">
										Varian
									</th>
									<th scope="col" className="text-center">
										Harga
									</th>
									<th scope="col" className="text-center">
										Kategori
									</th>
									<th scope="col" className="text-center">
										Stok Awal
									</th>
									<th scope="col" className="text-center">
										Stok Sekarang
									</th>
									<th scope="col" className="text-center">
										Terjual
									</th>
									<th scope="col" className="text-center">
										Aksi
									</th>
								</tr>
							</thead>
							<tbody>
								{products.map((product) => (
									<tr key={product.id}>
										<td className="text-center">
											<a href="#">
												<img src={product.image} alt="" />
											</a>
										</td>
										<td className="text-center">
											<p
												className="text-dark fw-bold text-muted"
												style={{ marginBottom: "1.5px" }}
											>
												{product.name}
											</p>{" "}
											<span
												className={`text-danger ${
													product.status === "Diarsipkan" ? "text-success" : ""
												}`}
											>
												({product.status})
											</span>
										</td>
										<td className="text-center">
											{product.variant.map((variant, index) => (
												<div key={index} className="text-center">
													{variant}
												</div>
											))}
										</td>
										<td className="text-center" style={{ fontSize: "0.75rem" }}>
											{product.price.map((price, index) => (
												<div key={index} className="text-center">
													{price}
												</div>
											))}
										</td>
										<td className="text-center">{product.category}</td>
										<td className="text-center">
											{product.initialStock.map((stock, index) => (
												<div key={index} className="text-center">
													{stock}
												</div>
											))}
										</td>
										<td className="text-center">
											{product.currentStock.map((stock, index) => (
												<div key={index} className="text-center">
													{stock}
												</div>
											))}
										</td>
										<td className="text-center">{product.sold}</td>
										<td>
											{product.status === "Diarsipkan" ? (
												<>
													<Button
														variant="link"
														onClick={handleActivateClick}
														style={{ textDecoration: "none" }}
													>
														Aktifkan
													</Button>
													<br />
													<Link to="/edit-product">
														<Button
															variant="link"
															style={{ textDecoration: "none" }}
														>
															Ubah
														</Button>
													</Link>
													<br />
													<Dropdown
														show={
															showDropdown && selectedProductId === product.id
														}
														onToggle={
															showDropdown
																? handleDropdownClose
																: () => handleDropdownOpen(product.id)
														}
													>
														<Dropdown.Toggle
															variant="link"
															style={{ textDecoration: "none" }}
														>
															Lainnya
														</Dropdown.Toggle>
														<Dropdown.Menu>
															<Dropdown.Item onClick={handleDeleteClick}>
																Hapus
															</Dropdown.Item>
															<Dropdown.Item onClick={handleUpdateClick}>
																Update Stok
															</Dropdown.Item>
															<Dropdown.Item href="/DetailProdukDinding">
														Lihat Detail Produk
													</Dropdown.Item>
														</Dropdown.Menu>
													</Dropdown>
												</>
											) : (
												<>
													<Button
														variant="link"
														onClick={handleUpdateClick}
														style={{ textDecoration: "none" }}
													>
														Update Stok
													</Button>
													<br />
													<Link to="/edit-product">
														<Button
															variant="link"
															style={{ textDecoration: "none" }}
														>
															Ubah
														</Button>
													</Link>
													<br />
													<Dropdown
														show={
															showDropdown && selectedProductId === product.id
														}
														onToggle={
															showDropdown
																? handleDropdownClose
																: () => handleDropdownOpen(product.id)
														}
													>
														<Dropdown.Toggle
															variant="link"
															style={{ textDecoration: "none" }}
														>
															Lainnya
														</Dropdown.Toggle>
														<Dropdown.Menu>
															<Dropdown.Item onClick={handleDeleteClick}>
																Hapus
															</Dropdown.Item>
															<Dropdown.Item href="/DetailProdukDinding">
														Lihat Detail Produk
													</Dropdown.Item>
														</Dropdown.Menu>
													</Dropdown>
												</>
											)}
										</td>
									</tr>
								))}
							</tbody>
						</Table>
						{isLoading && <Contentloading />} {/* Tampilkan loader jika isLoading true */}


					<Card.Footer>
						<div className="d-flex justify-content-between align-items-center">
							<Form.Group className="showperpage">
								<Form.Label>Show per page:</Form.Label>
								<Form.Control as="select" size="sm">
									<option value="10">10</option>
									<option value="25">25</option>
									<option value="50">50</option>
									<option value="100">100</option>
								</Form.Control>
							</Form.Group>
							<div className="pagination-info">
								1 - {products.length} of {products.length} items
							</div>
						</div>
					</Card.Footer>
				</div>
			</Card>

			{/* Modal for updating stock */}
			<Modal
				show={showUpdateModal}
				onHide={handleCloseUpdateModal}
				centered
				backdrop="static"
			>
				<Modal.Header closeButton>
					<Modal.Title>Update Stok</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form.Group controlId="newStock">
						<Form.Label>Masukkan Stok Terbaru</Form.Label>
						<div className="d-flex justify-content-between">
							<p>Stok Varian Putih</p>
							<p className="text-muted">0 Produk</p>
						</div>
						<Form.Control
							type="number"
							placeholder="Stok Baru"
							value={newStock}
							onChange={(e) => setNewStock(e.target.value)}
							min="1" // Menambahkan atribut min untuk membatasi minimal angka 1
						/>
						<hr />
						<div className="d-flex justify-content-between">
							<p>Stok Varian Hitam</p>
							<p className="text-muted">0 Produk</p>
						</div>
						<Form.Control
						type="number"
						placeholder="Stok Baru"
						value={newStock2}
						onChange={(e) => setNewStock2(e.target.value)}
						min="1" // Menambahkan atribut min untuk membatasi minimal angka 1
						/>
					</Form.Group>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleCloseUpdateModal}>
						Batal
					</Button>
					<Button variant="primary" onClick={handleUpdateStock}>
						Simpan
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
  );
}

export default Contenttabelprodukdindingnonaktif;
