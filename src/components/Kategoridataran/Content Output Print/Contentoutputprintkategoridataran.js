import React, { useEffect, useState } from "react";
import { Container, Table, Image, Button } from "react-bootstrap";

function Contentoutputprintkategoridataran() {
  const [printWindowOpened, setPrintWindowOpened] = useState(false);

  useEffect(() => {
    if (!printWindowOpened) {
      setPrintWindowOpened(true);
      window.print();
    }

    document.addEventListener("contextmenu", preventRightClick);
    document.addEventListener("keydown", preventInspectElement);

    return () => {
      document.removeEventListener("contextmenu", preventRightClick);
      document.removeEventListener("keydown", preventInspectElement);
    };
  }, [printWindowOpened]);

  const preventRightClick = (e) => {
    e.preventDefault();
  };

  const preventInspectElement = (e) => {
    if (
      (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
      (e.ctrlKey && e.shiftKey && e.keyCode === 67)
    ) {
      e.preventDefault();
    }
  };

  const currentTime = new Date().toLocaleString();

  // Data kategori
  const dataKategoribagian1 = [
    {
      namaKategori: "Kategori 1",
      totalProduk: 10,
      dibuatOleh: "Admin 1",
      waktuDibuat: "2023-09-25 12:30",
    },
    {
      namaKategori: "Kategori 2",
      totalProduk: 8,
      dibuatOleh: "Admin 2",
      waktuDibuat: "2023-09-25 14:45",
    },
  ];

  const dataKategoribagian2 = [
    {
      namaKategori: "Kategori 3",
      totalProduk: 4,
      dibuatOleh: "Admin 1",
      waktuDibuat: "2023-09-25 12:30",
    },
    {
      namaKategori: "Kategori 4",
      totalProduk: 2,
      dibuatOleh: "Admin 2",
      waktuDibuat: "2023-09-25 14:45",
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

          {/* Bagian 1: Kategori Aktif */}
          <div className="mt-4">
            <h2 style={{ fontSize: "1.5rem" }} className="fw-bold">
              Bagian 1: Kategori Aktif
            </h2>
            <Table striped bordered hover responsive className="mx-auto">
              <thead>
                <tr>
                  <th className="text-center">Nama Kategori</th>
                  <th className="text-center">Total Produk</th>
                  <th className="text-center">Dibuat Oleh</th>
                  <th className="text-center">Waktu Dibuat</th>
                </tr>
              </thead>
              <tbody>
                {dataKategoribagian1.map((kategori, index) => (
                  <tr key={index}>
                    <td className="text-center">{kategori.namaKategori}</td>
                    <td className="text-center">{kategori.totalProduk} Produk</td>
                    <td className="text-center">{kategori.dibuatOleh}</td>
                    <td className="text-center">{kategori.waktuDibuat}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>

          {/* Bagian 2: Kategori Diarsipkan */}
          <div className="mt-4">
            <h2 style={{ fontSize: "1.5rem" }} className="fw-bold">
              Bagian 2: Kategori Diarsipkan
            </h2>
            <Table striped bordered hover responsive className="mx-auto">
              <thead>
                <tr>
                  <th className="text-center">Nama Kategori</th>
                  <th className="text-center">Total Produk</th>
                  <th className="text-center">Dibuat Oleh</th>
                  <th className="text-center">Waktu Dibuat</th>
                </tr>
              </thead>
              <tbody>
                {dataKategoribagian2.map((kategori, index) => (
                  <tr key={index}>
                    <td className="text-center">{kategori.namaKategori}</td>
                    <td className="text-center">{kategori.totalProduk} Produk</td>
                    <td className="text-center">{kategori.dibuatOleh}</td>
                    <td className="text-center">{kategori.waktuDibuat}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>

          <p>
            <b>Dicetak Oleh: </b>Admin 1{" "}
          </p>
          <p style={{ marginTop: "-10px" }}>
            <b>Waktu dicetak: </b>
            {currentTime}{" "}
          </p>
          <p style={{ marginTop: "-10px" }}>
            <b>Sumber Data</b> : Kategori Dataran
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

export default Contentoutputprintkategoridataran;
