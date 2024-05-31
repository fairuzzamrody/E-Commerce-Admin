import React from "react";
import { Card, Table, Form, Badge, Button } from "react-bootstrap";

// Data Produk Dataran
const dataProdukdatarandiskonmanual = [
  {
    id: 1,
    nama: "Sofa Gaming",
    varian: "Merah",
    stok: "10",
  },
  // Tambahkan data produk lainnya sesuai kebutuhan
];

function ContenttabelprodukflashsalediskonmanualdataranPC() {
    return (
        <div>
          <Card className="top-selling overflow-auto mt-3">
            <Card.Body className="pb-0" style={{ marginTop: "-20px" }}>
              <Card.Title />
              <Table bordered responsive hover>
                <thead>
                  <tr>
                    <th scope="col">Produk</th>
                    <th scope="col">Nama</th>
                    <th scope="col">Varian</th>
                    <th scope="col">Stok</th>
                    <th scope="col" className="text-center">
                      Harga Awal
                    </th>
                    <th scope="col" className="text-center">
                     Persentase Diskon  
                    </th>
                    <th scope="col" className="text-center">
                     Harga Diskon
                    </th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {dataProdukdatarandiskonmanual.map((produk) => (
                    <tr key={produk.id}>
                      <td scope="row">
                        <div>
                          <img src="assets/assets/img/product-4.jpg" alt="" />
                        </div>
                      </td>
                      <td className="text-center">{produk.nama}</td>
                      <td className="text-center">
                        <Badge pill bg="primary" style={{ fontSize: "13px" }}>
                          {produk.varian}
                        </Badge>
                      </td>
                      <td className="text-center">
                        <a className="text-dark fw-bold">
                          {produk.stok} <br />
                        </a>
                      </td>
                      <td className="text-center">
                    <span>Rp 1.500.000</span>
                      </td>
                      <td className="text-center">
                        <Form>
                          <Form.Group >
                            <Form.Control className="text-center" type="text" placeholder="Contoh 20...." style={{ width : "140px" }}/>
                          </Form.Group>
                        </Form>
                      </td>
                      <td className="text-center">
                       <p>Harga Final</p>
                      </td>
                      <td>
                      <Button variant='link' style={{ textDecoration : "none" }}>Hapus</Button>
                    </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </div>
      );
    }

export default ContenttabelprodukflashsalediskonmanualdataranPC