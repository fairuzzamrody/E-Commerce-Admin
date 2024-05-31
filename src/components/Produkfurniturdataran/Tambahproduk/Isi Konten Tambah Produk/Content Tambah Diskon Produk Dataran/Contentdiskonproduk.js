import React, { useState } from "react";
import { Card, Form } from "react-bootstrap";
import Contentdiskonprodukuntukvarian from "./Contentdiskonprodukuntukvarian";
import Contentloading from "../../../../Loaders/Contentloading";

function Contentdiskonproduk() {
  const [diskon, setDiskon] = useState("");
  const [showContent, setShowContent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [placeholder, setPlaceholder] = useState("Contoh 20");
  const [alertVisible, setAlertVisible] = useState(true);
  const [formVisible, setFormVisible] = useState(true);
  const [toggleText, setToggleText] = useState("Aktifkan diskon per varian ?"); // Tambahkan state untuk teks toggle

  const handleDiskonChange = (e) => {
    setDiskon(e.target.value);
  };

  const handleToggleSwitch = () => {
    setIsLoading(true);
    setTimeout(() => {
      setShowContent(!showContent);
      setIsDisabled(!isDisabled);
      setPlaceholder(isDisabled ? "Contoh 20" : "Silahkan Isi di kotak bawah");
      setAlertVisible(!alertVisible);
      setFormVisible(!formVisible);
      
      // Ubah teks toggle berdasarkan isDisabled
      setToggleText(isDisabled ? "Aktifkan diskon per varian ?" : "Non-Aktifkan diskon per varian ?");
      
      setIsLoading(false);
    }, 1400);
  };

  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>Persentase Diskon</Card.Title>
          {formVisible && (
            <Form>
              <Form.Label>Diskon Produk Keseluruhan</Form.Label>
              <Form.Group controlId="diskon">
                <Form.Control
                  type="text"
                  placeholder={placeholder}
                  value={diskon}
                  onChange={handleDiskonChange}
                  disabled={isDisabled}
                />
              </Form.Group>
            </Form>
          )}

          {alertVisible && (
            <div
              className="alert alert-primary d-flex align-items-center mt-3"
              role="alert"
            >
              <i className="bi bi-exclamation-circle me-2"></i>
              <div>
                <div className="d-none d-md-block">
                  <span>
                    Sistem mendeteksi bahwa Anda menggunakan 5 varian pada
                    produk ini. Apakah Anda ingin menerapkan diskon pada
                    masing-masing varian ?
                  </span>
                </div>
                <div className="d-block d-lg-none">
                  <span style={{ fontSize: "0.85rem" }}>
                    Sistem mendeteksi 5 varian produk. Ingin beri diskon pada
                    satu atau semua varian?"
                  </span>
                </div>
              </div>
            </div>
          )}

          <div className="d-flex justify-content-between">
            <p>{toggleText}</p> {/* Tampilkan teks toggle sesuai state */}
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onChange={handleToggleSwitch}
              />
            </div>
          </div>
          {showContent && <Contentdiskonprodukuntukvarian />}
          {isLoading && <Contentloading />}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Contentdiskonproduk;
