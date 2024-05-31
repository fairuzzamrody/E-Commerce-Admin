import React, { useState, useEffect } from "react";
import { Card, Form, Table } from "react-bootstrap";
import Contentloading from "../../../Loaders/Contentloading";

const Dataprodukdinding = [
  {
    id: 1,
    nama: "Kabinet Dinding Klasik",
    varian: ["Putih", "Merah"],
    stokSaatIni: 10,
    gambar: "assets/assets/img/product-1.jpg",
  },
  {
    id: 2,
    nama: "Kabinet Dinding Eropa",
    varian: ["-"],
    stokSaatIni: 5,
    gambar: "assets/assets/img/product-2.jpg",
  },
  // Tambahkan data produk lainnya sesuai kebutuhan
];

function ContenttabelprodukflashsaledidingPC() {
  const [showCustomStock, setShowCustomStock] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleCustomStock = () => {
    setShowCustomStock(!showCustomStock);
    setIsLoading(true); // Menampilkan loading
    // Tunggu 1.5 detik dan atur ulang isLoading
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div>
      <Card className="top-selling overflow-auto mt-3">

        <Card.Body className="pb-0">
        <Card.Title style={{ marginBottom: "-8px" }} />
          <Table  bordered hover>
            <thead>
              <tr>
                <th scope="col">Produk</th>
                <th scope="col">Nama</th>
                <th scope="col">Varian</th>
                <th scope="col">Stok Saat ini</th>
                {showCustomStock && <th scope="col">Stok Custom</th>}
                <th scope="col" className="text-center">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {Dataprodukdinding.map((produk) => (
                <tr key={produk.id}>
                  <td scope="row">
                    <div>
                      <img src={produk.gambar} alt="" />
                    </div>
                  </td>
                  <td>{produk.nama}</td>
                  <td>
                    {produk.varian.length > 1 ? (
                      <Form.Select
                        className="mb-3 w-75"
                        aria-label=".form-select-lg example"
                      >
                        <option value="pilih_varian" disabled>
                          Pilih Varian ...
                        </option>
                        {produk.varian.map((varian, index) => (
                          <option key={index} value={varian}>
                            {varian}
                          </option>
                        ))}
                      </Form.Select>
                    ) : (
                      produk.varian[0]
                    )}
                  </td>
                  <td>
                    <div className="text-dark fw-bold">
                      {produk.stokSaatIni} <br />
                      <small>Produk</small>
                    </div>
                  </td>
                  {showCustomStock && (
                    <td>
                      <Form.Control
                        className="w-75"
                        type="text"
                        placeholder="Contoh 20"
                        aria-label="default input example"
                      />
                    </td>
                  )}
                  <td className="text-center">
                    <div className="form-check">
                      <Form.Check
                        type="checkbox"
                        value=""
                        id={`flexCheckDefault-${produk.id}`} // ID yang berbeda
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
      <hr />
      <div className="d-flex justify-content-between">
        <p>Aktifkan stok custom untuk flash sale ?</p>
        <Form>
          <Form.Check
            type="switch"
            id="custom-switch"
            onClick={toggleCustomStock}
          />
        </Form>
      </div>
      {isLoading && <Contentloading />}{" "}

      <footer class="blockquote-footer" style={{ fontSize: "0.75rem" }}>
        Silahkan aktifkan jika ingin mengaktifkan custom stok untuk produk yang dipilih
      </footer>
    </div>
  );
}

export default ContenttabelprodukflashsaledidingPC;
