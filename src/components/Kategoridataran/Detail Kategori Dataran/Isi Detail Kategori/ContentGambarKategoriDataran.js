import React from 'react'
import { Card } from 'react-bootstrap'

function ContentGambarKategoriDataran() {
    return (
        <div>
            <Card>
                <Card.Body>
                  <Card.Title>Gambar Kategori</Card.Title>
                  <img
                    className="d-block w-100"
                    src="assets/assets/img/product-1.jpg"
                    alt="Slide 1"
                    style={{ borderRadius: "10px" }}
                  />
                </Card.Body>
              </Card>
        </div>
      )
    }

export default ContentGambarKategoriDataran