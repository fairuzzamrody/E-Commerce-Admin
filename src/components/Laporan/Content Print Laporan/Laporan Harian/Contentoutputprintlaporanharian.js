import React, { useEffect, useState } from "react";
import { Container, Image, Button, Card } from "react-bootstrap";
import Contentisilaporanharianbagian1 from "./Isi Laporan Harian/Isi Laporan Harian Bagian 1/Contentisilaporanharianbagian1";
import Contentisilaporanharianbagian2 from "./Isi Laporan Harian/Isi Laporan Harian Bagian 2/Contentisilaporanharianbagian2";
import Contentisilaporanharianbagian3 from "./Isi Laporan Harian/Isi Laporan Harian Bagian 3/Contentisilaporanharianbagian3";
import Contentisilaporanharianbagian4 from "./Isi Laporan Harian/Isi Laporan Harian Bagian 4/Contentisilaporanharianbagian4";
import ContentMainisiLaporanHarianBagian5 from "./Isi Laporan Harian/Isi Laporan Harian Bagian 5/ContentMainisiLaporanHarianBagian5";
import Contentisilaporanharianbagian6 from "./Isi Laporan Harian/Isi Laporan Harian Bagian 6/Contentisilaporanharianbagian6";

function Contentoutputprintlaporanharian() {
	const [printWindowOpened, setPrintWindowOpened] = useState(false);

	useEffect(() => {
		if (!printWindowOpened) {
			setPrintWindowOpened(true);
			window.print();
		}

		// Menonaktifkan fitur inspect element
		document.addEventListener("contextmenu", preventRightClick);
		document.addEventListener("keydown", preventInspectElement);

		return () => {
			// Menghapus listener saat komponen dibongkar
			document.removeEventListener("contextmenu", preventRightClick);
			document.removeEventListener("keydown", preventInspectElement);
		};
	}, [printWindowOpened]);

	// Fungsi untuk mencegah klik kanan
	const preventRightClick = (e) => {
		e.preventDefault();
	};

	// Fungsi untuk mencegah kombinasi tombol yang digunakan untuk inspect element
	const preventInspectElement = (e) => {
		if (
			(e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
			(e.ctrlKey && e.shiftKey && e.keyCode === 67)
		) {
			// Ctrl+Shift+C
			e.preventDefault();
		}
	};

	// Mendapatkan waktu saat ini
	const currentTime = new Date().toLocaleString();

	return (
		<Container fluid>
			<div className="text-center mt-4">
				<Image src="../gambar/logo.png" alt="Logo" fluid />
			</div>
			<Container>
				<Container>
					<style>
						{`
          @media print {
            .print-button {
              display: none;
            }
          }
        `}
					</style>
					<hr />
					<div className="d-flex justify-content-between">
						<Card.Title>Laporan Harian </Card.Title>
						<Card.Title> 29 - 30 Agustus 2023</Card.Title>
					</div>
					{/* Bagian 1 : OverView */}
					<Contentisilaporanharianbagian1 />

					{/* Bagian 2: Pendapatan) */}
					<Contentisilaporanharianbagian2 />

					{/* Bagian 3: Produk Terlaris */}
					<Contentisilaporanharianbagian3 />

					{/* Bagian 4: Kategori Terlaris */}
					<Contentisilaporanharianbagian4 />

					{/* Bagian 5: Kategori Terlaris */}
					<ContentMainisiLaporanHarianBagian5 />

					{/* Bagian 6 : Data lengkap penjualan */}
					<Contentisilaporanharianbagian6 />

					<p>
						<b>Dicetak Oleh: </b>Admin 1{" "}
					</p>
					<p>
						<b>Waktu dicetak: </b>
						{currentTime}{" "}
					</p>

					<div className="d-flex justify-content-end">
						<Button
							className="mb-5 mt-5 print-button"
							onClick={() => window.print()}
						>
							Cetak Halaman ini{" "}
							<i className="bi bi-printer" style={{ marginLeft: "10px" }}></i>
						</Button>
					</div>
				</Container>
			</Container>
		</Container>
	);
}

export default Contentoutputprintlaporanharian;
