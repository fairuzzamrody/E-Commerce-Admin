import React, { useEffect, useState } from "react";
import { Container, Table, Image, Button } from "react-bootstrap";

function Contentoutputhasilcetakdatatransaksisudahbayar() {
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
							Data Transaksi Sudah Dibayar.
						</h2>
						<Table striped bordered hover className="mt-4 table-responsive">
							<thead>
								<tr>
									<th>Nama Pelanggan</th>
									<th>No Transaksi</th>
									<th>No Pesanan</th>
									<th>Waktu Pemesanan</th>
									<th>Jumlah Produk</th>
                  <th>Jumlah Transaksi</th>
									<th>Status Pembayaran</th>
                  <th>Waktu Pembayaran</th>
                  <th>Metode Pembayaran</th>

								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="text-center">Jhondoe 1</td>
									<td className="text-center">AR-F/TRX-20230815-0002</td>
									<td className="text-center">AR-F/ORD-20230815-0002</td>
									<td className="text-center">2023-09-25 19:30</td>
									<td className="text-center">2 Produk</td>
                  <td className="text-center">Rp 1.500.000</td>
									<td className="text-center">Lunas</td>
                  <td className="text-center">2023-09-25 19:30	</td>
									<td className="text-center">BCA</td>

								</tr>
								<tr>
									<td className="text-center">Jhondoe 2</td>
									<td className="text-center">AR-F/TRX-20230815-0002</td>
									<td className="text-center">AR-F/ORD-20230815-0002</td>
									<td className="text-center">2023-09-25 19:30</td>
									<td className="text-center">2 Produk</td>
                  <td className="text-center">Rp 1.500.000</td>
									<td className="text-center">Lunas</td>
                  <td className="text-center">2023-09-25 19:30	</td>
									<td className="text-center">BCA</td>

								</tr>
								<tr>
									<td className="text-center">Jhondoe 3</td>
									<td className="text-center">AR-F/TRX-20230815-0002</td>
									<td className="text-center">AR-F/ORD-20230815-0002</td>
									<td className="text-center">2023-09-25 19:30</td>
									<td className="text-center">2 Produk</td>
                  <td className="text-center">Rp 1.500.000</td>
									<td className="text-center">Lunas</td>
                  <td className="text-center">2023-09-25 19:30	</td>
									<td className="text-center">BCA</td>

								</tr>
							</tbody>
						</Table>
					</div>
					<p>
						<b>Dicetak Oleh: </b>Admin 2{" "}
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

export default Contentoutputhasilcetakdatatransaksisudahbayar