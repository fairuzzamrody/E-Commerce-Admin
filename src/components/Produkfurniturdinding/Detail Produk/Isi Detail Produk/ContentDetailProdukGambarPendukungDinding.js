import React from 'react'
import { Card, Carousel,} from "react-bootstrap";

function ContentDetailProdukGambarPendukungDinding() {
    return (
        <div>
              <Card>
                <Card.Body>
                  <Card.Title>Gambar Pendukung</Card.Title>
                  <Carousel>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="assets/assets/img/product-4.jpg"
                        alt="Slide 4"
                        style={{ borderRadius: "10px" }}
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="assets/assets/img/product-2.jpg"
                        alt="Slide 5"
                        style={{ borderRadius: "10px" }}
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="assets/assets/img/product-3.jpg"
                        alt="Slide 6"
                        style={{ borderRadius: "10px" }}
                      />
                    </Carousel.Item>
                  </Carousel>
                </Card.Body>
              </Card>
        </div>
      )
    }

export default ContentDetailProdukGambarPendukungDinding