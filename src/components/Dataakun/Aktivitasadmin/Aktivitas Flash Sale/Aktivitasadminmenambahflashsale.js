import React from 'react'
import { Card } from 'react-bootstrap'

function Aktivitasadminmenambahflashsale() {
  return (
    <div>
      <Card>

    
        <Card.Body>
                    <Card.Title>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
           
                                                    <i class="bi bi-lightning-charge mr-2" style={{ marginTop: "-10px" }} ></i>

                          <h4>Menambah Flash Sale</h4>
                        </div>
                        <div>
                          <small>2 Hari yang lalu</small>
                        </div>
                      </div>
                    </Card.Title>

                    <div>
                      <p>
                        Admin...(Misal Admin 1), Menambah Kategori "Meja" yang
                        terdapat di kategori "Kategori Pada Dataran"
                      </p>
                    </div>
                  </Card.Body>
                    </Card>
    </div>
  )
}

export default Aktivitasadminmenambahflashsale