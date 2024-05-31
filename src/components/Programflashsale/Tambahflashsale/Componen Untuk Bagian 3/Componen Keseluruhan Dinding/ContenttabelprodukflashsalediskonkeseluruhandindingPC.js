import React from 'react';
import { Card, Table } from 'react-bootstrap';

function ContenttabelprodukflashsalediskonkeseluruhandindingPC() {
  return (
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
            <th className="text-right">Persentase Diskon</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div>
                <img src="assets/assets/img/product-1.jpg" alt="" />
              </div>
            </td>
            <td>Kabinet Klasik</td>
            <td>
              <div className="text-dark fw-bold">
                <span className="badge rounded-pill bg-primary">Semua Varian</span>
                <br />
                <small>(Putih, Merah)</small>
              </div>
            </td>
            <td>
              <a className="text-dark fw-bold">
                10                   </a>
            </td>
            <td>Rp. 2.000.000</td>
            <td>(Harga Final Flash Sale)</td>
            <td>(Persen dari diskon)</td>
          </tr>
          <tr>
            <td>
              <div>
                <img src="assets/assets/img/product-2.jpg" alt="" />
              </div>
            </td>
            <td>Kabinet Eropa</td>
            <td>-</td>
            <td>
              <p className="text-dark fw-bold">
                5 
              </p>
            </td>
            <td className="text-right">
    Rp. 2.000.000	                
    </td>
            <td className="text-right">
    (Harga Final Flash Sale)	                
    </td>
            <td className="text-right">
    (Persen dari diskon)
            </td>
          </tr>

          {/* Data lainnya */}
        </tbody>
      </Table>
  </div>
  )
}

export default ContenttabelprodukflashsalediskonkeseluruhandindingPC