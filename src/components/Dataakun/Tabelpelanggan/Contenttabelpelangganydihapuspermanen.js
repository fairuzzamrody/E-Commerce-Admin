import React from 'react';
import { Button, Card, Table, Form, FormControl } from 'react-bootstrap';
import { BsEye } from 'react-icons/bs';

function ContentTabelPelangganYangDihapusPermanen() {
  const pelangganData = [
    {
      nama: 'Jhon Doe 1',
      email: 'user@gmail.com',
      alasan: ['Pengguna sudah Tidak Aktif'],
      dihapusOleh: 'Admin 1',
      waktudihapus : "2023-02-20 14:15"

    },
    {
      nama: 'Jhon Doe 2',
      email: 'user@gmail.com',
      alasan: ['Tidak ada transaksi dalam 1 tahun terakhir'],
      dihapusOleh: 'Admin 2',
      waktudihapus : "2023-09-20 14:45"

    },
  ];

  return (
      <div>
        <Card>
          <Card.Body>
            <div className="d-flex justify-content-between">
              <Card.Title>Pelanggan Yang Dihapus</Card.Title>
              <Card.Title>
                <span style={{ fontSize: '0.78rem' }}>
                  {pelangganData.length} Akun pelanggan
                </span>
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
                  <th className="text-center">Alasan</th>
                  <th className="text-center">Dihapus Oleh</th>
                  <th className="text-center">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {pelangganData.map((pelanggan, index) => (
                  <tr key={index}>
                    <td className="text-center">
                      <a href="/Detailakunpelangganyangdihapus" className="text-primary fw-bold">
                        {pelanggan.nama}
                      </a>
                    </td>
                    <td className="text-center">{pelanggan.email}</td>
                    <td>
                      {pelanggan.alasan.map((alasan, i) => (
                        <React.Fragment key={i}>
                          {i > 0 && <br />} {/* Tambahkan <br> setelah elemen pertama */}
                          <span className="badge rounded-pill text-bg-danger">
                            {alasan}
                          </span>
                        </React.Fragment>
                      ))}
                    </td>
                    <td className="text-center">{pelanggan.dihapusOleh}<br/>
                    <span style={{ fontSize : "0.8rem" }}>{pelanggan.waktudihapus}</span></td>
                    <td >
                      <Button variant="link" href="/Detailakunpelangganyangdihapus" style={{ textDecoration: "none" }}>
                        Lihat
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
  
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
                1 - {pelangganData.length} of {pelangganData.length} items
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
  
  export default ContentTabelPelangganYangDihapusPermanen;