import React, { useState } from "react";
import { Form, Button, Card, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import { FaPlus, FaTrash } from "react-icons/fa";

import Contentloading from "../../../../../Loaders/Contentloading"

function ColorVariantForm() {
  const [varianWarna, setVarianWarna] = useState("");
  const [additionalVarianWarna, setAdditionalVarianWarna] = useState([""]);
  const [pakaiVarianHarga, setPakaiVarianHarga] = useState("tidak");
  const [isLoading, setIsLoading] = useState(false); // State untuk loading
  const [isLoadingAdd, setIsLoadingAdd] = useState(false); // State untuk loading saat menambah

  const handleVarianWarnaChange = (e) => {
    const newValue = e.target.value;
    setVarianWarna(newValue);
  
    // Tampilkan atau sembunyikan "Pakai Varian Harga" berdasarkan "varianWarna"
    if (newValue === "ya") {
      setPakaiVarianHarga("tidak"); // Jika varianWarna adalah "ya", maka set "Pakai Varian Harga" ke "tidak"
    }
  };

  const handlePakaiVarianHargaChange = (e) => {
    setPakaiVarianHarga(e.target.value);
  };

  const handleAddVarianWarna = () => {
    if (additionalVarianWarna.length < 5) {
      setIsLoadingAdd(true); // Tampilkan loading saat tombol di klik
      setTimeout(() => {
        // Hentikan loading setelah 1 detik
        setIsLoadingAdd(false);
        setAdditionalVarianWarna([...additionalVarianWarna, ""]);
      }, 1000); // Waktu tunggu 1 detik
    } else {
      Swal.fire({
        icon: "warning",
        title: "Peringatan",
        text: "Batas maksimal 5 varian warna telah tercapai!",
      });
    }
  };

  const handleAdditionalVarianWarnaChange = (index, e) => {
    const updatedAdditionalVarianWarna = [...additionalVarianWarna];
    updatedAdditionalVarianWarna[index] = e.target.value;
    setAdditionalVarianWarna(updatedAdditionalVarianWarna);
  };

  const handleRemoveVarianWarna = (index) => {
    setIsLoading(true); // Tampilkan loading saat tombol di klik
    setTimeout(() => {
      // Hentikan loading setelah 1 detik
      setIsLoading(false);
      if (additionalVarianWarna.length > 1) {
        const updatedAdditionalVarianWarna = [...additionalVarianWarna];
        updatedAdditionalVarianWarna.splice(index, 1);
        setAdditionalVarianWarna(updatedAdditionalVarianWarna);
      }
    }, 1000); // Waktu tunggu 1 detik
  };


  const renderAdditionalVarianWarna = () => {
    return additionalVarianWarna.map((varian, index) => (
      <div key={index} className="mb-3">
        <Card.Title>
          {/* Tampilkan nomor urut dan teks "Varian produk (nomor urut)" */}
          Varian produk {index + 1}
        </Card.Title>
  
        {varianWarna === "ya" && (
          <>
            {/* PC */}
            <div className="d-none d-md-block">
              <div className="d-flex align-items-center">
              <Form.Control
                  type="text"
                  placeholder="Nama Varian"
                  required
                  className="mr-2"
                />
                <Form.Control
                  type="text"
                  placeholder={`varian warna`}
                  value={varian}
                  onChange={(e) => handleAdditionalVarianWarnaChange(index, e)}
                />
                
                <Form.Control
                  type="text"
                  placeholder="Isi stok"
                  required
                  className="ml-2"
                />
                {pakaiVarianHarga === "ya" && (
                  <Form.Control
                    type="text"
                    placeholder="Isi Harga"
                    required
                    className="ml-2"
                  />
                )}
                <div className="ml-2">
                  {additionalVarianWarna.length > 1 && (
                    <Button
                    variant="outline-danger"
                    onClick={() => handleRemoveVarianWarna(index)}
                    >
                      <FaTrash />
                    </Button>
                  )}
                </div>
              </div>
            </div>
            {/* Mobile */}
            <div className="d-block d-lg-none">
              <Form.Control
                type="text"
                placeholder={`Masukkan varian warna`}
                value={varian}
                onChange={(e) => handleAdditionalVarianWarnaChange(index, e)}
              />
              <Form.Control
                type="text"
                placeholder="Isi stok"
                required
                className="mt-3"
              />
              {pakaiVarianHarga === "ya" && (
                <Form.Control
                  type="text"
                  placeholder="Isi Harga"
                  required
                  className="mt-3"
                />
              )}
              <div className="d-flex justify-content-end mt-3">
                {additionalVarianWarna.length > 1 && (
                  <Button
                    variant="outline-danger"
                    onClick={() => handleRemoveVarianWarna(index)}
                  >
                    Hapus varian
                  </Button>
                )}
              </div>
            </div>
          </>
        )}
        <hr style={{ marginBottom: "-10px" }} /> {/* Tambahkan elemen hr di bawah form control */}
      </div>
    ));
  };
  

  return (
    <Card>
      <Card.Body>
      <Card.Title>Varian Produk</Card.Title>
        <p>Isi masing-masing kotak dengan "Red", "Green" atau "#A52A2A", "#F0FFFF" tanpa menggunakan tanda (" "). </p>
				<p>
					Warna harus disebutkan dalam Bahasa Inggris atau sebagai kode warna
					CSS (Maksimal 5 Warna) agar Augmented Reality dapat membaca warna tersebut. Stoknya
					diambil dari Jumlah stok yang sudah ditentukan di atas (Total Stok
					Produk).
				</p>
        <div className="d-flex justify-content-between">
          <Form.Group controlId="varianWarna" className="w-100 pr-2 mt-4">
            <Form.Label className="fw-bold">Pakai Varian Produk?</Form.Label>
            <Form.Control
              as="select"
              value={varianWarna}
              onChange={handleVarianWarnaChange}
            >
              <option value="" disabled>
                Pilih opsi
              </option>
              <option value="ya">Ya</option>
              <option value="tidak">Tidak</option>
            </Form.Control>
          </Form.Group>
          {varianWarna === "ya" && (
            <Form.Group controlId="varianHarga" className="w-100 pr-2 mt-4">
              <Form.Label className="fw-bold">Pakai Varian Harga?</Form.Label>
              <Form.Control
                as="select"
                value={pakaiVarianHarga}
                onChange={handlePakaiVarianHargaChange}
              >
                <option value="ya">Ya</option>
                <option value="tidak">Tidak</option>
              </Form.Control>
            </Form.Group>
          )}
        </div>
        <Card.Title>
          {/* nomor urut dan varian 1 */}
        </Card.Title>
        {varianWarna === "ya" && (
          <Form.Group controlId="varianProduk" className="w-100 pr-2 ">
            {renderAdditionalVarianWarna()}
          </Form.Group>
        )}

      </Card.Body>
      {varianWarna === "ya" && (
        <Card.Footer>
          <Col className="text-right">
            {additionalVarianWarna.length < 5 && (
              <Button variant="primary" onClick={handleAddVarianWarna}>
                {isLoadingAdd ? <Contentloading /> : <FaPlus />} Tambah Varian produk
              </Button>
            )}
            {additionalVarianWarna.length >= 5 ? (
              <p className="text-danger mt-2 text-center">
                Maksimal 5 varian warna telah tercapai. Anda tidak bisa menambah lagi.
              </p>
            ) : null}
          </Col>
        </Card.Footer>
      )}
            {isLoading && <Contentloading />} {/* Tampilkan Contentloading jika isLoading adalah true */}

    </Card>
  );
}

export default ColorVariantForm;
