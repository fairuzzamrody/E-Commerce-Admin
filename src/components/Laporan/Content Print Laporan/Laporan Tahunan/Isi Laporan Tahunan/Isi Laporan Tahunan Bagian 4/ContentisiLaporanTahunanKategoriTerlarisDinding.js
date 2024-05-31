import React from 'react'
import { Table } from 'react-bootstrap';

function ContentisiLaporanTahunanKategoriTerlarisDinding() {
    const dataKategoriTerlarisDataran = [
        {
          namaKategori: 'Kategori C',
          totalProduk: ' 10 Produk',
          totalTerjual: '112x terjual',
        },
        {
          namaKategori: 'Kategori B',
          totalProduk: ' 12 Produk',
          totalTerjual: '60x terjual',
        },
        {
          namaKategori: 'Kategori A',
          totalProduk: ' 15 Produk',
          totalTerjual: '30x terjual',
        },
      ];
    
      return (
        <div>
          <Table bordered hover responsive className="mx-auto">
            <thead>
              <tr>
                <th className="text-center">Nama Kategori</th>
                <th className="text-center">Total Produk</th>
                <th className="text-center">Total Produk Terjual</th>
              </tr>
            </thead>
            <tbody>
              {dataKategoriTerlarisDataran.map((kategori, index) => (
                <tr key={index}>
                  <td className="text-center">{kategori.namaKategori}</td>
                  <td className="text-center">{kategori.totalProduk}</td>
                  <td className="text-center">{kategori.totalTerjual}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      );
    }

export default ContentisiLaporanTahunanKategoriTerlarisDinding