import React, { useState } from "react";
import { Button, Card, Form, Table, Dropdown, Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Contentloading from "../../Loaders/Contentloading";

function Contenttabelprodukdataranaktif() {
	const [isLoading, setIsLoading] = useState(false);
	const [products, setProducts] = useState([
		{
			id: 1,
			name: "Sofa",
			variant: "-",
			price: "Rp 1.200.000",
			category: "Meja",
			initialStock: 10,
			currentStock: 8,
			sold: "2X",
			image: "assets/assets/img/product-1.jpg",
		},
		{
			id: 2,
			name: "Meja",
			variant: "Hijau",
			price: "Rp 900.000",
			category: "Meja",
			initialStock: 15,
			currentStock: 12,
			sold: "3X",
			image: "assets/assets/img/product-3.jpg",
		},
	]);

	const [showDropdown, setShowDropdown] = useState(false);
	const [selectedProductId, setSelectedProductId] = useState(null);
	const [showUpdateModal, setShowUpdateModal] = useState(false);
	const [newStock, setNewStock] = useState("");

	const handleClipboardClick = () => {
		Swal.fire({
			icon: "question",
			title: "Apakah Anda yakin ingin mengarsipkan produk ini ?",
			showCancelButton: true,
			confirmButtonText: "Ya, Arsipkan produk",
			cancelButtonText: "Batal",
		}).then((result) => {
			if (result.isConfirmed) {
				setIsLoading(true);
				setTimeout(() => {
					setIsLoading(false);
					Swal.fire({
						icon: "success",
						title: "Produk Berhasil diarsipkan!",
						showConfirmButton: true,
					});
				}, 1800);
			}
		});
	};

	const handleDeleteClick = () => {
		Swal.fire({
			icon: "question",
			title: "Apakah Anda yakin ingin menghapus produk ini ?",
			showCancelButton: true,
			confirmButtonText: "Ya, hapus produk",
			cancelButtonText: "Batal",
		}).then((result) => {
			if (result.isConfirmed) {
				setIsLoading(true);
				setTimeout(() => {
					setIsLoading(false);
					Swal.fire({
						icon: "success",
						title: "Produk Berhasil dihapus!",
						showConfirmButton: true,
					});
				}, 1800);
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
			<Card className="top-selling overflow-auto mt-4">
				<Card.Body className="pb-0">
					<div className="d-flex justify-content-between">
						<Card.Title>
							Produk Aktif <span></span>
						</Card.Title>
						<Card.Title>
							<span> {products.length} Produk </span>
						</Card.Title>
					</div>
						<Table bordered hover>
							<thead>
								<tr>
									<th className="text-center">
										Gambar
									</th>
									<th className="text-center">
										Produk
									</th>
									<th className="text-center">
										Varian
									</th>
									<th className="text-center">
										Harga
									</th>
									<th className="text-center">
										Kategori
									</th>
									<th className="text-center">
										Stok Awal
									</th>
									<th className="text-center">
										Stok Sekarang
									</th>
									<th className="text-center">
										Terjual
									</th>
									<th className="text-center">
										Aksi
									</th>
								</tr>
							</thead>
							<tbody>
								{products.map((product) => (
									<tr key={product.id}>
										<td className="text-center">
											<a href="#">
												<img
													src={
														product.image
													}
													alt={
														product.name
													}
													width="50"
												/>
											</a>
										</td>
										<td className="text-center fw-bold">
											{product.name}
										</td>
										<td className="text-center">
											{product.variant}
										</td>
										<td className="text-center">
											{product.price}
										</td>
										<td className="text-center">
											{product.category}
										</td>
										<td className="text-center">
											{product.initialStock}
										</td>
										<td className="text-center">
											{product.currentStock}
										</td>
										<td className="text-center">
											{product.sold}
										</td>
										<td className="text-start">
											<Button
												variant="link"
												onClick={
													handleUpdateClick
												}
												style={{
													textDecoration:
														"none",
												}}
											>
												Update Stok
											</Button>
											<br />
											<Link to="/edit-product">
												<Button
													variant="link"
													style={{
														textDecoration:
															"none",
													}}
												>
													Ubah
												</Button>
											</Link>
											<br />
											<Dropdown
												show={
													showDropdown &&
													selectedProductId ===
														product.id
												}
												onToggle={
													showDropdown
														? handleDropdownClose
														: () =>
																handleDropdownOpen(
																	product.id,
																)
												}
											>
												<Dropdown.Toggle
													variant="link"
													style={{
														textDecoration:
															"none",
													}}
												>
													Lainnya
												</Dropdown.Toggle>
												<Dropdown.Menu>
													<Dropdown.Item
														onClick={
															handleDeleteClick
														}
													>
														Hapus Produk
													</Dropdown.Item>
													<Dropdown.Item
														onClick={
															handleClipboardClick
														}
													>
														Arsipkan Produk
													</Dropdown.Item>
													<Dropdown.Item href="/DetailProdukDataran">
														Lihat Detail Produk
													</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
										</td>
									</tr>
								))}
							</tbody>
						</Table>
						{isLoading && <Contentloading />}

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
								1 - {products.length} of{" "}
								{products.length} items
							</div>
						</div>
					</Card.Footer>
				</Card.Body>
			</Card>

			<Modal
				show={showUpdateModal}
				onHide={handleCloseUpdateModal}
				centered
				backdrop="static"
			>
				<Modal.Header closeButton>
					<Modal.Title>Masukkan Stok Baru</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form.Group>
						<div className="d-flex justify-content-between">
						<p>Stok varian hijau saat ini :</p>
							<p className="text-muted">12 Produk </p>
						</div>
						<Form.Control
							type="number"
							placeholder="Stok Baru"
							value={newStock}
							onChange={(e) => setNewStock(e.target.value)}
							min="1" // Menambahkan atribut min untuk membatasi minimal angka 1
						/>
					</Form.Group>
					<div className="d-flex justify-content-between mt-5">
						<Button
							variant="outline-secondary"
							onClick={handleCloseUpdateModal}
						>
							Batal
						</Button>
						<Button
							variant="primary"
							onClick={handleUpdateStock}
						>
							Simpan
						</Button>
					</div>
				</Modal.Body>
			</Modal>
		</div>
	);
}

export default Contenttabelprodukdataranaktif;
