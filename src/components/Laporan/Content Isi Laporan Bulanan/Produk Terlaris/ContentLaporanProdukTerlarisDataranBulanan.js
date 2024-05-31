import React from 'react'
import { Table, Image, Card } from "react-bootstrap";

function ContentLaporanProdukTerlarisDataranBulanan() {
   // Data produk terlaris
   const dataProdukTerlaris = [
    {
      id: 1,
      namaProduk: "Meja Gaming",
      kategori: "Meja",
      KategoriDetail: "Dataran",
      stokAwal: 20,
      stokSaatIni: 7,
      harga: "Rp 1.100.000",
      terjual: "13x",
      gambar: "assets/assets/img/product-3.jpg",
    },
    {
      id: 2,
      namaProduk: "Meja Rias Aesthetic",
      kategori: "Meja",
      KategoriDetail: "Dataran",
      stokAwal: 20,
      stokSaatIni: 12,
      harga: "Rp 1.800.000",
      terjual: "8x",
      gambar: "assets/assets/img/product-2.jpg",
    },
    {
      id: 3,
      namaProduk: "Kabinet Dinding",
      kategori: "Kabinet",
      KategoriDetail: "Dinding",
      stokAwal: 20,
      stokSaatIni: 15,
      harga: "Rp 1.500.000",
      terjual: "5x",
      gambar: "assets/assets/img/product-4.jpg",
    },
    // Tambahkan produk terlaris lainnya di sini
  ];

  return (
    <div>
      <Card className="top-selling overflow-auto">
        <Card.Body>
          <h5 className="card-title">Produk Terlaris</h5>

          <Table bordered hover responsive>
            <thead>
              <tr>
                <th className="text-center">Produk</th>
                <th className="text-center">Nama Produk</th>
                <th className="text-center">Kategori</th>
                <th className="text-center">Stok Awal</th>
                <th className="text-center">Stok Saat Ini</th>
                <th className="text-center">Harga</th>
                <th className="text-center">Terjual</th>
              </tr>
            </thead>
            <tbody>
              {dataProdukTerlaris.map((produk) => (
                <tr key={produk.id}>
                  <td className="text-center">
                    <Image src={produk.gambar}  alt="" thumbnail />
                  </td>
                  <td className="text-center fw-bold">{produk.namaProduk}</td>
                  <td className="text-center fw-bold">
                    {produk.kategori} <br />
                    <small>{produk.KategoriDetail}</small>
                  </td>
                  <td className="text-center">{produk.stokAwal}</td>
                  <td className="text-center">{produk.stokSaatIni}</td>
                  <td className="text-center">{produk.harga}</td>
                  <td className="text-center fw-bold">{produk.terjual}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ContentLaporanProdukTerlarisDataranBulanan