import React from 'react'
import { Card } from 'react-bootstrap'
import { BiSolidTrashAlt } from 'react-icons/bi'

function Aktivitasadminmenghapusprodukdinding() {
  return (
    <div>
      <Card>

   
 <Card.Body>
                    <Card.Title>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <BiSolidTrashAlt
                            size={20}
                            className="mr-2 text-danger"
                            style={{ marginTop: "-10px" }}
                          />
                          <h4>Menghapus Produk</h4>
                        </div>
                        <div>
                          <small>45 Menit yang lalu</small>
                        </div>
                      </div>
                    </Card.Title>

                    <div>
                      <p>
                      Admin .... (Misal Admin 1) Admin 1 Telah menghapus produk 'Kabinet' yang termasuk 'Furnitur Pada Dinding' dan terdapat dalam kategori 'Kabinet' .

                      </p>
                    </div>
                  </Card.Body>
                  </Card>
    </div>
  )
}

export default Aktivitasadminmenghapusprodukdinding