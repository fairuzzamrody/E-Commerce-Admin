import React, { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { FaTimes } from "react-icons/fa";
import Contentloading from "../../../../Loaders/Contentloading";

function ContentGambarProdukDinding() {
	const [gambarThumbnail, setGambarThumbnail] = useState(null);
	const [gambarPendukungFiles, setGambarPendukungFiles] = useState([]);
	const [showThumbnailModal, setShowThumbnailModal] = useState(false);
	const [showEnlargeModal, setShowEnlargeModal] = useState(false);
	const [enlargedImageUrl, setEnlargedImageUrl] = useState("");
	const maxThumbnailCount = 1; // Batasan jumlah gambar thumbnail
	const maxPendukungCount = 10; // Batasan jumlah gambar pendukung
	const [isLoading, setIsLoading] = useState(false); // Tambahkan state untuk menampilkan loading

	const handleGambarThumbnailChange = (e) => {
		const file = e.target.files[0];
		setGambarThumbnail(file);
	};

	const handleGambarPendukungChange = (e) => {
		const selectedFiles = e.target.files;
		const totalFiles = selectedFiles.length + gambarPendukungFiles.length;

		if (totalFiles > maxPendukungCount) {
			Swal.fire({
				icon: "warning",
				title: "Peringatan",
				text: `Batas maksimal ${maxPendukungCount} gambar pendukung telah tercapai!`,
			});
		} else {
			const remainingSpace = maxPendukungCount - gambarPendukungFiles.length;
			const filesToAdd = Array.from(selectedFiles).slice(0, remainingSpace);
			setGambarPendukungFiles([...gambarPendukungFiles, ...filesToAdd]);

			if (selectedFiles.length > remainingSpace) {
				Swal.fire({
					icon: "info",
					title: "Peringatan",
					text: `Hanya ${remainingSpace} gambar pendukung yang ditambahkan karena batas maksimum tercapai!`,
				});
			}
		}
	};

	const toggleModal = () => {
		setShowThumbnailModal(!showThumbnailModal);
	};

	const toggleEnlargeModal = (image) => {
		setEnlargedImageUrl(URL.createObjectURL(image));
		setShowEnlargeModal(!showEnlargeModal);
	};

	const removeImage = () => {
		setGambarThumbnail(null);
	};

	const removePendukungImage = (index) => {
		setIsLoading(true); // Set state isLoading menjadi true saat tombol di klik
		setTimeout(() => {
			const updatedFiles = [...gambarPendukungFiles];
			updatedFiles.splice(index, 1);
			setGambarPendukungFiles(updatedFiles);
			setIsLoading(false); // Setelah 1 detik, set state isLoading menjadi false
		}, 1000);
	};

	return (
		<div>
			<Form.Group controlId="gambarThumbnail" className="mb-4">
				<Form.Label>Gambar Thumbnail</Form.Label>
				<Form.Control
					type="file"
					onChange={handleGambarThumbnailChange}
					required
				/>
				<figcaption className="blockquote-footer mt-2">
					Sisa gambar Thumbnail yang dapat diupload (
					{maxThumbnailCount - (gambarThumbnail ? 1 : 0)})
				</figcaption>
				{gambarThumbnail && (
					<div className="position-relative">
						<img
							src={URL.createObjectURL(gambarThumbnail)}
							alt="Preview Gambar Thumbnail"
							style={{
								maxWidth: "30%",
								cursor: "pointer",
								borderRadius: "10px",
								overflow: "hidden",
								marginTop: "10px",
							}}
							onClick={toggleModal}
						/>
						<button
							className="btn btn-danger btn-sm"
							style={{
								position: "absolute",
								top: "30px",
								left: "218px",
								zIndex: 1,
							}}
							onClick={removeImage}
						>
							<FaTimes />
						</button>
						<Modal
							show={showThumbnailModal}
							onHide={toggleModal}
							centered
							backdrop="static"
						>
							<Modal.Header closeButton>
								<Modal.Title>Gambar Thumbnail</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								<img
									src={URL.createObjectURL(gambarThumbnail)}
									alt="Gambar Thumbnail"
									style={{ width: "100%", borderRadius: "10px" }}
								/>
							</Modal.Body>
							<Modal.Footer className="d-flex justify-content-between">
								<Button variant="outline-secondary" onClick={toggleModal}>
									Tutup
								</Button>
								<Button
									variant="danger"
									onClick={() => {
										removeImage();
										toggleModal();
									}}
								>
									Hapus
								</Button>
							</Modal.Footer>
						</Modal>
					</div>
				)}
			</Form.Group>
			<Form.Group controlId="gambarPendukung" className="mb-1">
				<Form.Label>Gambar Pendukung (Maksimal 10)</Form.Label>
				<Form.Control
					type="file"
					multiple
					onChange={handleGambarPendukungChange}
					required
				/>
				<figcaption className="blockquote-footer mt-2">
					Sisa gambar pendukung yang dapat diupload (
					{maxPendukungCount - gambarPendukungFiles.length})
				</figcaption>
				<div className="d-flex flex-wrap">
					{gambarPendukungFiles.map((image, index) => (
						<div
							key={index}
							className="mr-2 mb-4"
							style={{
								maxWidth: "19%",
								cursor: "pointer",
								objectFit: "cover",
								position: "relative",
								marginTop: "-10px",
							}}
						>
							<img
								src={URL.createObjectURL(image)}
								alt={`Gambar Pendukung ${index + 1}`}
								style={{
									width: "100%",
									height: "100%",
									objectFit: "cover", // Properti untuk menjaga ukuran gambar
									borderRadius: "10px",
								}}
								onClick={() => toggleEnlargeModal(image)}
							/>
							<button
								className="btn btn-danger btn-sm"
								style={{
									position: "absolute",
									top: "10px",
									right: "8px",
									zIndex: 1,
								}}
								onClick={() => removePendukungImage(index)}
							>
								{isLoading ? <Contentloading /> : <FaTimes />}{" "}
								{/* Tampilkan loading jika isLoading true */}
							</button>

							{/* modal 2 */}
							<Modal
								show={showEnlargeModal}
								onHide={() => setShowEnlargeModal(false)}
								centered
								backdrop="static"
							>
								<Modal.Header className="fw-bold">
								Gambar pendukung ke {index + 1} {/* Ubah di sini */}
								</Modal.Header>
								<Modal.Body>
									<img
										src={enlargedImageUrl}
										alt="Gambar Pendukung Diperbesar"
										style={{ width: "100%", borderRadius: "10px" }}
									/>
								</Modal.Body>
								<Modal.Footer className="d-flex justify-content-between">
									<Button
										variant="outline-secondary"
										onClick={() => setShowEnlargeModal(false)}
									>
										Tutup
									</Button>
									<Button
										variant="danger"
										onClick={() => {
											removePendukungImage(index);
											setShowEnlargeModal(false);
										}}
									>
										Hapus
									</Button>
								</Modal.Footer>
							</Modal>
						</div>
					))}
				</div>
			</Form.Group>
		</div>
	);
}
export default ContentGambarProdukDinding;
