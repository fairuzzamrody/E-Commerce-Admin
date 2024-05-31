import React, { useEffect, useState } from "react";
import { Container, Table, Image, Button } from "react-bootstrap";

function Contentoutputhasilcetakdatatransaksikadeluarsadandibatalkan() {

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
    <div>
      <div>
			<Container fluid>
				<div className="text-center mt-4">
					<Image src="../gambar/logo.png" alt="Logo" fluid />
					<br />
				</div>
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

					<div className="mt-4">
						<h2 style={{ fontSize: "1.5rem" }} className="fw-bold">
							Data Transaksi Kadeluarsa & Dibatalkan.
						</h2>

            <h2 style={{ fontSize: "1.5rem" }} className="fw-bold mt-3">
							Bagian 1 : Data Transaksi Kadeluarsa
						</h2>
						<Table striped bordered hover className="mt-4 table-responsive">
							<thead>
								<tr>
									<th>Nama Pelanggan</th>
									<th>No Transaksi</th>
									<th>No Pesanan</th>
									<th>Waktu Pemesanan</th>
									<th>Jumlah Produk</th>
									<th>Status Pembayaran</th>
									<th> Follow Up</th>
									<th>Waktu Follow Up</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="text-center">Jhondoe 1</td>
									<td className="text-center">AR-F/TRX-20230815-0001</td>
									<td className="text-center">AR-F/ORD-20230815-0001</td>
									<td className="text-center">2023-09-25 19:30</td>
									<td className="text-center">2 Produk</td>
									<td className="text-center">-</td>
									<td className="text-center">Ya</td>
									<td className="text-center">2023-09-25 19:30</td>
								</tr>
								<tr>
									<td className="text-center">Jhondoe 2</td>
									<td className="text-center">AR-F/TRX-20230815-0003</td>
									<td className="text-center">AR-F/ORD-20230815-0003</td>
									<td className="text-center">2023-09-25 19:30</td>
									<td className="text-center">2 Produk</td>
									<td className="text-center">-</td>
									<td className="text-center">Ya</td>
									<td className="text-center">2023-09-25 19:30</td>
								</tr>
								<tr>
									<td className="text-center">Jhondoe 3</td>
									<td className="text-center">AR-F/TRX-20230815-0024</td>
									<td className="text-center">AR-F/ORD-20230815-0024</td>
									<td className="text-center">2023-09-25 19:30</td>
									<td className="text-center">2 Produk</td>
									<td className="text-center">-</td>
									<td className="text-center">Belum</td>
									<td className="text-center">-</td>
								</tr>
							</tbody>
						</Table>
					</div>
          <hr/>
          <h2 style={{ fontSize: "1.5rem" }} className="fw-bold mt-4">
							Bagian 2 : Data Transaksi Dibatalkan
						</h2>
						<Table striped bordered hover className="mt-4 table-responsive">
							<thead>
								<tr>
									<th>Nama Pelanggan</th>
									<th>No Transaksi</th>
									<th>No Pesanan</th>
									<th>Waktu Pemesanan</th>
									<th>Jumlah Produk</th>
									<th>Status Pembayaran</th>
									<th>Status Follow Up</th>
									<th>Waktu Follow Up</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="text-center">Jhondoe 1</td>
									<td className="text-center">AR-F/TRX-20230815-0031</td>
									<td className="text-center">AR-F/ORD-20230815-0031</td>
									<td className="text-center">2023-09-25 19:30</td>
									<td className="text-center">2 Produk</td>
									<td className="text-center">-</td>
									<td className="text-center">Sudah</td>
									<td className="text-center">2023-09-25 19:30</td>
								</tr>
								<tr>
									<td className="text-center">Jhondoe 2</td>
									<td className="text-center">AR-F/TRX-20230815-0058</td>
									<td className="text-center">AR-F/ORD-20230815-0058</td>
									<td className="text-center">2023-09-25 19:30</td>
									<td className="text-center">2 Produk</td>
									<td className="text-center">-</td>
									<td className="text-center">Ya</td>
									<td className="text-center">2023-09-25 19:30</td>
								</tr>
								<tr>
									<td className="text-center">Jhondoe 3</td>
									<td className="text-center">AR-F/TRX-20230815-0099</td>
									<td className="text-center">AR-F/ORD-20230815-0099</td>
									<td className="text-center">2023-09-25 19:30</td>
									<td className="text-center">2 Produk</td>
									<td className="text-center">-</td>
									<td className="text-center">Belum</td>
									<td className="text-center">-</td>
								</tr>
							</tbody>
						</Table>
          
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
		</div>
    </div>
  )
}

export default Contentoutputhasilcetakdatatransaksikadeluarsadandibatalkan