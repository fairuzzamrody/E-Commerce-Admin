import React from 'react'
import { Card } from 'react-bootstrap'
import { BsFillClipboard2XFill } from 'react-icons/bs'

function Aktivitasadminmengarsipkanprodukdinding() {
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
                          <h4>Mengarsipkan Produk</h4>
                        </div>
                        <div>
                          <small>40 Menit yang lalu</small>
                        </div>
                      </div>
                    </Card.Title>

                    <div>
                      <p>
                      Admin .... (Misal Admin 1) Admin 1, Telah mengarsipkan produk 'Kabinet' yang termasuk 'Furnitur Pada Dinding' dan terdapat dalam kategori 'Kabinet' .


                      </p>
                    </div>
                  </Card.Body>
                         
      </Card>
    </div>
  )
}

export default Aktivitasadminmengarsipkanprodukdinding