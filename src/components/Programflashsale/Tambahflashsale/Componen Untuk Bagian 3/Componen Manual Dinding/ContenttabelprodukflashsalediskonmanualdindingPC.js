import React from "react";
import { Form, FormGroup, Table, Button, Card } from "react-bootstrap";

// Contoh data produk
const dataprodukDindingdiskonmanual = [
  {
    id: 1,
    imageSrc: "assets/assets/img/product-5.jpg",
    nama: "Kabinet Dinding",
    varian: "Semua Varian",
    detailVarian: "Biru, Hijau",
    stok: 10,
  },
  {
    id: 2,
    imageSrc: "assets/assets/img/product-2.jpg",
    nama: "Kabinet Eropa",
    varian: "-",
    stok: 5,
  },
  // Tambahkan data lainnya di sini
];


function ContenttabelprodukflashsalediskonmanualdindingPC() {
    return (
        <div>
            <div className="card top-selling overflow-auto mt-3">
              <div className="card-body pb-0" style={{ marginTop: "-20px" }}>
                <Card.Title />
                <Table bordered hover responsive>
                  <thead>
                    <tr>
                      <th className="text-center">Produk</th>
                      <th className="text-center">Nama</th>
                      <th className="text-center">Varian</th>
                      <th className="text-center">Stok</th>
                      <th className="text-center">Harga Awal</th>
                      <th className="text-center">Persentase Diskon</th>
                      <th className="text-center">Harga Diskon</th>
                      <th className="text-center">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataprodukDindingdiskonmanual.map((produk) => (
                      <tr key={produk.id}>
                        <td className="text-center">
                          <div>
                            <img src={produk.imageSrc} alt="" />
                          </div>
                        </td>
                        <td className="text-center">
                          <span>{produk.nama}</span></td>
                        <td className="text-center">
                          <div className="text-dark fw-bold">
                            {produk.varian === "-" ? (
                              <span>-</span>
                            ) : (
                              <span className="badge rounded-pill bg-primary">
                                {produk.varian}
                              </span>
                            )}
                            <br />
                            <small>{produk.detailVarian}</small>
                          </div>
                        </td>
                        <td className="text-center">
                          <a className="text-dark fw-bold">
                            {produk.stok} <br />
                          </a>
                        </td>
                        <td className="text-center">
                     <span>Rp. 1.000.000</span>
                        </td>
                        <td className="text-center">
                          <Form>
                            <FormGroup>
                            <Form.Control className="text-center" type="text" placeholder="Contoh 20...." style={{ width : "140px" }}/>
                            </FormGroup>
                          </Form>
                        </td>
                        <td className="text-center">
                     <span>Harga Final</span>
                        </td>
                        <td>
                      <Button variant='link' style={{ textDecoration : "none" }}>Hapus</Button>
                    </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
        </div>
      );
    }

export default ContenttabelprodukflashsalediskonmanualdindingPC