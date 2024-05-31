import React from 'react';
import { Button, Card, Form, Table } from 'react-bootstrap';

// Data Transaksi Dibatalkan
const DataTransaksiDibatalkan = [
  {
    id: 1,
    noTransaksi: "AR-F/TRX-20230815-0002",
    nama: "Jhon Doe 1",
    noPesanan: "AR-F/ORD-20230815-0002",
    waktuPemesanan: "2023-15-05 11:10",
    qty: "2 Produk",
    totalPesanan: "Rp 3.010.000",
  },
  {
    id: 2,
    noTransaksi: "AR-F/TRX-20230815-0004",
    nama: "Jhon Doe 2",
    noPesanan: "AR-F/ORD-20230815-0004",
    waktuPemesanan: "2023-15-05 11:10",
    qty: "2 Produk",
    totalPesanan: "Rp 1.500.000",
    badge: "Flash Sale 1.1",
  },
  // Tambahkan data transaksi lainnya sesuai kebutuhan
];

function Contenttabeltransaksidibatalkan() {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <Card.Title style={{ fontSize: "1.2rem" }}>Dibatalkan</Card.Title>
        <Card.Title style={{ fontSize: "0.9rem" }}>{DataTransaksiDibatalkan.length} Transaksi</Card.Title>
      </div>

      {DataTransaksiDibatalkan.map((transaksi) => (
        <Card key={transaksi.id}>
          <Card.Body>
            <div className="d-flex justify-content-between">
              <Card.Title style={{ fontSize: "0.9rem" }}>No Transaksi {transaksi.noTransaksi}</Card.Title>
              <Card.Title style={{ fontSize: "0.9rem" }}>Dibatalkan</Card.Title>
            </div>
            <div className="table-responsive">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th className="text-center">Nama</th>
                    <th className="text-center">No Pesanan</th>
                    <th className="text-center">Waktu Pemesanan</th>
                    <th className="text-center">QTY</th>
                    <th className="text-center">Total Pesanan</th>
                    <th className="text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">
                      <a href={transaksi.id === 1 ? '/Detailtransaksidibatalkan' : '/Detailtransaksidibatalkandiskon'} className="text-primary fw-bold">
                        {transaksi.nama}
                      </a>
                    </td>
                    <td className="text-center">{transaksi.noPesanan}</td>
                    <td className="text-center">{transaksi.waktuPemesanan}</td>
                    <td className="text-center">{transaksi.qty}</td>
                    <td className="text-center fw-bold">
                      {transaksi.totalPesanan}
                      <br />
                      {transaksi.badge && (
                        <span className="badge rounded-pill text-bg-warning">
                          {transaksi.badge} <i className="bi bi-lightning-fill"></i>
                        </span>
                      )}
                    </td>
                    <td className="text-center">
                      <Button variant="link" href={transaksi.id === 1 ? '/Detailtransaksidibatalkan' : '/Detailtransaksidibatalkandiskon'} style={{ textDecoration: "none" }}>
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
        <div className="pagination-info">1 - {DataTransaksiDibatalkan.length} of {DataTransaksiDibatalkan.length} items</div>
      </div>
    </div>
  );
}

export default Contenttabeltransaksidibatalkan;
