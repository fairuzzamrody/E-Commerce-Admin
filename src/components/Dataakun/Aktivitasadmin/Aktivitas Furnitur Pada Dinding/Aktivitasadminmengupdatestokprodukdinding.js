import React from 'react'
import { Card } from 'react-bootstrap'
import { BsFillClipboard2XFill } from 'react-icons/bs'

function Aktivitasadminmengupdatestokprodukdinding() {
  return (
    <div>
      <Card>

  
        <Card.Body>
                    <Card.Title>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <BsFillClipboard2XFill
                            size={20}
                            className="mr-2"
                            style={{ marginTop: "-10px" }}
                          />
                          <h4>Mengupdate Stok Produk</h4>
                        </div>
                        <div>
                          <small>50 Menit yang lalu</small>
                        </div>
                      </div>
                    </Card.Title>

                    <div>
                      <p>
                      Admin ....(Misal Admin 1), Admin 1 Telah mengupdate stok produk "Kabinet" 
                      yang terdapat di Produk "Furnitur Pada Dinding" 
                      yang termasuk dalam kategori "Kabinet" menjadi "30" yang semula tersisa "10".
                      </p>
                    </div>
                  </Card.Body>
                  </Card>
    </div>
  )
}

export default Aktivitasadminmengupdatestokprodukdinding