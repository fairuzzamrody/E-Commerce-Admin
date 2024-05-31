import React, { useState } from "react";
import { Button, Card, Table, Form, Modal, FormControl } from "react-bootstrap";

const dataPelangganAktif = [
  {
    name: "Jhon Doe 1",
    email: "user@gmail.com",
    registrationTime: "2023-15-05 11:10",
    lastLoginTime: "2023-15-05 11:10",
    link: "/Detailakunpelanggan",
  },
  {
    name: "Jhon Doe 2",
    email: "user@gmail.com",
    registrationTime: "2023-15-05 11:10",
    lastLoginTime: "2023-15-05 11:10",
    link: "/Detailakunpelanggan",
  },
  {
    name: "Jhon Doe 3",
    email: "user@gmail.com",
    registrationTime: "2023-15-05 11:10",
    lastLoginTime: "2023-15-05 11:10",
    link: "/Detailakunpelanggan",
  },
];

function ContentTabelPelanggan() {
  const [showModal, setShowModal] = useState(false);
  const [selectedAction, setSelectedAction] = useState("");
  const [selectedReason, setSelectedReason] = useState("");

  const handleActionClick = (actionType) => {
    setSelectedAction(actionType);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAction = () => {
    console.log("Hapus pelanggan dengan alasan:", selectedReason);
    setShowModal(false);
  };

  return (
    <div>
      <Card>
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Card.Title>Pelanggan</Card.Title>
            <Card.Title>
              <span style={{ fontSize: "0.78rem" }}>{dataPelangganAktif.length} Akun Aktif</span>
            </Card.Title>
          </div>
          <div className="d-flex justify-content-end mb-4">
            <span className="d-flex align-items-center me-2">Filter : </span>
            <Form>
              <FormControl as="select">
                <option selected disabled>Filter Akun</option>
                <option value="option1">Akun Terbaru</option>
                <option value="option2">Akun Terlama</option>
              </FormControl>
            </Form>
          </div>
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th className="text-center">Nama</th>
                <th className="text-center">Email</th>
                <th className="text-center">Waktu Registrasi</th>
                <th className="text-center">Terakhir Login</th>
                <th className="text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dataPelangganAktif.map((admin, index) => (
                <tr key={index}>
                  <td className="text-center">
                    <a href={admin.link} className="text-primary fw-bold">
                      {admin.name}
                    </a><br/>
                   
                  </td>
                  <td className="text-center">{admin.email}</td>
                  <td className="text-center">{admin.registrationTime}</td>
                  <td className="text-center">{admin.lastLoginTime}</td>
                  <td>
                    <Button variant="link" href={admin.link} style={{ textDecoration: "none" }}>
                      Lihat
                    </Button>
                    <br />
                    <Button
                      variant="link"
                      onClick={() => handleActionClick("delete")}
                      style={{ textDecoration: "none" }}
                    >
                      Hapus
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Modal show={showModal} onHide={handleCloseModal} centered backdrop="static">
            <Modal.Header closeButton>
              <Modal.Title>Konfirmasi Hapus</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group controlId="deleteReason">
                <Form.Label>Pilih alasan Anda menghapus pelanggan ini</Form.Label>
                <Form.Control
                  as="select"
                  onChange={(e) => setSelectedReason(e.target.value)}
                  value={selectedReason}
                >
                  <option value="" disabled>Pilih alasan Anda</option>
                  <option value="1">Akun sudah tidak aktif lagi selama 1 Tahun</option>
                  <option value="2">Tidak memiliki riwayat transaksi dalam 1 Tahun terakhir.</option>
                </Form.Control>
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="outline-secondary" onClick={handleCloseModal}>
                Tutup
              </Button>
              <Button variant="primary" onClick={handleAction}>
                Hapus Akun
              </Button>
            </Modal.Footer>
          </Modal>

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
            <div className="pagination-info">1 - {dataPelangganAktif.length} of {dataPelangganAktif.length} items</div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ContentTabelPelanggan;
