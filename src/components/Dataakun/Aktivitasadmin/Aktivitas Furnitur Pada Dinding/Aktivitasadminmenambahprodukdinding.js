import React from 'react'
import { Card } from 'react-bootstrap'
import { BiPlusCircle } from 'react-icons/bi'

function Aktivitasadminmenambahprodukdinding() {
  return (
    <div>
      <Card>
        <Card.Body>
                    <Card.Title>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <BiPlusCircle
                            size={25}
                            className="mr-2 text-success"
                            style={{ marginTop: "-10px" }}
                          />
                          <h4>Menambah Produk</h4>
                        </div>
                        <div>
                          <small>30 Menit yang lalu</small>
                        </div>
                      </div>
                    </Card.Title>

                    <div>
                      <p>
                      Admin... (Misal Admin 1) Admin 1, Telah menambahkan produk dengan nama 'Kabinet Klasik' yang termasuk 'Furnitur Pada Dinding' dan terdapat pada kategori 'Kabinet'.


                      </p>
                    </div>
                  </Card.Body>
                  </Card>
    </div>
  )
}

export default Aktivitasadminmenambahprodukdinding