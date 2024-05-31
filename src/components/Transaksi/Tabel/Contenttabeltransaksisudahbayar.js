import React from 'react';
import { Button, Card, Form, Table } from 'react-bootstrap';

// DataTransaksiSudahDiBayar
const DataTransaksiSudahDiBayar = [
  {
    id: 1,
    noTransaksi: "AR-F/TRX-20230815-0002",
    nama: "Jhon Doe 1",
    noPesanan: "AR-F/ORD-20230815-0002",
    waktuPembayaran: "2023-15-05 11:10",
    qty: "2 Produk",
    totalPesanan: "Rp 3.010.000",
    linkProduk: "/Detailtransaksisudahdibayar",
  },
  {
    id: 2,
    noTransaksi: "AR-F/TRX-20230815-0004",
    nama: "Jhon Doe 2",
    noPesanan: "AR-F/ORD-20230815-0004",
    waktuPembayaran: "2023-15-05 11:10",
    qty: "2 Produk",
    totalPesanan: "Rp 1.500.000",
    badge: "Flash Sale 1.1",
    linkProduk: "/Detailtransaksisudahbayardiskon",
  },
  // Tambahkan data transaksi lainnya sesuai kebutuhan
];

function Contenttabeltransaksisudahbayar() {
  return (
    <div>
      {DataTransaksiSudahDiBayar.map((transaksi) => (
        <Card key={transaksi.id}>
          <Card.Body>
            <div className="d-flex justify-content-between">
              <Card.Title style={{ fontSize: "0.9rem" }}>
                No Transaksi {transaksi.noTransaksi}
              </Card.Title>
              <Card.Title style={{ fontSize: "0.9rem" }}>Sudah Dibayar</Card.Title>
            </div>
            <div className="table-responsive">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th className="text-center">Nama</th>
                    <th className="text-center">No Pesanan</th>
                    <th className="text-center">Waktu Pembayaran</th>
                    <th className="text-center">QTY</th>
                    <th className="text-center">Total Pesanan</th>
                    <th className="text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">
                      <a
                        href="/Detailakunpelanggan"
                        className="text-primary fw-bold"
                      >
                        {transaksi.nama}
                      </a>
                    </td>
                    <td className="text-center" style={{ fontSize: "0.85rem" }}>
                      {transaksi.noPesanan}
                    </td>
                    <td className="text-center">{transaksi.waktuPembayaran}</td>
                    <td className="text-center">{transaksi.qty}</td>
                    <td className="text-center fw-bold">
                      {transaksi.totalPesanan}
                    </td>
                    <td className="text-center">
                      <Button
                        variant="link"
                        href={transaksi.linkProduk}
                        style={{ textDecoration: "none" }}
                      >
                        Lihat
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      ))}

      <div className="d-flex justify-content-between align-items-center">
        <Form.Group className="showperpage">
          <Form.Label>Show per page:</Form.Label>
          <Form.Control as="select" size="sm">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </Form.Control>
        </Form.Group>
        <div className="pagination-info">
          1 - {DataTransaksiSudahDiBayar.length} of {DataTransaksiSudahDiBayar.length} items
        </div>
      </div>
    </div>
  );
}

export default Contenttabeltransaksisudahbayar;
