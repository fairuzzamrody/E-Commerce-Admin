import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';

function Footeradmin() {
  return (
    <div>
      {/* ======= Footer ======= */}
      <footer id="footer" className="footer">
        <Container>
          <Row>
            <Col className="text-center">
              <p>
                &copy; Copyright{" "}
                <strong>
                  <span>AR-Furniture</span>
                </strong>
                . All Rights Reserved
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <p>
                Designed by{' '}
                <a
                >
                  Fairuz Zamrody
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
      {/* End Footer */}

      <Button
        onClick={() => window.scrollTo(0, 0)}
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </Button>
    </div>
  );
}

export default Footeradmin;
