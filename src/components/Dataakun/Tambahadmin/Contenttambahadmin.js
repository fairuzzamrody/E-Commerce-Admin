import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

function Contenttambahadmin() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [namaAdmin, setNamaAdmin] = useState("");
  const [emailAdmin, setEmailAdmin] = useState("");

  // Fungsi untuk mengatur nilai password saat berubah
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Fungsi untuk mengatur nilai konfirmasi password saat berubah
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  // Fungsi untuk mengatur nilai nama admin saat berubah
  const handleNamaAdminChange = (event) => {
    setNamaAdmin(event.target.value);
  };

  // Fungsi untuk mengatur nilai email admin saat berubah
  const handleEmailAdminChange = (event) => {
    setEmailAdmin(event.target.value);
  };

  // Fungsi untuk toggle visibilitas password
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Fungsi untuk toggle visibilitas konfirmasi password
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // Fungsi untuk menghandle simpan data
  const handleSimpanData = () => {
    const fieldsToCheck = [
      { value: namaAdmin, label: "Nama Admin" },
      { value: emailAdmin, label: "Email" },
      { value: password, label: "Password" },
      { value: confirmPassword, label: "Konfirmasi Password" },
    ];

    // Mengecek apakah ada bidang yang kosong
    const emptyFields = fieldsToCheck.filter((field) => !field.value);

    if (emptyFields.length > 0) {
      const emptyFieldsLabels = emptyFields.map((field) => field.label).join(", ");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Harap isi semua data sebelum menyimpan. Bidang yang belum diisi: ${emptyFieldsLabels}`,
      });
      return;
    }

    // Mengecek apakah password dan konfirmasi password cocok
    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password dan konfirmasi password tidak cocok.",
      });
      return;
    }

    // Mengecek validitas email dengan ekspresi reguler
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailPattern.test(emailAdmin)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email tidak valid. Harap masukkan email yang valid.",
      });
      return;
    }

    // Jika semua validasi terpenuhi, tampilkan konfirmasi sebelum menyimpan
    Swal.fire({
      icon: "question",
      title: "Apakah Anda yakin ingin menyimpan data?",
      showCancelButton: true,
      confirmButtonText: "Ya, simpan data",
      cancelButtonText: "Tidak",
    }).then((result) => {
      if (result.isConfirmed) {
        // Lakukan logika penyimpanan data di sini
        Swal.fire({
          icon: "success",
          title: "Data berhasil disimpan!",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          window.location.href = "/Dataakunpelanggan"; // Mengarahkan ke halaman yang dimaksud
        });
      }
    });
  };

  // Fungsi untuk menghandle pembatalan
  const handleBatal = () => {
    Swal.fire({
      icon: "warning",
      title: "Anda yakin ingin membatalkan?",
      showCancelButton: true,
      confirmButtonText: "Ya, batalkan!",
      cancelButtonText: "Tidak",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "info",
          title: "Penambahan Admin dibatalkan!",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          window.location.href = "/Dataakunpelanggan"; // Mengarahkan ke halaman yang dimaksud
        });
      }
    });
  };

  return (
    <div>
      <div className="pagetitle">
        <h1>Tambah Admin</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active">Tambah Admin</li>
          </ol>
        </nav>
      </div>
      <section className="section dashboard">
        <div className="row d-flex flex-wrap justify-content-between">
          <div className="col-12 mb-0">
            <div className="card large-card">
              <div className="card-body">
                <h5 className="card-title">Tambah Admin</h5>

                <Form>

                <Form.Group controlId="namaAdmin" className="mb-3">
                      <Form.Label>Nama Admin</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Masukkan nama admin"
                        value={namaAdmin}
                        onChange={handleNamaAdminChange}
                      />
                    </Form.Group>

                   <Form.Group controlId="emailAdmin" className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Masukkan email"
                        value={emailAdmin}
                        onChange={handleEmailAdminChange}
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Password</Form.Label>
                      <div className="position-relative mb-3">
                        <Form.Control
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={handlePasswordChange}
                          placeholder="Masukkan kata sandi Anda"
                          required
                        />
                        <div
                          className="input-group-append"
                          onClick={togglePasswordVisibility}
                          style={{
                            cursor: "pointer",
                            fontSize: "15px",
                            borderRadius: "0px",
                            position: "absolute",
                            right: "10px",
                            top: "50%",
                            transform: "translateY(-50%)",
                          }}
                        >
                          <FontAwesomeIcon
                            icon={showPassword ? faEyeSlash : faEye}
                          />
                        </div>
                      </div>
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Konfirmasi Password</Form.Label>
                      <div className="position-relative mb-5">
                        <Form.Control
                          type={showConfirmPassword ? "text" : "password"}
                          value={confirmPassword}
                          onChange={handleConfirmPasswordChange}
                          placeholder="Masukkan kata sandi Anda"
                          required
                        />
                        <div
                          className="input-group-append"
                          onClick={toggleConfirmPasswordVisibility}
                          style={{
                            cursor: "pointer",
                            fontSize: "15px",
                            borderRadius: "0px",
                            position: "absolute",
                            right: "10px",
                            top: "50%",
                            transform: "translateY(-50%)",
                          }}
                        >
                          <FontAwesomeIcon
                            icon={showConfirmPassword ? faEyeSlash : faEye}
                          />
                        </div>
                      </div>
                    </Form.Group>
                  <hr />
                  <div className="d-flex justify-content-between mb-3">
                      <Button variant="secondary" type="button" onClick={handleBatal}>
                        Batal
                      </Button>
                      <Button variant="primary" type="button" onClick={handleSimpanData}>
                        Simpan
                      </Button>
                    </div>
                  </Form>
                </div>
              </div>
            {/* Menggunakan Link untuk routing */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contenttambahadmin;
