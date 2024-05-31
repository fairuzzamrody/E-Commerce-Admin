import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

const formatRupiah = (number) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
};

const data = [
  {
    no: 1,
    namaPelanggan: 'Sumiasih',
    alamat: 'Banyumas',
    barang: 'Kursi Klasik Eropa',
    varian: '-Biru',
    metodePembayaran: 'BCA',
    subTotal: 2000000,
    diskon: '5%',
    statusdiskon: 'Flash Sale 1.1',
    total: 1900000,
  },
  {
    no: 2,
    namaPelanggan: 'Keisha',
    alamat: 'Kediri',
    barang: 'Sofa USA',
    metodePembayaran: 'BCA',
    subTotal: 5000000,
    diskon: '-', // Tidak ada diskon
    total: 5000000,
  },
  // ... tambahkan data lainnya sesuai kebutuhan
];


function ContentlaporandatalengkapTahunan() {
    return (
        <div className="table-responsive mb-5">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th colSpan="9" className='text-center' style={{ fontSize: "20px" }}>
                  <span>AR-Furniture</span>
                </th>
              </tr>
              <tr>
                <th colSpan="9" className='text-center'>
                  <span>Laporan Penjualan Harian Tanggal 2023-08-29 hingga 2023-08-29</span>
                </th>
              </tr>
              <tr>
                <th>No.</th>
                <th>Pelanggan</th>
                <th>Alamat</th>
                <th>Barang</th>
                <th>Pembayaran</th>
                <th>Sub Total</th>
                <th>Diskon</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.no}>
                  <td>{item.no}</td>
                  <td>{item.namaPelanggan}</td>
                  <td>{item.alamat}</td>
                  <td className='fw-bold'>
                    {item.barang}
                    <br />
                    <span><small>{item.varian}</small></span>
                  </td>
                  <td>{item.metodePembayaran}</td>
                  <td>{formatRupiah(item.subTotal)}</td>
                  <td className='fw-bold'>
                    {item.diskon}
                    <br />
                    <span><small>{item.statusdiskon}</small></span>
                  </td>
                  <td>{formatRupiah(item.total)}</td>
                </tr>
              ))}
              <tr>
                <th colSpan="5">Total</th>
                <td>{formatRupiah(data.reduce((acc, item) => acc + item.subTotal, 0))}</td>
                <td>0.05</td> {/* Placeholder for diskon */}
                <td>{formatRupiah(data.reduce((acc, item) => acc + item.total, 0))}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      );
    };

export default ContentlaporandatalengkapTahunan