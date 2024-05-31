import React from 'react'
import { Card, Table } from "react-bootstrap";

function ContentinformasiDetailProdukHabisDinding() {
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
                        Produk Habis | Tidak Tampil
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Produk</td>
                    <td>Meja Itali</td>
                  </tr>
                  <tr>
                    <td>Sub Nama Produk</td>
                    <td>Excepteur sint occaecat cupidatat non proident.</td>
                  </tr>
                  <tr>
                    <td>Kategori</td>
                    <td>Meja</td>
                  </tr>
                  <tr>
                    <td>Varian</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>Harga</td>
                    <td>Rp 20.000.000</td>
                  </tr>
                  <tr>
                    <td>Stok Awal</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <td>Stok Saat Ini</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>Total Terjual</td>
                    <td>10 Produk Terjual</td>
                  </tr>
                  <tr>
                    <td>Ongkos Kirim</td>
                    <td>
                      <span class="badge rounded-pill text-bg-success">
                        <i class="fa-solid fa-truck-fast"></i>Free Ongkir
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Diskon Produk</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>Dimensi Produk</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>Deskripsi Produk</td>
                    <td>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor.
                    </td>
                  </tr>
                  <tr>
                    <td>Produk Terlaris</td>
                    <td>No.1</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </div>
      );
    }

export default ContentinformasiDetailProdukHabisDinding