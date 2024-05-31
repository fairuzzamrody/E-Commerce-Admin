import React, { useState } from "react";
import { Card, Col, Row, Dropdown } from "react-bootstrap";

// Data Produk Dataran
const DataprodukDataran = [
  {
    id: 1,
    nama: "Sofa Klasik Eropa",
    varian: "-",
    harga: "Rp. 2.500.000",
    stokSaatIni: "10 Produk",
    terjual: "10 Produk",
    gambar: "../assets/assets/img/product-2.jpg",
  },
  {
    id: 2,
    nama: "Sofa Germany",
    varian: ["Putih", "Merah", "Semua Varian"],
    harga: "Rp. 2.500.000",
    stokSaatIni: "10 Produk",
    terjual: "10 Produk",
    gambar: "../assets/assets/img/product-3.jpg",
  },
  // Tambahkan data produk lainnya sesuai kebutuhan
];

function Contenttabelprodukflashsaledataranmobile() {
  const [selectedVariantColor, setSelectedVariantColor] = useState("");

  const handleVariantSelect = (selectedVariant) => {
    setSelectedVariantColor(selectedVariant);
  };

  return (
    <div>
      <div className="d-block d-md-none" style={{ marginTop: "-35px" }}>
        {DataprodukDataran.map((produk) => (
          <Card key={produk.id}>
            <Card.Body>
              <Card.Title style={{ marginTop: "-17px" }} />
              <Row className="mb-3" style={{ marginTop: "-12px" }}>
                <Col xs="auto">
                  <i className="bi bi-check-lg"></i> {/* Perbaikan disini */}
                </Col>
                <Col xs={4} className="text-muted">
                  Produk
                </Col>
                <Col xs="auto" className="text-muted">
                  Informasi Produk
                </Col>
              </Row>
              <hr style={{ marginTop: "-8px" }} />
              <Row className="mt-4">
                <Col xs={1} className="align-self-center me-2">
                  <div className="form-check text-center">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id={`flexCheckDefault-${produk.id}`}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`flexCheckDefault-${produk.id}`}
                    ></label>
                  </div>
                </Col>
                <Col xs={4}>
                  <img
                    src={produk.gambar}
                    style={{ maxHeight: "80px", borderRadius: "10px" }}
                    alt="Gambar produk"
                  />
                </Col>
                <Col>
                  <div
                    className="d-flex flex-column justify-content-center align-items-start"
                    style={{ marginTop: "-9px" }}
                  >
                    <span className="fw-bold mb-1">{produk.nama}</span>
                    {produk.id === 2 ? (
                      <Dropdown>
                        <Dropdown.Toggle variant="secondary" size="sm">
                          {selectedVariantColor || "Pilih Varian"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          {Array.isArray(produk.varian)
                            ? produk.varian.map((varian, index) => (
                                <Dropdown.Item
                                  key={index}
                                  onClick={() => handleVariantSelect(varian)}
                                >
                                  {varian}
                                </Dropdown.Item>
                              ))
                            : produk.varian}
                        </Dropdown.Menu>
                      </Dropdown>
                    ) : (
                      <span className="mt-1">
                        Varian :{" "}
                        {produk.id === 2
                          ? selectedVariantColor || "Varian belum dipilih"
                          : produk.varian}
                      </span>
                    )}
                    <p className="mt-1 text-start">{produk.harga}</p>
                  </div>
                </Col>
              </Row>
              <hr />
              {produk.id === 2 && (
                <div className="d-flex justify-content-between">
                  <span>Varian :</span>
                  <span>{selectedVariantColor || "Varian belum dipilih"}</span>
                </div>
              )}
              <div className="d-flex justify-content-between">
                <span>Stok Saat Ini :</span>
                <span>{produk.stokSaatIni}</span>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <p className="fw-bold">Terjual :</p>
                <p className="fw-bold">{produk.terjual}</p>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Contenttabelprodukflashsaledataranmobile;
