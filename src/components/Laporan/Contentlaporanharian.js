import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import Contenthasildatalaporanharian from './Contenthasildatalaporanharian';
import Contentloading from '../Loaders/Contentloading';

function Contentlaporanharian() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showDashboard, setShowDashboard] = useState(false);
  const [searchClicked, setSearchClicked] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [error, setError] = useState(""); // Menambahkan state untuk pesan kesalahan

  const handleStartDateChange = (event) => {
    const newStartDate = event.target.value;
    setStartDate(newStartDate);
    setEndDate(null);
    setError(""); // Reset pesan kesalahan saat mengubah tanggal awal
  };

  const handleEndDateChange = (event) => {
    const selectedStartDate = new Date(startDate);
    const selectedEndDate = new Date(event.target.value);
    const oneWeekBefore = new Date(selectedStartDate);
    oneWeekBefore.setDate(oneWeekBefore.getDate() - 7);

    if (selectedEndDate < oneWeekBefore) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hanya dapat memilih rentang waktu satu minggu dari tanggal awal',
      });
      setEndDate(null);
    } else {
      setEndDate(event.target.value);
      setError(""); // Reset pesan kesalahan saat berhasil
    }
  };

  const handleSearchClick = () => {
    if (!startDate) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Harap pilih tanggal awal terlebih dahulu',
      });
      return;
    }
    
    if (startDate === endDate) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Tanggal akhir tidak dapat lebih awal dari tanggal awal',
      });
      return;
    }
    
    setShowLoading(true);

    // Mendapatkan informasi kualitas koneksi internet
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const effectiveType = connection.effectiveType;

    // Set waktu loading berdasarkan kualitas koneksi
    let loadingTime = 1500; // Default 1.5 detik
    if (effectiveType === 'slow-2g' || effectiveType === '2g') {
      loadingTime = 3000; // Jika koneksi tidak stabil, tampilkan loading lebih lama (3 detik)
    }

    setTimeout(() => {
      setShowDashboard(true);
      setSearchClicked(true);
      setShowLoading(false);
    }, loadingTime);
  };

  const handleResetClick = () => {
    if (startDate) {
      setStartDate(null);
      setEndDate(null);
      setShowDashboard(false);
      setSearchClicked(false);
      setError(""); // Reset pesan kesalahan saat mereset
    }
  }

  function getOneWeekLater(dateString) {
    const selectedStartDate = new Date(dateString);
    const oneWeekLater = new Date(selectedStartDate);
    oneWeekLater.setDate(oneWeekLater.getDate() + 7);
    return oneWeekLater.toISOString().split("T")[0];
  }

  // Fungsi untuk mengonversi tanggal ke format yang diinginkan
  function formatDate(dateString) {
    if (!dateString) return '-';

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString('id-ID', options);

    return formattedDate;
  }

  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>Pilih Jangka Waktu Hari</Card.Title>
          <Form>
            <Form.Group>
              <Form.Label>Tanggal Awal</Form.Label>
              <Form.Control
                type="date"
                value={startDate || ""}
                onChange={handleStartDateChange}
              />
            </Form.Group>
            <Form.Group className='mt-3'>
              <Form.Label>Tanggal Akhir <span className='text-muted'>(Opsional)</span></Form.Label>
              <Form.Control
                type="date"
                value={endDate || ""}
                onChange={handleEndDateChange}
                min={startDate || ""}
                max={getOneWeekLater(startDate) || ""}
                disabled={!startDate}
              />
            </Form.Group>
          </Form>
          {error && <div className="text-danger">{error}</div>} {/* Menampilkan pesan kesalahan */}
          <footer class="blockquote-footer mt-3">Rentang waktu Tanggal Akhir maksimal 1 minggu dari Tanggal awal.</footer>
        </Card.Body>
      </Card>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <Button onClick={handleResetClick} variant='outline-danger' disabled={!startDate}>Reset Waktu</Button>
        <Button onClick={handleSearchClick}>Tampilkan Data</Button>
        {showLoading && <Contentloading />}
      </div>

      {showDashboard && (
        <>
          <Card.Title>Menampilkan Hasil Laporan Harian</Card.Title>
          <div className="d-flex justify-content-between">
            <p>Tanggal Awal :</p>
            <p className="text-muted">{formatDate(startDate) || '-'}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Tanggal Akhir :</p>
            <p className="text-muted">{formatDate(endDate) || '-'}</p>
          </div>
          <hr />
          <Contenthasildatalaporanharian />
        </>
      )}
    </div>
  );
}

export default Contentlaporanharian;
