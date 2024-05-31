import React, { useState } from "react";
import { Card, Table, Button, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link
import Swal from "sweetalert2";
import Contentloading from "../../Loaders/Contentloading";

const dataAdmin = [
  {
    name: "Jhon Admin 1",
    email: "Admin1@gmail.com",
    lastLoginTime: "2023-06-03 11:05",
    Status: "Aktif",
    linkAkun: "/Dataakunadmin",
  },
  {
    name: "Jhon Admin 2",
    email: "Admin2@gmail.com",
    lastLoginTime: "2023-06-03 11:05",
    Status: "Non-Aktif",
    linkAkun: "/Datadetailakunadmin",
  },
];

function Contenttabeladmin() {
  const [isLoading, setIsLoading] = useState(false);

  const confirmActivation = (name) => {
    Swal.fire({
      title: "Konfirmasi Pengaktifan Admin",
      text: `Apakah Anda yakin ingin mengaktifkan admin ${name}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Ya",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        // Activation logic here
        console.log("Admin activated:", name);
      }
    });
  };

  const confirmDeletion = (name) => {
    Swal.fire({
      title: "Konfirmasi Penghapusan Akun Admin",
      text: `Apakah Anda yakin ingin menghapus admin ${name}?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Ya, hapus Akun",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        setIsLoading(true);
        // Deletion logic here
        console.log("Admin deleted:", name);
      }
    });
  };

  return (
    <div>
      {isLoading && <Contentloading />}
      <Card>
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Card.Title>Admin</Card.Title>
            <Card.Title>
              <span style={{ fontSize: "0.78rem" }}>{dataAdmin.length} Akun Admin</span>
            </Card.Title>
          </div>
          <div className="d-flex justify-content-end mb-4">
            <span className="d-flex align-items-center me-2">Filter: </span>
            <Form>
              <FormControl as="select">
                <option disabled>Filter Akun</option>
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
                <th className="text-center">Terakhir Login</th>
                <th className="text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dataAdmin.map((admin, index) => (
                <tr key={index}>
                  <td className="text-center">
                    <Link to={admin.linkAkun} className="fw-bold">
                      {admin.name}
                    </Link>
                    <br />
                    <span className={`badge rounded-pill ${admin.Status === "Aktif" ? "bg-success" : "text-bg-secondary"}`}>
                      {admin.Status}
                    </span>
                  </td>
                  <td className="text-center">{admin.email}</td>
                  <td className="text-center">{admin.lastLoginTime}</td>
                  <td>
                    <Button variant="link" style={{ textDecoration: "none" }}>
                      <Link to={admin.linkAkun}>Lihat</Link>
                    </Button>
                    <br />
                    {admin.name !== "Jhon Admin 1" && (
                      <>
                        <Button
                          variant="link"
                          style={{ textDecoration: "none" }}
                          onClick={() => confirmActivation(admin.name)}
                        >
                          {admin.Status === "Non-Aktif" ? "Aktifkan" : "Non-Aktifkan"}
                        </Button>
                        <br />
                        <Button
                          variant="link"
                          style={{ textDecoration: "none" }}
                          onClick={() => confirmDeletion(admin.name)}
                        >
                          Hapus Akun
                        </Button>
                      </>
                    )}
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
            <div className="pagination-info">{`1 - ${dataAdmin.length} of ${dataAdmin.length} items`}</div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Contenttabeladmin;
