import React from 'react'
import { Card, Table } from 'react-bootstrap';

function ContentInformasiDetailKategoriDataran() {
    return (
        <div>
          <Card>
            <Card.Body>
              <Card.Title>Informasi Kategori</Card.Title>
              <Table bordered hover>
                <tbody>
                <tr>
                    <td>Status Kategori</td>
                    <td style={{ width: "65%" }}>
                      <span class="badge rounded-pill text-bg-success">
                        Kategori Aktif | Kategori Tampil
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Kategori</td>
                    <td>Sofa</td>
                  </tr>
                  
                  <tr>
                    <td>Dibuat Oleh</td>
                    <td>Admin 2</td>
                  </tr>
                  <tr>
                    <td>Waktu Dibuat</td>
                    <td>Kamis, 2 November 2023 15:29:22</td>
                  </tr>
                  <tr>
                <td>Total Produk</td>
                <td>12</td>
              </tr>
                  <tr>
                <td>Kategori Terlaris</td>
                <td>-</td>
              </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </div>
      );
    }

export default ContentInformasiDetailKategoriDataran