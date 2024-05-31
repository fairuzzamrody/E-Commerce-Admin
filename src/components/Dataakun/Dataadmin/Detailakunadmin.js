import React from "react";
import { Card, Container } from "react-bootstrap";

function Contentdataadmin() {
	const today = new Date();
  const currentMonth = today.toLocaleString("default", { month: "long" });
  const currentYear = today.getFullYear();
  const formattedDate = `${today.getDate()} ${currentMonth} ${currentYear}`;

  return (
    <div>
      <div className="pagetitle">
        <h1>Detail Akun Admin (Anda)</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active">Detail akun admin (Anda)</li>
          </ol>
        </nav>
      </div>
      <h5 className="card-title">Informasi Akun</h5>

      <section className="section dashboard">
        <Card>
          <Card.Body>
            <Card.Title>
              <i class="bi bi-person-badge"></i> Informasi Admin
            </Card.Title>
            <p style={{ marginBottom: "4px" }} className="text-muted">
              Jhon Doe 1
            </p>
            <p style={{ marginBottom: "4px" }} className="text-muted">
              JhonDoe1@gmail.com
            </p>
            <p style={{ marginBottom: "4px" }} className="text-muted">
              081213133187
            </p>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>
              <i class="bi bi-person-lines-fill me-2"></i> Informasi Akun
            </Card.Title>
            <div
              className="d-flex justify-content-between"
              style={{ marginBottom: "-10px" }}
            >
              <p className="text-muted">Waktu Ditambahkan</p>
              <p className="text-muted" style={{ fontSize: "0.9rem" }}>
                2023-06-21 12:20
              </p>
            </div>
            <div
              className="d-flex justify-content-between"
              style={{ marginBottom: "-10px" }}
            >
              <p className="text-muted">Terakhir Login</p>
              <p className="text-muted" style={{ fontSize: "0.9rem" }}>
                2023-06-21 22:20
              </p>
            </div>

            <Card.Title>
              {" "}
              <i class="bi bi-person-exclamation me-2"></i>Status Akun
            </Card.Title>
            <div
              class="alert alert-success d-flex align-items-center"
              role="alert"
            >
              <i class="bi bi-check-lg me-2"></i>
              <div>Akun Aktif</div>
            </div>
          </Card.Body>
        </Card>
      </section>
    </div>
  );
}

export default Contentdataadmin;
