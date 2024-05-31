import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

import Contenthasildatalaporantahunan from './Contenthasildatalaporantahunan';
import Contentloading from '../Loaders/Contentloading';

function Contentlaporantahunan() {
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [showDashboard, setShowDashboard] = useState(false); // State untuk menampilkan komponen dashboard
  const [loading, setLoading] = useState(false); // State untuk menampilkan loading

  const handleStartYearChange = (event) => {
    setStartYear(event.target.value);
    setEndYear(""); // Reset tahun akhir saat tahun awal berubah
  };

  const handleEndYearChange = (event) => {
    setEndYear(event.target.value);
  };

  const handleSearchClick = () => {
    if (!startYear) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Harap pilih tahun awal terlebih dahulu',
      });
      return;
    }

    if (endYear && (parseInt(endYear) < parseInt(startYear) || parseInt(endYear) > parseInt(startYear) + 3)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Rentang waktu akhir tidak valid. Harus dalam rentang 3 tahun dari tahun awal',
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
      setShowDashboard(true); // Menampilkan komponen dashboard setelah tombol "Cari Data" ditekan
    }, loadingTime);
  };

  const handleResetClick = () => {
    setStartYear("");
    setEndYear("");
    setShowDashboard(false);
  };

  const renderYearOptions = () => {
    const options = [];
    for (let year = 2023; year <= 2050; year++) {
      options.push(<option key={year} value={year}>{year}</option>);
    }
    return options;
  };

  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>Pilih Jangka Waktu Tahun</Card.Title>
          <Form>
            <Form.Group>
              <Form.Label>Tahun Awal</Form.Label>
              <Form.Control
                as="select"
                value={startYear}
                onChange={handleStartYearChange}
              >
                <option value="" disabled>Pilih tahun</option>
                {renderYearOptions()}
              </Form.Control>
            </Form.Group>
            <Form.Group className='mt-3'>
              <Form.Label>Tahun Akhir <span className='text-muted'>(Opsional)</span></Form.Label>
              <Form.Control
                as="select"
                value={endYear}
                onChange={handleEndYearChange}
                disabled={!startYear}
              >
                <option value="" disabled>Pilih tahun</option>
                {renderYearOptions()}
              </Form.Control>
            </Form.Group>
          </Form>
          <footer class="blockquote-footer mt-3">Rentang waktu Tahun Akhir maksimal 3 Tahun dari Tahun Awal.</footer>

        </Card.Body>
      </Card>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <Button variant='outline-danger' onClick={handleResetClick} disabled={!startYear}>Reset Waktu</Button>
        <Button onClick={handleSearchClick}>Tampilkan Data</Button>
        {loading && <Contentloading />}
      </div>

      <Card.Text>
        {startYear && endYear && (
          <>
            <p>Selected Range:</p>
            <p className="text-muted">{startYear} to {endYear || "-"}</p>
          </>
        )}
      </Card.Text>
      {showDashboard && (
        <>
          <Card.Title>Menampilkan Hasil Laporan Tahunan</Card.Title>
          <div className="d-flex justify-content-between">
            <p>Tahun Awal :</p>
            <p className="text-muted">{startYear}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Tahun Akhir :</p>
            <p className="text-muted">{endYear || "-"}</p>
          </div>
          <hr />
          <Contenthasildatalaporantahunan />
        </>
      )}
    </div>
  );
}

export default Contentlaporantahunan;
