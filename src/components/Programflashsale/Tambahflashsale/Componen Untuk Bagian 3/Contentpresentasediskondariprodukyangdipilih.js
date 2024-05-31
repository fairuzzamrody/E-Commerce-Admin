import React, { useState, useEffect } from "react";
import { Card, Form } from "react-bootstrap";

import Contenttabelprodukflashsaledatarancutomdiskon from "./Componen Manual Dataran/Contenttabelprodukflashsalediskonmanualdataran";
import Contenttabelprodukflashsaledindingcustomdiskon from "./Componen Manual Dinding/Contenttabelprodukflashsalediskonmanualdinding";
import Contenttabelprodukflashsaledatarandiskonkeseluruhan from "./Componen Keseluruhan Dataran/Contenttabelprodukflashsalediskonkeseluruhandataran";
import Contenttabelprodukflashsaledindingdiskonkeseluruhan from "./Componen Keseluruhan Dinding/Contenttabelprodukflashsalediskonkeseluruhandinding";
import Contentloading from "../../../Loaders/Contentloading";

function Contentpresentasediskondariprodukyangdipilih() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [isSameDiscount, setIsSameDiscount] = useState(false);
  const [showDiscountInput, setShowDiscountInput] = useState(false);
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedSubcategory("");
  };

  const handleSubcategoryChange = (event) => {
    setSelectedSubcategory(event.target.value);
  };

  useEffect(() => {
    if (isLoading) {
      // Tunggu 1.5 detik dan atur ulang isLoading
      const timeoutId = setTimeout(() => {
        setIsLoading(false);
      }, 1500);

      // Membersihkan timeout saat komponen unmount
      return () => clearTimeout(timeoutId);
    }
  }, [isLoading]);

  const handleToggleSwitch = (e) => {
    setIsSameDiscount(e.target.checked);
    setShowDiscountInput(e.target.checked);
    setIsLoading(true); // Menampilkan loading
  };

  return (
    <div>
      <div
        className={
          isSameDiscount ? "tabel_diskon_keseluruhan" : "tabel_diskon_custom"
        }
      >
        {isSameDiscount ? (
          <>
            <Card.Title className="mb-5">Produk Dataran</Card.Title>
            <Contenttabelprodukflashsaledatarandiskonkeseluruhan />
            <hr />
            <Card.Title className="mb-5" style={{ marginTop: "-10px" }}>
              Produk Dinding
            </Card.Title>

            <Contenttabelprodukflashsaledindingdiskonkeseluruhan />
          </>
        ) : (
          <>
            <Card.Title>Produk Dataran</Card.Title>

            <Contenttabelprodukflashsaledatarancutomdiskon />
            <hr />
            <Card.Title>Produk Dinding</Card.Title>

            <Contenttabelprodukflashsaledindingcustomdiskon />
          </>
        )}
      </div>

      <hr />
      <Form.Group>
        <div className="d-flex justify-content-between">
          <p>
            Presentase Diskon Sama Untuk Seluruh Produk?
            <br />
            <br />
            <footer class="blockquote-footer" style={{ fontSize: "0.75rem" }}>
              Silahkan aktifkan jika ingin mengaktifkan presentase diskon yang
              sama untuk semua produk yang dipilih
            </footer>
          </p>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              checked={isSameDiscount}
              onChange={handleToggleSwitch}
            />
          </div>
        </div>

        {showDiscountInput && (
          <>
            <div style={{ marginTop: "-20px" }}>
              <Card.Title
                style={{
                  marginBottom: "-6px",
                }}
              >
                Persentase Diskon Keseluruhan
              </Card.Title>

              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Contoh 20......"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  class="btn btn-outline-primary"
                  type="button"
                  id="button-addon2"
                >
                  Kirim
                </button>
              </div>
            </div>
          </>
        )}
      </Form.Group>

      {isLoading && <Contentloading />}
    </div>
  );
}

export default Contentpresentasediskondariprodukyangdipilih;
