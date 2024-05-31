import React from 'react';
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';

function ContentMainTidakadaKoneksiinternet() {
  const refreshPage = () => {
    window.location.reload(); // Untuk mereload halaman
    // Atau menggunakan ini jika Anda ingin mengganti URL ke URL saat ini
    // window.location.href = window.location.href;
  };

  return (
    <Container>
      <div style={{ marginTop: "100px" }}>
        <Row className="mt-5">
          <Col xs={12} className="text-center">
            <Image src="assets/assets/img/no-internet.png" alt="No Internet" fluid style={{ maxWidth: "400px" }} />
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="text-center mt-3">
            <Card.Title style={{ fontSize: "1.8rem" }}>Gagal terhubung ke internet.</Card.Title>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="text-center mt-3">
            <p>Muat ulang halaman atau cek jaringan jika koneksimu terkendala.</p>
          </Col>
        </Row>
        <div className='d-none d-md-block'>
        <Row>
          <Col xs={12} className="text-center mt-3">
            <Button  variant='outline-primary' style={{ borderRadius: "20px" }} onClick={refreshPage}>
              Muat ulang
            </Button>
          </Col>
        </Row>
        </div>

        <div className='d-block d-md-none'>
        <Row>
          <Col xs={12} className="text-center mt-3">
            <Button className='w-75' variant='outline-primary' style={{ borderRadius: "20px" }} onClick={refreshPage}>
              Muat ulang
            </Button>
          </Col>
        </Row>
        </div>
       
      </div>
    </Container>
  );
}

export default ContentMainTidakadaKoneksiinternet;
