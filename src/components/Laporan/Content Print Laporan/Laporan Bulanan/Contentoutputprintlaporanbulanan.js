import React, { useEffect, useState } from "react";
import { Container, Image, Button, Card } from "react-bootstrap";

import Contentisilaporanbulananbagian1 from "./Isi Laporan Bulanan/Isi Laporan Bulanan Bagian 1/Contentisilaporanbulananbagian1";
import Contentisilaporanbulananbagian2 from "./Isi Laporan Bulanan/Isi Laporan Bulanan Bagian 2/Contentisilaporanbulananbagian2";
import Contentisilaporanbulananbagian3 from "./Isi Laporan Bulanan/Isi Laporan Bulanan Bagian 3/Contentisilaporanbulananbagian3";
import Contentisilaporanbulananbagian4 from "./Isi Laporan Bulanan/Isi Laporan Bulanan Bagian 4/Contentisilaporanbulananbagian4";
import ContentMainisilaporanbulananbagian5 from "./Isi Laporan Bulanan/Isi Laporan Bulanan Bagian 5/ContentMainisilaporanbulananbagian5";
import Contentisilaporanbulananbagian6 from "./Isi Laporan Bulanan/Isi Laporan Bulanan Bagian 6/Contentisilaporanbulananbagian6";

function Contentoutputprintlaporanbulanan() {
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
						<Card.Title>Laporan Bulanan </Card.Title>
						<Card.Title> Januari - Maret 2023</Card.Title>
					</div>
					{/* Bagian 1 : OverView */}
					<Contentisilaporanbulananbagian1 />

					{/* Bagian 2: Pendapatan) */}
					<Contentisilaporanbulananbagian2 />

					{/* Bagian 3: Produk Terlaris */}
					<Contentisilaporanbulananbagian3 />

					{/* Bagian 4: Kategori Terlaris */}
					<Contentisilaporanbulananbagian4 />

					{/* Bagian 5: Grafik */}
					<ContentMainisilaporanbulananbagian5 />

					{/* Bagian 6 : Data lengkap penjualan */}
					<Contentisilaporanbulananbagian6 />

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

export default Contentoutputprintlaporanbulanan;
