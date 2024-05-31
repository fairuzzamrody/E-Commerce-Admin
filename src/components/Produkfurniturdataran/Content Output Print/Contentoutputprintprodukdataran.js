import React, { useEffect, useState } from "react";
import { Container, Table, Image, Button } from "react-bootstrap";

function Contentoutputprintprodukdataran() {
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
    if ((e.ctrlKey && e.shiftKey && e.keyCode === 73) || (e.ctrlKey && e.shiftKey && e.keyCode === 67)) {
      e.preventDefault();
    }
  };

  const currentTime = new Date().toLocaleString();

  // Data untuk setiap bagian
  const dataProdukBagian1 = [
    {
      namaProduk: "Produk 1",
      varian: "Varian 1",
      kategori: "Kategori 1",
      harga: "RP 1.000.000",
      stokAwal: 10,
      stokAkhir: 8,
      totalTerjual: "2x",
	  diLihat : "100x",
    },
    {
      namaProduk: "Produk 2",
      varian: "Varian 2",
      kategori: "Kategori 2",
      harga: "RP 1.000.000",
      stokAwal: 12,
      stokAkhir: 10,
      totalTerjual: "2x",
	  diLihat : "100x",

    },
  ];

  const dataProdukBagian2 = [
    {
      namaProduk: "Produk 4",
      varian: "Varian 4",
      kategori: "Kategori 2",
      harga: "RP 1.000.000",
      stokAwal: 8,
      stokAkhir: 3,
      totalTerjual: 5,
	  diLihat : "100x",

    },
    {
      namaProduk: "Produk 5",
      varian: "Varian 5",
      kategori: "Kategori 1",
      harga: "RP 1.000.000",
      stokAwal: 7,
      stokAkhir: 3,
      totalTerjual: "4x",
	  diLihat : "100x",

    },
  ];

  const dataProdukBagian3 = [
    {
      namaProduk: "Produk 7",
      varian: "Varian 7",
      kategori: "Kategori 1",
      harga: "RP 1.000.000",
      stokAwal: 5,
      stokAkhir: 0,
      totalTerjual: "5x",
	  diLihat : "100x",

    },
    {
      namaProduk: "Produk 8",
      varian: "Varian 8",
      kategori: "Kategori 2",
      harga: "RP 1.000.000",
      stokAwal: 3,
      stokAkhir: 0,
      totalTerjual: "3x",
	  diLihat : "100x",

    },
  ];

  const dataProdukBagian4 = [
    {
      namaProduk: "Produk 10",
      varian: "Varian 10",
      kategori: "Kategori 2",
      harga: "RP 1.000.000",
      stokAwal: 6,
      stokAkhir: 0,
      totalTerjual: "6x",
	  diLihat : "100x",

    },
    {
      namaProduk: "Produk 11",
      varian: "Varian 11",
      kategori: "Kategori 1",
      harga: "RP 1.000.000",
      stokAwal: 10,
      stokAkhir: 5,
      totalTerjual: "4x",
	  diLihat : "100x",

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

          {/* Bagian 1 */}
          <div className="mt-4">
            <h2 style={{ fontSize: "1.5rem" }} className="fw-bold">
              Bagian 1: Produk Aktif
            </h2>
            <Table bordered hover responsive className="mx-auto">
              <thead>
                <tr>
                  <th className="text-center">Nama Produk</th>
                  <th className="text-center">Varian</th>
                  <th className="text-center">Kategori</th>
                  <th className="text-center">Harga</th>
                  <th className="text-center">Stok Awal</th>
                  <th className="text-center">Stok Akhir</th>
                  <th className="text-center">Total Terjual</th>
				  <th className="text-center">Dilihat</th>
                </tr>
              </thead>
              <tbody>
                {dataProdukBagian1.map((produk, index) => (
                  <tr key={index}>
                    <td className="text-center">{produk.namaProduk}</td>
                    <td className="text-center">{produk.varian}</td>
                    <td className="text-center">{produk.kategori}</td>
                    <td className="text-center">{produk.harga}</td>
                    <td className="text-center">{produk.stokAwal}</td>
                    <td className="text-center">{produk.stokAkhir}</td>
                    <td className="text-center">{produk.totalTerjual}</td>
					<td className="text-center">{produk.diLihat}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>

          {/* Bagian 2 */}
          <div className="mt-4">
            <h2 style={{ fontSize: "1.5rem" }} className="fw-bold">
              Bagian 2: Produk Segera Habis (Stok &lt; 5)
            </h2>
            <Table bordered hover responsive className="mx-auto">
              <thead>
                <tr>
                  <th className="text-center">Nama Produk</th>
                  <th className="text-center">Varian</th>
                  <th className="text-center">Kategori</th>
                  <th className="text-center">Harga</th>
                  <th className="text-center">Stok Awal</th>
                  <th className="text-center">Stok Akhir</th>
                  <th className="text-center">Total Terjual</th>
				  <th className="text-center">Dilihat</th>

                </tr>
              </thead>
              <tbody>
                {dataProdukBagian2.map((produk, index) => (
                  <tr key={index}>
                    <td className="text-center">{produk.namaProduk}</td>
                    <td className="text-center">{produk.varian}</td>
                    <td className="text-center">{produk.kategori}</td>
                    <td className="text-center">{produk.harga}</td>
                    <td className="text-center">{produk.stokAwal}</td>
                    <td className="text-center">{produk.stokAkhir}</td>
                    <td className="text-center">{produk.totalTerjual}</td>
					<td className="text-center">{produk.diLihat}</td>

                  </tr>
                ))}
              </tbody>
            </Table>
          </div>

          {/* Bagian 3 */}
          <div className="mt-4">
            <h2 style={{ fontSize: "1.5rem" }} className="fw-bold">
              Bagian 3: Produk Habis (Stok = 0)
            </h2>
            <Table bordered hover responsive className="mx-auto">
              <thead>
                <tr>
                  <th className="text-center">Nama Produk</th>
                  <th className="text-center">Varian</th>
                  <th className="text-center">Kategori</th>
                  <th className="text-center">Harga</th>
                  <th className="text-center">Stok Awal</th>
                  <th className="text-center">Stok Akhir</th>
                  <th className="text-center">Total Terjual</th>
				  <th className="text-center">Dilihat</th>

                </tr>
              </thead>
              <tbody>
                {dataProdukBagian3.map((produk, index) => (
                  <tr key={index}>
                    <td className="text-center">{produk.namaProduk}</td>
                    <td className="text-center">{produk.varian}</td>
                    <td className="text-center">{produk.kategori}</td>
                    <td className="text-center">{produk.harga}</td>
                    <td className="text-center">{produk.stokAwal}</td>
                    <td className="text-center">{produk.stokAkhir}</td>
                    <td className="text-center">{produk.totalTerjual}</td>
					<td className="text-center">{produk.diLihat}</td>

                  </tr>
                ))}
              </tbody>
            </Table>
          </div>

          {/* Bagian 4 */}
          <div className="mt-4">
            <h2 style={{ fontSize: "1.5rem" }} className="fw-bold">
              Bagian 4: Produk Diarsipkan
            </h2>
            <Table bordered hover responsive className="mx-auto">
              <thead>
                <tr>
                  <th className="text-center">Nama Produk</th>
                  <th className="text-center">Varian</th>
                  <th className="text-center">Kategori</th>
                  <th className="text-center">Harga</th>
                  <th className="text-center">Stok Awal</th>
                  <th className="text-center">Stok Akhir</th>
                  <th className="text-center">Total Terjual</th>
				  <th className="text-center">Dilihat</th>

                </tr>
              </thead>
              <tbody>
                {dataProdukBagian4.map((produk, index) => (
                  <tr key={index}>
                    <td className="text-center">{produk.namaProduk}</td>
                    <td className="text-center">{produk.varian}</td>
                    <td className="text-center">{produk.kategori}</td>
                    <td className="text-center">{produk.harga}</td>
                    <td className="text-center">{produk.stokAwal}</td>
                    <td className="text-center">{produk.stokAkhir}</td>
                    <td className="text-center">{produk.totalTerjual}</td>
					<td className="text-center">{produk.diLihat}</td>

                  </tr>
                ))}
              </tbody>
            </Table>
          </div>

          <p className="mt-2">
            <b>Dicetak Oleh: </b>Admin 2{" "}
          </p>
          <p style={{ marginTop : "-10px" }}>
            <b>Waktu dicetak: </b>
            {currentTime}{" "}
          </p>
		  <p style={{ marginTop : "-10px" }}><b>Sumber Data</b> : Produk Dataran</p>

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

export default Contentoutputprintprodukdataran;
