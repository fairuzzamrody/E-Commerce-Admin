import React from 'react';
import { Card, Form, Row, Col } from 'react-bootstrap';

function ContentisiSkaladanDimensiDindingPC() {
  const warnaText = ["Merah", "Kuning", "Putih", "Hijau", "Biru"];

  return (
    <div>
      {[0, 1, 2, 3, 4].map((variantNumber) => (
        <div key={variantNumber}>
          <Card.Title>
            {variantNumber + 1}. Dimensi Varian {warnaText[variantNumber]}
          </Card.Title>
          <Row>
            <Col>
              <p style={{ marginBottom : "6px" }} className='text-muted'>Panjang.</p>
              <Form.Group controlId={`diskon${variantNumber + 1}-panjang`}>
                <Form.Control
                  type="text"
                  placeholder={`Contoh 20`}
                />
              </Form.Group>
            </Col>
            <Col>
              <p style={{ marginBottom : "6px" }} className='text-muted'>Lebar.</p>
              <Form.Group controlId={`diskon${variantNumber + 1}-lebar`}>
                <Form.Control
                  type="text"
                  placeholder={`Contoh 20`}
                />
              </Form.Group>
            </Col>
            <Col>
              <p style={{ marginBottom : "6px" }} className='text-muted'>Tinggi.</p>
              <Form.Group controlId={`diskon${variantNumber + 1}-tinggi`}>
                <Form.Control
                  type="text"
                  placeholder={`Contoh 20`}
                />
              </Form.Group>
            </Col>
          </Row>
          {variantNumber < 5 && <hr style={{ marginBottom : "-5px" }}/>} {/* Tambahkan hr kecuali untuk varian terakhir */}
        </div>
      ))}
    </div>
  );
}
  

export default ContentisiSkaladanDimensiDindingPC;
