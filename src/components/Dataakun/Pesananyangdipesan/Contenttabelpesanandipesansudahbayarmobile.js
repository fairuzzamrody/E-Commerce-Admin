import React from 'react'
import { Accordion, Card, Row, Col } from "react-bootstrap";
function Contenttabelpesanandipesansudahbayarmobile() {
    return (
        <div>
          <Card>
            <Card.Body>
              <Card.Title></Card.Title>
              <Row>
                <Col xs={4}>
                  <img
                    src="assets/assets/img/product-1.jpg"
                    alt="Gambar Produk"
                    style={{ maxWidth: "100px", borderRadius: "10px" }}
                  />
                </Col>
                <Col xs={8}>
                  <strong>Kursi Gaming Eropa </strong>
                  <p className="text-muted">Varian: Hijau</p>
                </Col>
                <div
                  className="d-flex justify-content-end"
                  style={{ marginTop: "-50px" }}
                >
                  <span>2x</span>
                </div>
                <div
                  className="d-flex justify-content-end"
                  style={{ marginTop: "-25px" }}
                >
                  <span className="text-muted">Rp1.500.000</span>
                </div>
              </Row>
            </Card.Body>
            <Card.Footer>
              <div
                className="d-flex justify-content-between"
                style={{ marginBottom: "-10px" }}
              >
                <p className="fw-bold">Total Pesanan</p>
                <p className="fw-bold">Rp 3.010.000</p>
              </div>
            </Card.Footer>
          </Card>
    
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Rincian Harga</Accordion.Header>
              <Accordion.Body>
                <div className="d-flex justify-content-between">
                  <p>Harga satuan :</p>
                  <p>Rp 1.500.000</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Sub Total Produk :</p>
                  <p>Rp 3.000.000</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Ongkos Kirim :</p>
                  <p>Rp 5.000</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Sub Total Ongkos Kirim :</p>
                  <p>Rp 10.000</p>
                </div>
    
                <div className="d-flex justify-content-between">
                  <p>Total Pesanan :</p>
                  <p>Rp 3.010.000</p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion className="mt-3">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Rincian Pemesanan</Accordion.Header>
              <Accordion.Body>
                <div className="d-flex justify-content-between">
                  <p>No Pesanan :</p>
                  <p>AR-F/ORD-20230815-0001</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>No Transaksi :</p>
                  <p>AR-F/TRX-20230815-0001</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Waktu Pemesanan:</p>
                  <p className="text-muted">10-05-2023 00:18</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Waktu Pembayaran:</p>
                  <p className="text-muted">11-05-2023 07:30</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Status Pembayaran :</p>
                  <p>Lunas</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Metode Pembayaran :</p>
                  <p>BCA</p>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      );
    }
    

export default Contenttabelpesanandipesansudahbayarmobile