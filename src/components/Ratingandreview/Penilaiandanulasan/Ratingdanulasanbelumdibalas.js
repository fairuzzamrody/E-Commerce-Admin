import React, { useState } from "react";
import { Card, Modal, Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import Swal from "sweetalert2";
import Contentloading from "../../Loaders/Contentloading";

function Ratingdanulasanbelumdibalas() {
	const [showModal, setShowModal] = useState(false);
	const [selectedImage, setSelectedImage] = useState("");
	const [replyVisible, setReplyVisible] = useState(false);
	const [replyButtonText, setReplyButtonText] = useState("Balas Penilaian Ini");
	const [replyButtonVariant, setReplyButtonVariant] = useState("primary");
	const [deskripsiProduk, setDeskripsiProduk] = useState(""); // State untuk deskripsi produk
	const [loading, setLoading] = useState(false);

	const openModal = (imageSrc) => {
		setSelectedImage(imageSrc);
		setShowModal(true);
	};

	const closeModal = () => {
		setSelectedImage("");
		setShowModal(false);
	};

	const toggleReply = () => {
		setReplyVisible(!replyVisible);
		setReplyButtonText(
			replyVisible ? "Balas Penilaian Ini" : "Batal Balas Penilaian Ini"
		);
		setReplyButtonVariant(replyVisible ? "primary" : "danger");
	};

	const handleSendReply = () => {
		const textareaValue = document.getElementById("replyTextarea").value;
		if (textareaValue.length < 50) {
			Swal.fire(
				"Perhatian!",
				"Balasan minimal harus memiliki 50 karakter.",
				"warning"
			);
		} else {
			Swal.fire({
				title: "Apakah Anda Ingin Mengirim Balasan?",
				text: "Anda hanya dapat mengirim balasan ini satu kali saja.",
				showCancelButton: true,
				confirmButtonText: "Iya, Kirimkan",
				cancelButtonText: "Batal Kirim",
				reverseButtons: true
			}).then((result) => {
				if (result.isConfirmed) {
					// Tunda loading selama 1,5 detik
					setLoading(true);
					setTimeout(() => {
						setLoading(false);
						Swal.fire({
							icon: "success",
							title: "Berhasil!",
							text: "Balasan Anda telah dikirim.",
							timer: 2000,
							timerProgressBar: true
						});
					}, 1500);
				}
			});
		}
	};

	const handleDeskripsiProdukChange = (e) => {
		const inputValue = e.target.value;
		if (inputValue.length <= 250) {
			setDeskripsiProduk(inputValue);
		}
	};

	return (
		<div>
			<Card>
				<Card.Body>
					<div className="d-flex justify-content-between">
						<Card.Title>Jhon Doe 1</Card.Title>
						<Card.Title>
							<span style={{ fontSize: "0.78rem" }}>2023-08-02 23:59:10</span>
						</Card.Title>
					</div>
					<p className="fw-bold">Sofa Klasik Eropa</p>
					<div className="d-flex">
						<img
							src="../assets/assets/img/product-3.jpg"
							style={{ 
								maxHeight: "130px",
								borderRadius: "10px"
							}}
							alt="Gambar produk"
						/>
						<div
							className="d-flex flex-column justify-content-center align-items-start ml-3"
							style={{ marginTop: "-9px"}}
						>
							<div className="star-rating">
								<FaStar color="gold" />
								<FaStar color="gold" />
								<FaStar color="gold" />
								<FaStar color="gold" />
								<FaStar color="gold" />
							</div>
							<p className="mt-1 text-justify">
								There are many variations of passages of Lorem Ipsum available,
								but the majority have suffered alteration in some form, by
								injected humour, or randomised words which don't look even
								slightly believable.
							</p>
						</div>
					</div>

					{/* Start Gambar Pendukung Ulasan */}

					<div className="d-flex justify-content-end">
						<div className="d-flex flex-row">
							<img
								src="../assets/assets/img/card.jpg"
								style={{
									maxWidth: "6rem",
									cursor: "pointer",
									marginRight: "10px",
									marginLeft: "10px",
									borderRadius: "5px"
								}}
								alt="Gambar Pendukung Ulasan"
								onClick={() => openModal("../assets/assets/img/card.jpg")}
							/>
							<img
								src="../assets/assets/img/card.jpg"
								style={{
									maxWidth: "6rem",
									cursor: "pointer",
									marginRight: "10px",
									borderRadius: "5px"
								}}
								alt="Gambar Pendukung Ulasan"
								onClick={() => openModal("../assets/assets/img/card.jpg")}
							/>
							<img
								src="../assets/assets/img/card.jpg"
								style={{
									maxWidth: "6rem",
									cursor: "pointer",
									borderRadius: "5px"
								}}
								alt="Gambar Pendukung Ulasan"
								onClick={() => openModal("../assets/assets/img/card.jpg")}
							/>
						</div>
					</div>
					{/* End gambar pendukung ulasan */}
				</Card.Body>
				<Card.Footer>
					<div className="d-flex justify-content-end">
						<Button onClick={toggleReply} variant={replyButtonVariant}>
							{replyButtonText}
						</Button>
					</div>

					{replyVisible && (
						<div>
							<textarea
								id="replyTextarea"
								className="mt-4 w-100"
								placeholder="Masukkan tanggapan anda...... (Min 50 Karakter)"
								style={{ borderRadius: "5px" }}
								rows="4"
								cols="50"
								maxLength="250"
								value={deskripsiProduk}
								onChange={handleDeskripsiProdukChange}
							/>
							<div className="d-flex justify-content-end">
								<span className="text-muted">
									{deskripsiProduk.length} / 250
								</span>
							</div>
							<div className="d-flex justify-content-end mt-2">
								<Button onClick={handleSendReply} disabled={loading}>
									{loading ? <Contentloading /> : "Kirim Balasan"} <i class="bi bi-arrow-right"></i>
								</Button>
							</div>
						</div>
					)}
				</Card.Footer>
			</Card>

			<Modal show={showModal} onHide={closeModal} centered backdrop="static">
				<Modal.Header closeButton>
					<Modal.Title>Gambar dari pelanggan</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<img
						src={selectedImage}
						style={{ width: "100%", borderRadius: "10px" }}
						alt="Gambar Lebih Besar"
					/>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={closeModal}>
						Tutup
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default Ratingdanulasanbelumdibalas;
