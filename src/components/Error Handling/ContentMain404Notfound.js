import React from 'react'
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';

function ContentMain404Notfound() {
      return (
        <Container>
          <div style={{ marginTop: "100px" }}>
            <Row className="mt-5">
              <Col xs={12} className="text-center">
                <Image src="assets/assets/img/404-not-found.jpg" alt="No Internet" fluid style={{ maxWidth: "400px" }} />
              </Col>
            </Row>
            <Row>
              <Col xs={12} className="text-center mt-3">
                <Card.Title style={{ fontSize: "1.8rem" }}>Oops, 404 Not Found.</Card.Title>
              </Col>
            </Row>
            <Row>
              <Col xs={12} className="text-center mt-3">
                <p>Oops! Kami tidak bisa menemukan halaman yang Anda cari. Silakan periksa kembali URL Anda.".</p>
              </Col>
            </Row>
            <div className='d-none d-md-block'>
            <Row>
              <Col xs={12} className="text-center mt-3">
                <Button href='/' variant='outline-primary' style={{ borderRadius: "20px" }} >
                  Kembali
                </Button>
              </Col>
            </Row>
            </div>
    
            <div className='d-block d-md-none'>
            <Row>
              <Col xs={12} className="text-center mt-3">
                <Button href='/' className='w-75' variant='outline-primary' style={{ borderRadius: "20px" }}>
                  Kembali
                </Button>
              </Col>
            </Row>
            </div>
           
          </div>
        </Container>
      );
    }

export default ContentMain404Notfound