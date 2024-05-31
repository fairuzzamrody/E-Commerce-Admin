import React, { useEffect, useState } from "react";
import { Container, Image, Button, Card } from "react-bootstrap";
import ContentisiLaporanTahunanBagian1 from "./Isi Laporan Tahunan/Isi Laporan Tahunan Bagian 1/ContentisiLaporanTahunanBagian1";
import ContentisiLaporanTahunanBagian2 from "./Isi Laporan Tahunan/Isi Laporan Tahunan Bagian 2/ContentisiLaporanTahunanBagian2";
import ContentisiLaporanTahunanBagian3 from "./Isi Laporan Tahunan/Isi Laporan Tahunan Bagian 3/ContentisiLaporanTahunanBagian3";
import ContentisiLaporanTahunanBagian4 from "./Isi Laporan Tahunan/Isi Laporan Tahunan Bagian 4/ContentisiLaporanTahunanBagian4";
import ContentMainisiLaporanTahunanBagian5 from "./Isi Laporan Tahunan/Isi Laporan Tahunan Bagian 5/ContentMainisiLaporanTahunanBagian5";
import ContentisiLaporanTahunanBagian6 from "./Isi Laporan Tahunan/Isi Laporan Tahunan Bagian 6/ContentisiLaporanTahunanBagian6";

function Contentoutputprintlaporantahunan() {
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
						<Card.Title>Laporan Tahunan</Card.Title>
						<Card.Title>Tahun 2023</Card.Title>
					</div>
					{/* Bagian 1 : OverView */}
            <ContentisiLaporanTahunanBagian1 />

					{/* Bagian 2: Pendapatan) */}
            <ContentisiLaporanTahunanBagian2 />

					{/* Bagian 3: Produk Terlaris */}
            <ContentisiLaporanTahunanBagian3 />

					{/* Bagian 4: Kategori Terlaris */}
            <ContentisiLaporanTahunanBagian4 />

					{/* Bagian 5:  Grafik */}
            <ContentMainisiLaporanTahunanBagian5 />

					{/* Bagian 6 : Data lengkap penjualan */}
            <ContentisiLaporanTahunanBagian6 />

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

export default Contentoutputprintlaporantahunan