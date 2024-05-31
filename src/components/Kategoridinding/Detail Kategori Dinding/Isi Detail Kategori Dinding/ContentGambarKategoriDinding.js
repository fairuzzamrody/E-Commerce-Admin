import React from 'react'
import { Card } from 'react-bootstrap'

function ContentGambarKategoriDinding() {
    return (
        <div>
            <Card>
                <Card.Body>
                  <Card.Title>Gambar Kategori</Card.Title>
                  <img
                    className="d-block w-100"
                    src="assets/assets/img/product-1.jpg"
                    style={{ borderRadius: "10px" }}
                  />
                </Card.Body>
              </Card>
        </div>
      )
    }

export default ContentGambarKategoriDinding