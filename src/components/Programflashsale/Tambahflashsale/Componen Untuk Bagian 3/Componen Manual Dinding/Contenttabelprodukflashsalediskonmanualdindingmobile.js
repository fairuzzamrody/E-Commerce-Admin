import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import Swal from "sweetalert2"; // Import SweetAlert2

// Data Produk Dataran
const DataprodukDataran = [
  {
    id: 1,
    nama: "Kabinet Dinding",
    varian: "Merah",
    hargaAwal: "Rp. 1.500.000",
    stokYangDipilih: "10 Produk",
    gambar: "../assets/assets/img/product-5.jpg",
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

function Contenttabelprodukflashsalediskonmanualdindingmobile() {
    const [customStock, setCustomStock] = useState("");
    const [hargaFlashSale, setHargaFlashSale] = useState("");
    const [persentaseDiskon, setPersentaseDiskon] = useState("");
  
    const handleCustomStockChange = (e) => {
      setCustomStock(e.target.value);
    };
  
    const handleKonfirmasiClick = () => {
      if (persentaseDiskon !== "") {
        const updatedProducts = DataprodukDataran.map((produk) => {
          const hargaFlashSale = calculateFlashSalePrice(
            produk.hargaAwal,
            persentaseDiskon
          );
          return { ...produk, hargaFlashSale };
        });
      } else {
        // Tampilkan SweetAlert jika persentase diskon kosong
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Harap isi terlebih dahulu persentase diskon!",
        });
      }
    };
  
    return (
      <div>
        <div className="d-block d-md-none" style={{ marginTop: "-5px" }}>
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
                        <span className="text-muted">{produk.varian}</span>
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
                    <span>.....</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Persentase Diskon :</span>
                    <span>.....</span>
                  </div>
                  <hr/>
                  <div className="d-flex justify-content-between">
                    <span>Persentase Diskon :</span>
                    <span className="d-flex justify-content-end">
                      <Form.Control
                        type="text"
                        value={customStock}
                        onChange={handleCustomStockChange}
                        placeholder="Contoh 20"
                        style={{ width: "120px" }}
                      />
                    </span>
                  </div>
                  <Button variant="outline-primary" onClick={handleKonfirmasiClick}>
                  Konfirmasi
                </Button> 
              </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
  )
}

export default Contenttabelprodukflashsalediskonmanualdindingmobile