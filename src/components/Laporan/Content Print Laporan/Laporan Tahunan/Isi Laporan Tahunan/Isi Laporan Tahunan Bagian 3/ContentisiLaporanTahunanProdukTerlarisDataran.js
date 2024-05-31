import React from 'react';
import { Table } from 'react-bootstrap'; // Sesuaikan dengan pustaka yang Anda gunakan

function formatRupiah(angka) {
  const numberString = angka.toString();
  const sisa = numberString.length % 3;
  let rupiah = numberString.substr(0, sisa);
  const ribuan = numberString.substr(sisa).match(/\d{3}/g);

  if (ribuan) {
    const separator = sisa ? '.' : '';
    rupiah += separator + ribuan.join('.');
  }

  return 'Rp ' + rupiah;
}

function ContentisiLaporanTahunanProdukTerlarisDataran() {
    const dataProdukDataranTerlaris = [
        {
          namaProduk: 'Produk 1',
          varian: 'Varian A',
          kategori: 'Kategori 1',
          harga: 1500000,
          stokAwal: 15,
          stokAkhir: 5,
          totalTerjual: '5x',
        },
        {
          namaProduk: 'Produk 2',
          varian: 'Varian B',
          kategori: 'Kategori 2',
          harga: 8500000,
          stokAwal: 13,
          stokAkhir: 2,
          totalTerjual: '3x',
        },
        {
          namaProduk: 'Produk 2',
          varian: '-',
          kategori: 'Kategori 3',
          harga: 21500000,
          stokAwal: 12,
          stokAkhir: 2,
          totalTerjual: '2x',
        },
      ];
    
      return (
        <div>
          <Table bordered hover responsive className="mx-auto">
            <thead>
              <tr>
                <th className="text-center">Nama Produk</th>
                <th className="text-center">Varian</th>
                <th className="text-center">Kategori</th>
                <th className="text-center">Harga</th>
                <th className="text-center">Stok Awal</th>
                <th className="text-center">Stok Akhir</th>
                <th className="text-center">Total Terjual</th>
              </tr>
            </thead>
            <tbody>
              {dataProdukDataranTerlaris.map((produk, index) => (
                <tr key={index}>
                  <td className="text-center">{produk.namaProduk}</td>
                  <td className="text-center">{produk.varian}</td>
                  <td className="text-center">{produk.kategori}</td>
                  <td className="text-center">{formatRupiah(produk.harga)}</td>
                  <td className="text-center">{produk.stokAwal}</td>
                  <td className="text-center">{produk.stokAkhir}</td>
                  <td className="text-center">{produk.totalTerjual}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      );
    }
export default ContentisiLaporanTahunanProdukTerlarisDataran