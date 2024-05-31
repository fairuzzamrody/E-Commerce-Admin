import React from 'react';
import { Button, Card, Table } from 'react-bootstrap';

function ContenttabelprodukflashsalediskonkeseluruhandataranPC() {
    return (
        <div>
          <div className="top-selling overflow-auto mt-3">
              <Card.Title style={{ marginTop: "-35px" }} />
              <Table responsive bordered hover>
                <thead>
                  <tr>
                    <th>Produk</th>
                    <th>Nama</th>
                    <th>Varian</th>
                    <th>Stok</th>
                    <th>Harga Awal</th>
                    <th>Harga Flash Sale</th>
                    <th>Persentase Diskon</th>
                    <th>Aksi</th> {/* Kolom tambahan di sebelah kanan "Harga Flash Sale" */}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div>
                        <img src="assets/assets/img/product-1.jpg" alt="" />
                      </div>
                    </td>
                    <td>Sofa Gaming</td>
                    <td>
                      <p className="badge rounded-pill bg-primary">Merah</p>
                    </td>
                    <td>
                      <a className="text-dark fw-bold">
                        10 <br />
                        <small>Produk</small>
                      </a>
                    </td>
                    <td>Rp. 1.200.000</td>
                    <td>(Harga Final Flash Sale)</td>
                    <td>(Persen dari diskon)</td>
                    <td>
                      <Button variant='link' style={{ textDecoration : "none" }}>Hapus</Button>
                    </td>
                  </tr>
                  {/* Data lainnya */}
                </tbody>
              </Table>
            </div>
        </div>
  )
}

export default ContenttabelprodukflashsalediskonkeseluruhandataranPC