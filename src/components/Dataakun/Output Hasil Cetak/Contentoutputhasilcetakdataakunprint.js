import React, { useEffect, useState } from "react";
import { Container, Table, Image, Button } from "react-bootstrap";

function ContentOutputHasilCetakDataAkunPrint() {
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

					<div className="mt-4">
						<h2 style={{ fontSize: "1.5rem" }} className="fw-bold">
							Bagian 1: Data Admin
						</h2>
						<Table striped bordered hover responsive className="mx-auto">
							<thead>
								<tr>
									<th className="text-center">Nama</th>
									<th className="text-center">Email</th>
									<th className="text-center">Terakhir Login</th>
									<th className="text-center">Waktu Ditambahkan</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="text-center">Admin 1</td>
									<td className="text-center">admin1@example.com</td>
									<td className="text-center">2023-09-25 19:30</td>
									<td className="text-center">-</td>
								</tr>
								<tr>
									<td className="text-center">Admin 2</td>
									<td className="text-center">admin2@example.com</td>
									<td className="text-center">2023-09-25 20:15</td>
									<td className="text-center">2023-09-02 09:45</td>
								</tr>
								<tr>
									<td className="text-center">Admin 3</td>
									<td className="text-center">admin3@example.com</td>
									<td className="text-center">2023-09-25 21:45</td>
									<td className="text-center">2023-09-03 10:30</td>
								</tr>
							</tbody>
						</Table>
					</div>

					<div className="mt-4">
						<h2 style={{ fontSize: "1.5rem" }} className="fw-bold">
							Bagian 2: Data Pelanggan Aktif
						</h2>
						<Table striped bordered hover responsive className="mx-auto">
							<thead>
								<tr>
									<th className="text-center">Nama</th>
									<th className="text-center">Email</th>
									<th className="text-center">Waktu Registrasi</th>
									<th className="text-center">Terakhir Login</th>
									<th className="text-center">
										Pelanggaran yang mulai dilakukan
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="text-center">Pelanggan 1</td>
									<td className="text-center">pelanggan1@email.com</td>
									<td className="text-center">2023-08-15 14:00</td>
									<td className="text-center">2023-09-25 12:30</td>
									<td className="text-center">Membatalkan pesanan 3x</td>
								</tr>
								<tr>
									<td className="text-center">Pelanggan 2</td>
									<td className="text-center">pelanggan2@email.com</td>
									<td className="text-center">2023-08-20 10:30</td>
									<td className="text-center">2023-09-25 14:45</td>
									<td className="text-center">Tidak membayar pesanan 4x</td>
								</tr>
								<tr>
									<td className="text-center">Pelanggan 3</td>
									<td className="text-center">pelanggan3@email.com</td>
									<td className="text-center">2023-08-25 09:15</td>
									<td className="text-center">2023-09-25 16:00</td>
									<td className="text-center">-</td>
								</tr>
							</tbody>
						</Table>
					</div>

					<div className="mt-4">
						<h2 style={{ fontSize: "1.5rem" }} className="fw-bold">
							Bagian 3: Pelanggan Yang Dibekukan
						</h2>
						<Table striped bordered hover responsive className="mx-auto">
							<thead>
								<tr>
									<th className="text-center">Nama</th>
									<th className="text-center">Email</th>
									<th className="text-center">Alasan dibekukan</th>
									<th className="text-center">Dibekukan Oleh</th>
									<th className="text-center">Waktu Dibekukan</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="text-center">Pelanggan 4</td>
									<td className="text-center">pelanggan4@email.com</td>
									<td className="text-center">Tidak Membayar Pesanan 5x</td>
									<td className="text-center">Sistem</td>
									<td className="text-center">2023-09-10 15:30</td>
								</tr>
								<tr>
									<td className="text-center">Pelanggan 5</td>
									<td className="text-center">pelanggan5@email.com</td>
									<td className="text-center">Membatalkan Pesanan 5x</td>
									<td className="text-center">Sistem </td>
									<td className="text-center">2023-09-12 08:45</td>
								</tr>
								<tr>
									<td className="text-center">Pelanggan 6</td>
									<td className="text-center">pelanggan6@email.com</td>
									<td className="text-center">Sering membatalkan pesanan</td>
									<td className="text-center">Admin 2</td>
									<td className="text-center">2023-09-15 11:00</td>
								</tr>
								<tr>
									<td className="text-center">Pelanggan 8</td>
									<td className="text-center">pelanggan6@email.com</td>
									<td className="text-center">
										Sering tidak membayar pesanan{" "}
									</td>
									<td className="text-center">Admin 1</td>
									<td className="text-center">2023-09-15 11:00</td>
								</tr>
							</tbody>
						</Table>
					</div>

					<div className="mt-4">
						<h2 style={{ fontSize: "1.5rem" }} className="fw-bold">
							Bagian 4: Pelanggan Yang Dihapus
						</h2>
						<Table striped bordered hover responsive className="mx-auto">
							<thead>
								<tr>
									<th className="text-center">Nama</th>
									<th className="text-center">Email</th>
									<th className="text-center">Alasan Dihapus</th>
									<th className="text-center">Dihapus Oleh</th>
									<th className="text-center">Tanggal Dihapus</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="text-center">Pelanggan 9</td>
									<td className="text-center">pelanggan7@email.com</td>
									<td className="text-center">
										Tidak Membayar Pesanan 5x,
										<br />
										<span>Mengulanginya pelanggaran lagi </span>
									</td>
									<td className="text-center">Sistem</td>
									<td className="text-center">2023-09-20 14:45</td>
								</tr>
								<tr>
									<td className="text-center">Pelanggan 10</td>
									<td className="text-center">pelanggan8@email.com</td>
									<td className="text-center">
										Membatalkan Pesanan 5x <br />
										Mengulanginya pelanggaran lagi
									</td>
									<td className="text-center">Sistem</td>
									<td className="text-center">2023-09-22 09:30</td>
								</tr>
								<tr>
									<td className="text-center">Pelanggan 11</td>
									<td className="text-center">pelanggan9@email.com</td>
									<td className="text-center">
										Tidak Membayar Pesanan 5x <br />
										Membatalkan Pesanan 5x
									</td>
									<td className="text-center">Admin 2</td>
									<td className="text-center">2023-09-24 10:15</td>
								</tr>
								<tr>
									<td className="text-center">Pelanggan 11</td>
									<td className="text-center">pelanggan9@email.com</td>
									<td className="text-center">Tidak aktif selama 1 Tahun</td>
									<td className="text-center">Admin 1</td>
									<td className="text-center">2023-09-24 10:15</td>
								</tr>
							</tbody>
						</Table>
					</div>
					<p className="mt-3">
						<b>Dicetak Oleh: </b>Admin 1{" "}
					</p>
					<p style={{ marginTop : "-10px" }}>
						<b>Waktu dicetak: </b>
						{currentTime}{" "}
					</p>
          <p style={{ marginTop : "-10px" }}>
						<b>Sumber Data : </b>
						Data Akun
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

export default ContentOutputHasilCetakDataAkunPrint;
