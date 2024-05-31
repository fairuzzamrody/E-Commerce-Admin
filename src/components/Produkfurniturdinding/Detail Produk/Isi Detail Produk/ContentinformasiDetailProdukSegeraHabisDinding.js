import React from 'react'
import { Card, Table } from "react-bootstrap";

function ContentinformasiDetailProdukSegeraHabisDinding() {
    return (
        <div>
          <Card>
            <Card.Body>
              <Card.Title>Informasi Produk</Card.Title>
              <Table bordered hover>
                <tbody>
                  <tr>
                    <td>Status Produk</td>
                <td style={{ width: "65%" }}>
                  <span class="badge rounded-pill text-bg-secondary">
                    Segera Habis | Produk Tampil
                  </span>
                </td>
                  </tr>
                  <tr>
                    <td>Produk</td>
                    <td>Kursi Arab</td>
                  </tr>
                  <tr>
                    <td>Sub Nama Produk</td>
                    <td>Excepteur sint occaecat cupidatat non proident.</td>
                  </tr>
                  <tr>
                    <td>Kategori</td>
                    <td>Kursi</td>
                  </tr>
                  <tr>
                    <td>Varian</td>
                    <td>Merah, Putih, Biru</td>
                  </tr>
                  <tr>
                    <td>Harga</td>
                    <td>
                      <ul>
                        <li>Merah: Rp 2.000.000</li>
                        <li>Putih: Rp 2.100.000</li>
                        <li>Biru: Rp 2.800.000</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Stok Awal</td>
                    <td>
                      <ul>
                        <li>Putih: 10</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Stok Saat Ini</td>
                    <td>
                      <ul>
                        <li>Putih: 2</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Total Terjual</td>
                    <td>8 Produk Terjual</td>
                  </tr>
                  <tr>
                    <td>Ongkos Kirim</td>
                    <td>Rp 10.000</td>
                  </tr>
                  <tr>
                    <td>Diskon Produk</td>
                    <td>
                      <ul>
                        <li>Merah: 10%</li>
                        <li>Putih: 20%</li>
                        <li>Biru: -</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Dimensi Produk</td>
                    <td>
                      <ul>
                        <li>Merah: Tinggi (100cm), Lebar (60cm), Panjang (100cm)</li>
                        <li>Putih: Tinggi (100cm), Lebar (60cm), Panjang (100cm)</li>
                        <li>Biru: - </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>Deskripsi Produk</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</td>
                  </tr>
                  <tr>
                <td>Produk Terlaris</td>
                <td>-</td>
              </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </div>
      );
    }
export default ContentinformasiDetailProdukSegeraHabisDinding