import React from "react";
import { Button, Card, Form, Table,} from "react-bootstrap";

const dataPelangganBelumBayar = [
  {
    noTransaksi: "AR-F/TRX-20230815-0002",
    nama: "Jhon Doe 3",
    noPesanan: "AR-F/ORD-20230815-0002",
    waktuPemesanan: "2023-20-05 12:10",
    qty: "2 Produk",
    totalPesanan: "Rp 3.510.000",
    link: "/Detailtransaksibelumdibayar",
  },
  {
    noTransaksi: "AR-F/TRX-20230815-0004",
    nama: "Jhon Doe 1",
    noPesanan: "AR-F/ORD-20230815-0002",
    waktuPemesanan: "2023-12-05 11:10",
    qty: "5 Produk",
    totalPesanan: "Rp 1.500.000",
    flashSaleInfo: (
      <div>
        Rp 1.500.000 <br />
        <span class="badge text-bg-warning">Flash Sale 1.1 <i className="bi bi-lightning-fill"></i></span>
      </div>
    ),
    link: "/Detailtransaksibelumbayardiskon",
  },
];

function Contenttabeltransaksibelumbayar() {
  return (
    <>
      {dataPelangganBelumBayar.map((item, index) => (
        <Card key={index}>
          <Card.Body>
            <div className="d-flex justify-content-between">
              <Card.Title style={{ fontSize: "0.9rem" }}>
                No Transaksi {item.noTransaksi}
              </Card.Title>
              <Card.Title style={{ fontSize: "0.9rem" }}>Belum Dibayar</Card.Title>
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
                      <a href="/Detailakunpelanggan" className="text-primary fw-bold">
                        {item.nama}
                      </a>
                    </td>
                    <td className="text-center">{item.noPesanan}</td>
                    <td className="text-center">{item.waktuPemesanan}</td>
                    <td className="text-center">{item.qty}</td>
                    <td className="text-center fw-bold">{item.flashSaleInfo || item.totalPesanan}</td>
                    <td className="text-center">
                      <Button variant="link" href={item.link} style={{ textDecoration: "none" }}>
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
        <div className="pagination-info">1 - {dataPelangganBelumBayar.length} of {dataPelangganBelumBayar.length} items</div>
      </div>
    </>
  );
}

export default Contenttabeltransaksibelumbayar;
