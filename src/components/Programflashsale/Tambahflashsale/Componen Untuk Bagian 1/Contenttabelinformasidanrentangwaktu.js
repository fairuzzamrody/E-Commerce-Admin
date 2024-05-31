import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";

function Contenttabelinformasidanrentangwaktu() {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleStartTimeChange = (e) => {
    const selectedStartTime = e.target.value;
    setStartTime(selectedStartTime);

    // Validasi waktu berakhir
    if (endTime !== "") {
      if (selectedStartTime > endTime) {
        setEndTime(""); // Set waktu berakhir menjadi kosong jika tidak valid
        // Tampilkan SweetAlert2
        Swal.fire({
          icon: "error",
          title: "Waktu Berakhir Tidak Valid",
          text: "Waktu berakhir harus lebih besar dari atau sama dengan waktu mulai.",
        });
      }
    }
  };

  const handleEndTimeChange = (e) => {
    const selectedEndTime = e.target.value;
    setEndTime(selectedEndTime);

    // Validasi waktu berakhir
    if (startTime !== "") {
      if (startTime > selectedEndTime) {
        setEndTime(""); // Set waktu berakhir menjadi kosong jika tidak valid
        // Tampilkan SweetAlert2
        Swal.fire({
          icon: "error",
          title: "Waktu Berakhir Tidak Valid",
          text: "Waktu berakhir harus lebih besar dari atau sama dengan waktu mulai.",
        });
      }
    }
  };

  return (
    <div>
      <Form>
        <Form.Group className="mb-4">
          <Form.Label>Judul Flash Sale</Form.Label>
          <Form.Control type="text" placeholder="Contoh Flash Sale 11.11" />
        </Form.Group>
        <Row className="mb-4">
          <Col className="mb-3">
            <Form.Group>
              <Form.Label>Waktu Mulai</Form.Label>
              <Form.Control
                type="datetime-local"
                value={startTime}
                onChange={handleStartTimeChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>
                Waktu Berakhir <small>(Durasi Max 1 Minggu)</small>
              </Form.Label>
              <Form.Control
                type="datetime-local"
                value={endTime}
                onChange={handleEndTimeChange}
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default Contenttabelinformasidanrentangwaktu;
