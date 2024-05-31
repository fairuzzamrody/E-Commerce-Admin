import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import ContentLivePreviewARDataran from "../../Isi Konten Tambah Produk/Content Tambah Augmented Reality Dataran/ContentLivePreviewARDataran";
import Contentloading from "../../../../Loaders/Contentloading";

function ContentAugmentedRealityDataran() {
	const [linkARAndroid, setLinkARAndroid] = useState("");
	const [linkARIOS, setLinkARIOS] = useState("");
	const [linkSkyBox, setLinkSkyBox] = useState("");
	const [showLivePreview, setShowLivePreview] = useState(false); // State untuk menampilkan Live Preview
	const [loading, setLoading] = useState(false); // State untuk menampilkan loading

	const handleLinkARAndroidChange = (e) => {
		setLinkARAndroid(e.target.value);
	};

	const handleLinkARIOSChange = (e) => {
		setLinkARIOS(e.target.value);
	};

	const handleLinkSkyBoxChange = (e) => {
		setLinkSkyBox(e.target.value);
	};

	const handleLivePreviewClick = () => {
		// Menampilkan loading selama 1 detik sebelum menampilkan Live Preview
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			setShowLivePreview(!showLivePreview);
		}, 1000);
	};

	return (
		<div>
			<Form.Group controlId="linkARAndroid">
				<Form.Label>Link AR Android <b>(SRC)</b></Form.Label>
				<div style={{ display: "flex" }}>
					<Form.Control
						type="text"
						placeholder="Masukkan Link Untuk Android (Format .glb)*"
						value={linkARAndroid}
						onChange={handleLinkARAndroidChange}
						className="mb-3 me-2" // Menambahkan margin di kanan form
						required
					/>
					{linkARAndroid.trim() ? (
						linkARAndroid.trim().toLowerCase().includes("glb") ? (
							// Jika input mengandung "glb", tampilkan ikon "check"
							<i
								className="bi bi-check-lg"
								style={{
									fontSize: "20px",
									marginLeft: "10px",
									color: "green",
								}}
							></i>
						) : (
							linkARAndroid.trim().toLowerCase().includes("usdz") && (
								// Jika input mengandung "usdz", tampilkan ikon "x"
								<i
									className="bi bi-exclamation-triangle"
									style={{
										fontSize: "20px",
										marginLeft: "10px",
										color: "red",
									}}
								></i>
							)
						)
					) : null}
				</div>
				{linkARAndroid.trim() &&
					linkARAndroid.trim().toLowerCase().includes("usdz") && (
						<p style={{ color: "red" }}>
							Maaf, tampaknya Anda salah memasukkan link. Format file
							yang kompatibel dengan Android adalah ".glb"
						</p>
					)}
			</Form.Group>
			<Form.Group controlId="linkARiOS">
				<Form.Label>Link AR iOS <b>(IOS-SRC)</b></Form.Label>
				<div style={{ display: "flex" }}>
					<Form.Control
						type="text"
						placeholder="Masukkan Link Untuk iOS (Format .usdz)*"
						value={linkARIOS}
						onChange={handleLinkARIOSChange}
						className="mb-3 me-2" // Menambahkan margin di kanan form
						required
					/>
					{linkARIOS.trim() ? (
						linkARIOS.trim().toLowerCase().includes("usdz") ? (
							// Jika input mengandung "usdz", tampilkan ikon "check"
							<i
								class="bi bi-check-lg"
								style={{
									fontSize: "20px",
									marginLeft: "10px",
									color: "green",
								}}
							></i>
						) : (
							// Jika input tidak mengandung "usdz", tampilkan ikon "x"
							<>
								<i
									class="bi bi-exclamation-triangle"
									style={{
										fontSize: "20px",
										marginLeft: "10px",
										color: "red",
									}}
								></i>
							</>
						)
					) : null}
				</div>
				{linkARIOS.trim() &&
					!linkARIOS.trim().toLowerCase().includes("usdz") && (
						<p style={{ color: "red" }}>
							Maaf, tampaknya Anda salah memasukkan link. Format file
							yang kompatibel dengan iOS adalah ".usdz"
						</p>
					)}
			</Form.Group>
			<Form.Group controlId="linkSkyBox">
				<Form.Label>Link Skybox <b>(Opsional)</b></Form.Label>
				<div style={{ display: "flex" }}>
					<Form.Control
						type="text"
						placeholder="Masukkan link asset SkyBox berformat .jpg dan .png (opsional)"
						value={linkSkyBox}
						onChange={handleLinkSkyBoxChange}
						className="mb-3"
					/>
					{linkSkyBox.trim() &&
						(linkSkyBox.trim().toLowerCase().includes("jpg") ||
						linkSkyBox.trim().toLowerCase().includes("png") ||
						linkSkyBox.trim().toLowerCase().includes("jpeg") ? (
							// Jika input mengandung "jpg", "png", atau "jpeg", tampilkan ikon "check"
							<i
								class="bi bi-check-lg"
								style={{
									fontSize: "20px",
									marginLeft: "10px",
									color: "green",
								}}
							></i>
						) : (
							// Jika input tidak mengandung format yang diperbolehkan, tampilkan ikon "x"
							<i
								class="bi bi-exclamation-triangle"
								style={{
									fontSize: "20px",
									marginLeft: "10px",
									color: "red",
								}}
							></i>
						))}
				</div>
				{linkSkyBox.trim() &&
					!(
						linkSkyBox.trim().toLowerCase().includes("jpg") ||
						linkSkyBox.trim().toLowerCase().includes("png") ||
						linkSkyBox.trim().toLowerCase().includes("jpeg")
					) && (
						// Menampilkan pesan error tepat di bawah form control jika format tidak sesuai
						<p style={{ color: "red", marginTop: "10px" }}>
							Maaf, format file yang Anda masukkan tidak didukung. Format
							yang didukung adalah .jpg, .png, .jpeg.
						</p>
					)}
			</Form.Group>
			
			<div className="d-flex justify-content-end mb-3">
				{/* Tombol Live Preview 3D */}
				<Button onClick={handleLivePreviewClick}>
					{showLivePreview
						? "Tutup Live Preview 3D"
						: "Lihat Live Preview 3D"}
				</Button>
				{loading && <Contentloading />}{" "}
				{/* Menampilkan loading jika loading bernilai true */}
			</div>
			{/* Tampilkan komponen ContentLivePreviewARDataran jika showLivePreview bernilai true */}
			{showLivePreview && <ContentLivePreviewARDataran />}
		</div>
	);
}

export default ContentAugmentedRealityDataran;
