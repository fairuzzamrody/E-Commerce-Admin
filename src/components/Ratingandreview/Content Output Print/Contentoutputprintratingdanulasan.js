import React, { useEffect, useState } from "react";
import { Container, Table, Image, Button } from "react-bootstrap";

function Contentoutputprintratingdanulasan() {
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

  // Contoh data rating dan ulasan
  const dataSudahDibalas = [
    {
      namaPelanggan: "John Doe",
      namaProduk: "Produk A",
      kuantitas: 2,
      waktuRating: "2023-10-09 10:00 AM",
      waktuUlasan: "2023-10-09 10:30 AM",
      rating: 5,
      ulasan: "Pelayanan sangat baik!",
      tanggapanAdmin: "Terima kasih atas ulasan Anda!",
      ditanggapiOleh: "Admin 1",

    },
    {
      namaPelanggan: "Jane Smith",
      namaProduk: "Produk B",
      kuantitas: 1,
      waktuRating: "2023-10-09 11:00 AM",
      waktuUlasan: "2023-10-09 11:30 AM",
      rating: 4,
      ulasan: "Produk berkualitas",
      tanggapanAdmin: "Kami senang Anda menyukai produk kami!",
      ditanggapiOleh: "Admin 2",

    },
  ];

  const dataBelumDibalas = [
    {
      namaPelanggan: "Alice Johnson",
      namaProduk: "Produk C",
      kuantitas: 3,
      waktuRating: "2023-10-09 12:00 PM",
      waktuUlasan: "2023-10-09 12:30 PM",
      rating: 3,
      ulasan: "Butuh perbaikan pada pengiriman",
      tanggapanAdmin: "-",
      ditanggapiOleh: "-",
    },
    {
      namaPelanggan: "Bob Brown",
      namaProduk: "Produk D",
      kuantitas: 2,
      waktuRating: "2023-10-09 1:00 PM",
      waktuUlasan: "2023-10-09 1:30 PM",
      rating: 2,
      ulasan: "Belum puas dengan layanan",
      tanggapanAdmin: "-",
      ditanggapiOleh: "-",
    },
  ];

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
              Bagian 1: Rating dan ulasan sudah dibalas
            </h2>
            <Table bordered hover responsive className="mx-auto">
              <thead>
                <tr>
                  <th>Nama Pelanggan</th>
                  <th>Nama Produk</th>
                  <th>Kuantitas</th>
                  <th>Waktu Rating</th>
                  <th>Waktu Ulasan</th>
                  <th>Rating</th>
                  <th>Ulasan</th>
                  <th>Tanggapan Admin</th>
                  <th>Ditanggapi oleh</th>

                </tr>
              </thead>
              <tbody>
                {dataSudahDibalas.map((item, index) => (
                  <tr key={index}>
                    <td>{item.namaPelanggan}</td>
                    <td>{item.namaProduk}</td>
                    <td>{item.kuantitas}x</td>
                    <td>{item.waktuRating}</td>
                    <td>{item.waktuUlasan}</td>
                    <td>{item.rating}</td>
                    <td>{item.ulasan}</td>
                    <td>{item.tanggapanAdmin}</td>
                    <td>{item.ditanggapiOleh}</td>

                  </tr>
                ))}
              </tbody>
            </Table>
          </div>

          <div className="mt-4">
            <h2 style={{ fontSize: "1.5rem" }} className="fw-bold">
              Bagian 2: Rating dan ulasan belum dibalas
            </h2>
            <Table bordered hover responsive className="mx-auto">
              <thead>
                <tr>
                  <th>Nama Pelanggan</th>
                  <th>Nama Produk</th>
                  <th>Kuantitas</th>
                  <th>Waktu Rating</th>
                  <th>Waktu Ulasan</th>
                  <th>Rating</th>
                  <th>Ulasan</th>
                  <th>Tanggapan Admin</th>
                  <th>Ditanggapi oleh</th>
                </tr>
              </thead>
              <tbody>
                {dataBelumDibalas.map((item, index) => (
                  <tr key={index}>
                    <td>{item.namaPelanggan}</td>
                    <td>{item.namaProduk}</td>
                    <td>{item.kuantitas}x</td>
                    <td>{item.waktuRating}</td>
                    <td>{item.waktuUlasan}</td>
                    <td>{item.rating}</td>
                    <td>{item.ulasan}</td>
                    <td>{item.tanggapanAdmin}</td>
                    <td>{item.ditanggapiOleh}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>

          <p>
            <b>Dicetak Oleh : </b>Admin 1{" "}
          </p>
          < p style={{ marginTop :"-10px" }}>
            <b>Waktu dicetak : </b>
            {currentTime}{" "}
          </p>
          <p style={{ marginTop :"-10px" }}>
            <b>Sumber data : </b>
            Rating dan Ulasan pelanggan
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

export default Contentoutputprintratingdanulasan;
