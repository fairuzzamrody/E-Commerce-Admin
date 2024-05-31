import React from 'react'
import { Card, Form, Table } from 'react-bootstrap'

// Data Produk Dataran
const DataprodukDataran = [
  {
    id: 1,
    nama: "Sofa Gaming",
    varian: ["Putih", "Merah", "Semua Varian"],
    stokSaatIni: 10,
    gambar: "assets/assets/img/product-1.jpg"
  },
  {
    id: 2,
    nama: "Sofa Keluarga",
    varian: ["-"],
    stokSaatIni: 5,
    gambar: "assets/assets/img/product-3.jpg"
  },
  // Tambahkan data produk lainnya sesuai kebutuhan
];

function ContenttabelprodukflashsaledataranPC() {
  return (
    <div>
      <Card className="top-selling overflow-auto">
        <Card.Body className="pb-0">
          <div className="d-none d-md-block">
            <Card.Title style={{ marginBottom: "-8px" }} />

            <Table bordered hover>
              <thead>
                <tr>
                  <th className="text-center">Produk</th>
                  <th className="text-center">Nama Produk</th>
                  <th className="text-center">Varian Produk</th>
                  <th className="text-center">Stok Saat ini</th>
                  <th className="text-center">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {DataprodukDataran.map((produk) => (
                  <tr key={produk.id}>
                    <td className="text-center">
                      <div>
                        <img src={produk.gambar} alt="" />
                      </div>
                    </td>
                    <td className="text-center">{produk.nama}</td>
                    <td className="text-center">
                      {produk.varian.length > 1 ? (
                        <select
                          className="form-select mb-3 w-100"
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
                        </select>
                      ) : (
                        produk.varian[0]
                      )}
                    </td>
                    <td className="text-center align-middle">
                      <div>
                        <a className="text-dark fw-bold">
                          {produk.stokSaatIni} <br />
                          <small>Produk</small>
                        </a>
                      </div>
                    </td>
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
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ContenttabelprodukflashsaledataranPC
