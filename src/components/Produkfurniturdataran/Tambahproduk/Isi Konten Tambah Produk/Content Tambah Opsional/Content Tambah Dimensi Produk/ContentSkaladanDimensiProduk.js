import React, { useState } from "react";
import { Card, Form } from "react-bootstrap";
import ContentMainDimensiPervarian from '../Content Tambah Dimensi Produk/ContentMainDimensiPervarian'
import Contentloading from "../../../../../Loaders/Contentloading";

function ContentSkaladanDimensiProduk() {
  const [showSkaladanDimensiPervarian, setShowSkaladanDimensiPervarian] =
    useState(false);
  const [isBagian1Toggled, setIsBagian1Toggled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleBagian1 = () => {
    setIsLoading(true); // Mengatur loading sebelum perubahan status toggle
    setIsBagian1Toggled(!isBagian1Toggled);
    // Menambahkan penanganan loading selama 1.5 detik sebelum menampilkan konten
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  const toggleSkaladanDimensiPervarian = () => {
    if (isBagian1Toggled) {
      setIsLoading(true);
      setTimeout(() => {
        setShowSkaladanDimensiPervarian(!showSkaladanDimensiPervarian);
        setIsLoading(false);
      }, 1300);
    }
  };

  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title> Dimensi Produk</Card.Title>

          <div className="d-flex justify-content-between">
            <p className="fw-bold">
              {isBagian1Toggled
                ? "Non-Aktifkan Dimensi Manual ?"
                : "Aktifkan Dimensi Manual ?"}
            </p>
            <p>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefaultOtomatis"
                  onChange={toggleBagian1}
                />
              </div>
            </p>
          </div>

          <footer className="blockquote-footer">
            Anda saat ini sedang mengaktifkan dimensi yang mengambil data dimensi ukuran
            dari 3D bawaan, kemungkinan ukuran dimensi yang diambil dari 3D
            bawaan tidak sesuai yang diinginkan. Aktifkan dimensi manual agar
            lebih akurat sesuai dengan yang diinginkan.
          </footer>

          {isBagian1Toggled && (
            <>
              <Form
                style={{
                  display: showSkaladanDimensiPervarian ? "none" : "block",
                }}
              >
                {/* Bagian 2 */}
                <hr />
                <Form.Group>
                  <Form.Label>Panjang</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Masukkan panjang produk"
                    disabled={showSkaladanDimensiPervarian}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label className="mt-2">Lebar</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Masukkan lebar produk"
                    disabled={showSkaladanDimensiPervarian}
                  />
                </Form.Group>
                <Form.Group className="mt-2">
                  <Form.Label>Tinggi</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Masukkan tinggi produk"
                    disabled={showSkaladanDimensiPervarian}
                  />
                </Form.Group>
              </Form>
              <footer
                className={`blockquote-footer mt-3 ${
                  showSkaladanDimensiPervarian ? "d-none" : ""
                }`}
              >
                Kosongi kotak jika tidak ingin memberi Skala dan Dimensi pada
                varian tersebut.
              </footer>
              <footer
                className={`blockquote-footer ${
                  showSkaladanDimensiPervarian ? "d-none" : ""
                }`}
              >
                Dimensi ini juga akan tampil di Augmented Reality dan saat
                pelanggan akan memasukkan produk ke keranjang.
              </footer>
              <footer
                className={`blockquote-footer ${
                  showSkaladanDimensiPervarian ? "d-none" : ""
                }`}
              >
                Jika mengaktifkan mode Dimensi Produk, pengguna tidak bisa
                memperbesar dan memperkecil produk di Augmented reality.
              </footer>
              <div
                className={`alert alert-primary d-flex align-items-center mt-3 ${
                  showSkaladanDimensiPervarian ? "d-none" : ""
                }`}
                role="alert"
              >
                <i className="bi bi-exclamation-circle me-2"></i>
                <div>
                  <div className="d-none d-md-block">
                    <span>
                      Sistem mendeteksi bahwa Anda menggunakan 5 varian pada
                      produk ini. Apakah Anda ingin menerapkan Skala dan Dimensi
                      pada masing-masing varian ?
                    </span>
                  </div>
                  <div className="d-block d-lg-none">
                    <span style={{ fontSize: "0.85rem" }}>
                      Sistem mendeteksi 5 varian produk. Ingin beri Dimensi pada
                      masing-masing varian?"
                    </span>
                  </div>
                </div>
              </div>
              {/* Bagian 3 */}
              <hr />
              <div className="d-flex justify-content-between">
                <p>
                  {showSkaladanDimensiPervarian
                    ? "Non-Aktifkan Dimensi per varian ?"
                    : "Aktifkan Dimensi per varian ?"}
                </p>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    onChange={toggleSkaladanDimensiPervarian}
                  />
                </div>
              </div>
              {isLoading && <Contentloading />}
              {showSkaladanDimensiPervarian && !isLoading && (
                <ContentMainDimensiPervarian />
              )}
            </>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default ContentSkaladanDimensiProduk;
