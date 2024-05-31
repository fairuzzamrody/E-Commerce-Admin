import React, { useState, useEffect } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Swal from "sweetalert2";

function ContentInformasiProdukPC() {
	const [isInputGroupOpen, setIsInputGroupOpen] = useState(false);
	const [pakaiOngkir, setPakaiOngkir] = useState("");
	const [ongkosKirim, setOngkosKirim] = useState("");
	const [isOngkosKirimDisabled, setIsOngkosKirimDisabled] = useState(true);
	const [ongkosKirimPlaceholder, setOngkosKirimPlaceholder] = useState(
		"Pilih Opsi terlebih dahulu",
	);
	const [stokProduk, setStokProduk] = useState(1); // Nilai default stok produk
	const [deskripsiProduk, setDeskripsiProduk] = useState(""); // State untuk deskripsi produk

	const toggleInputGroup = () => {
		setIsInputGroupOpen(!isInputGroupOpen);
	};

	const handlePakaiOngkirChange = (e) => {
		const value = e.target.value;
		setPakaiOngkir(value);
		if (value === "tidak") {
			setOngkosKirim("");
			setIsOngkosKirimDisabled(true);
			setOngkosKirimPlaceholder("Gratis Ongkos Kirim");
		} else {
			setIsOngkosKirimDisabled(false);
			setOngkosKirimPlaceholder("Contoh 5000");
		}
	};

	const handleOngkosKirimChange = (e) => {
		if (pakaiOngkir === "tidak") {
			return;
		}
		setOngkosKirim(e.target.value);
	};

	useEffect(() => {
		if (pakaiOngkir === "") {
			setOngkosKirimPlaceholder("Pilih Opsi terlebih dahulu");
		}
	}, [pakaiOngkir]);

	const handleStokProdukChange = (e) => {
		const inputValue = e.target.value;
		const newStokProduk = parseInt(inputValue, 10);

		// Cek apakah nilai tidak valid atau bukan angka
		if (!isNaN(newStokProduk) && newStokProduk <= 0) {
			Swal.fire({
				icon: "error",
				title: "Stok Produk Tidak Valid",
				text: "Tidak boleh mengisi stok dibawah angka 1.",
			}).then(() => {
				// Kosongkan Form Control setelah SweetAlert muncul
				e.target.value = "";
			});
		} else {
			// Nilai stok produk valid atau Form Control kosong, simpan dalam state
			setStokProduk(inputValue);
		}
	};

	const handleDeskripsiProdukChange = (e) => {
		const inputValue = e.target.value;
		setDeskripsiProduk(inputValue);
	};

	return (
		<div>
			<Form>
				<Form.Group controlId="namaProduk" className="mb-3">
					<Form.Label>Nama Produk</Form.Label>
					<Form.Control type="text" placeholder="Masukkan nama produk" />
				</Form.Group>
				<div className="d-flex justify-content-between mb-3">
					<Form.Group controlId="subNamaproduk" className="w-50 pr-2">
						<Form.Label>Sub Nama Produk</Form.Label>
						<Form.Control
							type="text"
							placeholder="Masukkan sub nama produk"
							required
						/>
					</Form.Group>
					<Form.Group controlId="stokkategori" className="w-50 pl-2">
						<Form.Label>Total Stok Produk</Form.Label>
						<Form.Control
							type="number"
							style={{
								WebkitAppearance: "none",
								MozAppearance: "textfield",
								appearance: "textfield",
							}}
							placeholder="Contoh 20"
							required
							onChange={handleStokProdukChange}
						/>
					</Form.Group>
				</div>

				{/* Disable harga produk ketika user mengAKtifkan Varian Produk */}
				<div className="d-flex justify-content-between mb-3">
					<Form.Group controlId="hargaProduk" className="w-50 pr-2">
						<Form.Label>Harga Produk</Form.Label>
						<Form.Control
							type="text"
							placeholder="Masukkan harga produk"
							required
						/>
					</Form.Group>
					<Form.Group controlId="kateGoriproduk" className="w-50 pl-2">
						<Form.Label>Kategori</Form.Label>
						<InputGroup>
							<Form.Control
								as="select"
								placeholder="Pilih kategori"
								onClick={toggleInputGroup}
								aria-expanded={isInputGroupOpen}
								required
							>
								<option value="default" disabled>
									Pilih kategori
								</option>
								<option value="meja">Meja</option>
								<option value="kursi">Kursi</option>
								<option value="mejaDapur">Lemari</option>
							</Form.Control>
							<div className="input-group-append">
								<InputGroup.Text onClick={toggleInputGroup}>
									{isInputGroupOpen ? (
										<FaChevronUp />
									) : (
										<FaChevronDown />
									)}
								</InputGroup.Text>
							</div>
						</InputGroup>
					</Form.Group>
				</div>
				<hr />
				<div className="d-flex justify-content-between mb-3">
					<Form.Group controlId="pakaiOngkir" className="w-50 pr-2">
						<Form.Label>Pakai Ongkos Kirim?</Form.Label>
						<Form.Control
							as="select"
							value={pakaiOngkir}
							onChange={handlePakaiOngkirChange}
						>
							<option value="" disabled>
								Pilih opsi
							</option>
							<option value="ya">Ya</option>
							<option value="tidak">Tidak (Free Ongkir)</option>
						</Form.Control>
					</Form.Group>
					<Form.Group controlId="ongkosKirim" className="w-50 pl-2">
						<Form.Label>Ongkos Kirim</Form.Label>
						<Form.Control
							type="text"
							placeholder={ongkosKirimPlaceholder}
							value={ongkosKirim}
							onChange={handleOngkosKirimChange}
							disabled={isOngkosKirimDisabled}
						/>
					</Form.Group>
				</div>
				<Form.Group controlId="deskripsiProduk" className="mb-3">
					<Form.Label>Deskripsi Produk</Form.Label>
					<Form.Control
						as="textarea"
						rows={4}
						placeholder="Masukkan deskripsi produk....."
						required
						maxLength={300}
						value={deskripsiProduk}
						onChange={handleDeskripsiProdukChange}
					/>
					<div className="d-flex justify-content-end">
						<span className="text-muted">
							{deskripsiProduk.length} / 300
						</span>
					</div>
				</Form.Group>
			</Form>
		</div>
	);
}

export default ContentInformasiProdukPC;
