import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

import Contenttabelinformasidanrentangwaktu from "./Componen Untuk Bagian 1/Contenttabelinformasidanrentangwaktu";
import Contentpresentasediskondariprodukyangdipilih from "./Componen Untuk Bagian 3/Contentpresentasediskondariprodukyangdipilih";
import MainContentcomponenbagian2 from "./Componen Untuk Bagian 2/MainContentcomponenbagian2";
import Contentloading from "../../Loaders/Contentloading";

function Contenttambahflashsale() {
  const [showBagian3, setShowBagian3] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSimpanDataClick = () => {
    Swal.fire({
      icon: "question",
      title: "Apakah Anda yakin ingin menyimpan data ini?",
      showCancelButton: true,
      confirmButtonText: "Ya, Simpan",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        setIsLoading(true); // Menampilkan loading

        setTimeout(() => {
          Swal.fire({
            icon: "success",
            title: "Penyimpanan data berhasil!",
          });
          setIsLoading(false); // Menghilangkan loading
          // Setelah 2 detik, arahkan ke halaman lain dengan window.location
          setTimeout(() => {
            window.location.href = "/Programflashsaleadmin";
          }, 2000);
        }, 1500); // Tunggu 1.5 detik sebelum menampilkan pesan sukses
      } else {
        Swal.fire({
          icon: "info",
          title: "Penyimpanan data dibatalkan",
        });
      }
    });
  };

  const handleKonfirmasiProdukClick = () => {
    setIsLoading(true); // Menampilkan loading selama 1.5 detik
    setTimeout(() => {
      setShowBagian3(true);
      setIsLoading(false); // Menghilangkan loading setelah menampilkan Bagian 3
    }, 1500);
  };

  return (
    <div>
      <div className="pagetitle">
        <h1>Tambah Program Flash Sale</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active">Tambah Program Flash Sale</li>
          </ol>
        </nav>
      </div>

      <section className="section dashboard">
        <div className="row d-flex flex-wrap justify-content-between">
          <div className="col-12 mb-0">
            <h5 className="card-title">Informasi FlashSale.</h5>
            <div className="card large-card">
              <div className="card-body" style={{ marginBottom: "-30px", marginTop: "-20px" }}>
                <Card.Title />
                <Contenttabelinformasidanrentangwaktu />
              </div>
            </div>

            <Card.Title>Produk yang akan di flash sale.</Card.Title>
            <Card>
              <Card.Body>
                <MainContentcomponenbagian2 />
                <div className="d-flex justify-content-end mt-4">
                  <Button onClick={handleKonfirmasiProdukClick}>Konfirmasi Produk</Button>
                </div>
              </Card.Body>
            </Card>

            {isLoading && <Contentloading />}{" "}

            {showBagian3 && (
              <>
                <Card.Title>Persentase Diskon.</Card.Title>
                <Card>
                  <Card.Body>
                    <Contentpresentasediskondariprodukyangdipilih />
                  </Card.Body>
                </Card>
              </>
            )}

            <Card>
              <Card.Body>
                <div className="d-flex justify-content-between mt-3">
                  <Link to="/Programflashsaleadmin">
                    <Button variant="outline-secondary">
                      {" "}
                      <i className="bi bi-arrow-left me-2"></i>Batal
                    </Button>
                  </Link>
                  <Button variant="primary" onClick={handleSimpanDataClick}>
                    Konfirmasi <i className="bi bi-arrow-right ml-2"></i>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contenttambahflashsale;
