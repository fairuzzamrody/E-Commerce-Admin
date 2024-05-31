import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import Contenthasildatalaporanbulanan from "./Contenthasildatalaporanbulanan";
import Contentloading from "../Loaders/Contentloading";
import Swal from 'sweetalert2';

function Contentlaporanbulanan() {
  const [startMonth, setStartMonth] = useState("");
  const [endMonth, setEndMonth] = useState("");
  const [showDashboard, setShowDashboard] = useState(false);
  const [resetButtonDisabled, setResetButtonDisabled] = useState(true);
  const [error, setError] = useState(""); // Menambahkan state untuk pesan kesalahan
  const [loading, setLoading] = useState(false); // State untuk menampilkan loading

  const handleStartMonthChange = (event) => {
    setStartMonth(event.target.value);
    setEndMonth("");
    setResetButtonDisabled(true);
    setError(""); // Reset pesan kesalahan saat mengubah bulan awal
  };

  const handleEndMonthChange = (event) => {
    setEndMonth(event.target.value);
    setError(""); // Reset pesan kesalahan saat mengubah bulan akhir
  };

  const handleSearchClick = () => {
    if (!startMonth) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Harap pilih bulan awal terlebih dahulu',
      });
      return;
    }

    if (endMonth && new Date(startMonth + "-01") > new Date(endMonth + "-01")) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Bulan akhir tidak dapat lebih awal dari bulan awal',
      });
      return;
    }

    if (startMonth === endMonth) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Bulan awal tidak boleh sama dengan bulan akhir',
      });
      return;
    }

    const maxAllowedEndMonth = new Date(startMonth + "-01");
    maxAllowedEndMonth.setMonth(maxAllowedEndMonth.getMonth() + 2);

    if (endMonth && new Date(endMonth + "-01") > maxAllowedEndMonth) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hanya dapat memilih rentang waktu maksimal 3 bulan dari bulan awal',
      });
      return;
    }

    setLoading(true); // Menampilkan loading

    // Mendapatkan informasi kualitas koneksi internet
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const effectiveType = connection.effectiveType;

    // Set waktu loading berdasarkan kualitas koneksi
    let loadingTime = 1500; // Default 1.5 detik
    if (effectiveType === 'slow-2g' || effectiveType === '2g') {
      loadingTime = 3000; // Jika koneksi tidak stabil, tampilkan loading lebih lama (3 detik)
    }

    setTimeout(() => {
      setLoading(false); // Menyembunyikan loading setelah waktu yang ditentukan
      setShowDashboard(true);
      setResetButtonDisabled(false);
    }, loadingTime);
  };

  const handleResetClick = () => {
    setStartMonth("");
    setEndMonth("");
    setShowDashboard(false);
    setResetButtonDisabled(true);
    setError(""); // Reset pesan kesalahan saat mereset
  }

  function getMaxAllowedMonth() {
    if (startMonth) {
      const startMonthDate = new Date(startMonth + "-01");
      startMonthDate.setMonth(startMonthDate.getMonth() + 2);
      return startMonthDate.toISOString().substring(0, 7);
    }
    return "";
  }

  function formatMonthYear(dateStr) {
    const date = new Date(dateStr + "-01");
    const options = { year: "numeric", month: "long" };
    return date.toLocaleDateString("id-ID", options);
  }

  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>Pilih Jangka Waktu Bulan</Card.Title>
          <Form>
            <Form.Group>
              <Form.Label>Bulan Awal</Form.Label>
              <Form.Control
                type="month"
                value={startMonth}
                onChange={handleStartMonthChange}
              />
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label>
                Bulan Akhir <span className="text-muted">(Opsional)</span>
              </Form.Label>
              <Form.Control
                type="month"
                value={endMonth}
                onChange={handleEndMonthChange}
                min={startMonth}
                max={getMaxAllowedMonth()}
                disabled={!startMonth}
              />
            </Form.Group>
          </Form>
          {error && <div className="text-danger">{error}</div>}
          <footer className="blockquote-footer mt-3">
            Rentang waktu Bulan Akhir maksimal 3 bulan dari bulan awal.
          </footer>
        </Card.Body>
      </Card>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <Button
          onClick={handleResetClick}
          disabled={resetButtonDisabled}
          variant="outline-danger"
        >
          Reset Waktu
        </Button>
        <Button onClick={handleSearchClick}>Tampilkan Data</Button>
        {loading && <Contentloading />}
      </div>
      {showDashboard && (
        <>
          <Card.Title>Menampilkan Hasil Laporan Bulanan </Card.Title>
          <div className="d-flex justify-content-between">
            <p>Bulan Awal :</p>
            <p className="text-muted">{formatMonthYear(startMonth)}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Bulan Akhir :</p>
            <p className="text-muted">
              {endMonth ? formatMonthYear(endMonth) : "-"}
            </p>
          </div>
          <hr />
          <Contenthasildatalaporanbulanan />
        </>
      )}
    </div>
  );
}

export default Contentlaporanbulanan;
