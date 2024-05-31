import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import Swal from "sweetalert2"; // Import SweetAlert2
import ContentdetailtransaksibelumbayarPC from "./Componen Detail transaksi belum bayar/ContentdetailtransaksibelumbayarPC";

function Contentdetailtransaksibelumbayar() {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [isFollowUpSent, setIsFollowUpSent] = useState(false);

  const handleFollowUpClick = () => {
    Swal.fire({
      title: "Mengirim Follow Up....",
      text: "Mengirim Follow Up ke Email pelanggan....",
      icon: "info",
      showConfirmButton: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
        setTimeout(() => {
          setShowSuccessAlert(true);
          setIsFollowUpSent(true);
          Swal.close();
          Swal.fire({
            title: "Follow Up Terkirim!",
            text: "Follow up telah berhasil dikirim melalui Email pelanggan.",
            icon: "success",
          });
        }, 8000);
      },
    });
  };

  return (
    <div>
      <div className="pagetitle">
        <h1>Detail Akun Transaksi Belum Dibayar</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active">
              Detail Akun Transaksi Belum Dibayar
            </li>
          </ol>
        </nav>
      </div>

      <section className="section dashboard">
        <div className="row d-flex flex-wrap justify-content-between">
          <div className="col-12 mb-0">
            <div className="card large-card">
              <div className="card-body">
                <Card.Title>
                  <i class="bi bi-geo-alt-fill"></i> Informasi Pelanggan
                </Card.Title>
                <p style={{ marginBottom: "2px" }} className="text-muted">
                  Jhon Doe 1
                </p>
                <p style={{ marginBottom: "2px" }} className="text-muted">
                  JhonDoe1@gmail.com
                </p>
                <p style={{ marginBottom: "2px" }} className="text-muted">
                  081213133187
                </p>
                <p className="text-muted">
                  Jl. Mangga BesarSikep, Keboansikep, Kec. Gedangan, Kabupaten
                  Sidoarjo, Jawa Timur 61254
                </p>
              </div>
            </div>
          </div>
        </div>

        <h5 className="card-title" style={{ marginTop: "-25px" }}>
          Detail Produk yang Dipesan
        </h5>

        <div className="d-none d-md-block">
          <ContentdetailtransaksibelumbayarPC />
        </div>

        <div className="d-block d-lg-none">

        </div>

        {/* Mengirim follow up hanya 1x perakun */}

        {/* <Card className="mt-4">
          <Card.Body>
            <Card.Title>Pengingat Pembayaran</Card.Title>
            <Card.Text>
              <span className="text-justify" style={{ fontSize: "0.95rem" }}>
                {" "}
                Mengirimkan notifikasi pembayaran ke akun pelanggan dan alamat
                email terdaftar, sehingga pelanggan tetap teringat untuk
                melakukan pembayaran dengan tepat waktu.
              </span>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <div className="d-flex justify-content-end">
              <Button onClick={handleFollowUpClick} disabled={isFollowUpSent}>
                {isFollowUpSent ? (
                  <>
                    Follow Up Sudah Terkirim <i class="bi bi-check-all"></i>
                  </>
                ) : (
                  <>
                    Kirim Follow Up <i className="bi bi-arrow-right"></i>
                  </>
                )}
              </Button>
            </div>
          </Card.Footer>
        </Card> */}
      </section>
    </div>
  );
}

export default Contentdetailtransaksibelumbayar;
