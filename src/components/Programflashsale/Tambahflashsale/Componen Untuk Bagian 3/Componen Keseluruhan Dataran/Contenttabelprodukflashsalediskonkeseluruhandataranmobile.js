import React from "react";
import { Card, Col, Row } from "react-bootstrap";

// Data Produk Dataran
const DataprodukDataran = [
  {
    id: 1,
    nama: "Sofa Klasik Eropa",
    varian: "-",
    hargaAwal: "Rp. 3.500.000",
    stokYangDipilih: "10 Produk",
    persentaseDiskon: "50%",
    gambar: "../assets/assets/img/product-2.jpg",
  },
  {
    id: 2,
    nama: "Sofa Germany",
    varian: "Putih",
    hargaAwal: "Rp. 5.500.000",
    stokYangDipilih: "10 Produk",
    persentaseDiskon: "30%",
    gambar: "../assets/assets/img/product-3.jpg",
  },
  // Tambahkan data produk lainnya sesuai kebutuhan
];

function formatRupiah(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
}

function calculateFlashSalePrice(hargaAwal, persentaseDiskon) {
  const hargaAwalAngka = parseFloat(
    hargaAwal.replace(/[^0-9,-]+/g, "").replace(",", ".")
  );
  const persentaseDiskonAngka = parseFloat(persentaseDiskon);
  const hargaFlashSaleAngka =
    hargaAwalAngka - (hargaAwalAngka * persentaseDiskonAngka) / 100;
  return formatRupiah(hargaFlashSaleAngka);
}

function Contenttabelprodukflashsalediskonkeseluruhandataranmobile() {
  return (
    <div>
      <div className="d-block d-md-none" style={{ marginTop: "-35px" }}>
        {DataprodukDataran.map((produk) => {
          const hargaFlashSale = calculateFlashSalePrice(
            produk.hargaAwal,
            produk.persentaseDiskon
          );

          return (
            <Card key={produk.id}>
              <Card.Body>
                <Card.Title style={{ marginTop: "-28px" }} />
                <Row className="mt-4">
                  <Col xs={4}>
                    <img
                      src={produk.gambar}
                      style={{ maxHeight: "80px", borderRadius: "10px", marginTop: "-10px" }}
                      alt="Gambar produk"
                    />
                  </Col>
                  <Col>
                    <div
                      className="d-flex flex-column justify-content-center align-items-start"
                      style={{ marginTop: "-9px" }}
                    >
                      <span className="fw-bold">{produk.nama}</span>
                      <span>{produk.varian}</span>
                      <p className="mt-1 text-start">{produk.hargaAwal}</p>
                    </div>
                  </Col>
                </Row>
                <hr />
                <div className="d-flex justify-content-between">
                  <span>Stok yang dipilih :</span>
                  <span>{produk.stokYangDipilih}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Harga Awal :</span>
                  <span>{produk.hargaAwal}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Harga Flash Sale :</span>
                  <span>{hargaFlashSale}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Persentase Diskon :</span>
                  <span>{produk.persentaseDiskon}</span>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Contenttabelprodukflashsalediskonkeseluruhandataranmobile;
