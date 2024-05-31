import React from 'react'
import { Card } from 'react-bootstrap'

function Aktivitasadminmenghapuspelanggan() {
  return (
    <div>
<Card>


      <Card.Body>
                    <Card.Title>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                      
                          <i class="bi bi-person-slash mr-2" style={{ marginTop: "-10px" }}></i>
                          <h4>Menghapus Pelanggan</h4>
                        </div>
                        <div>
                          <small>1 Jam 50 Menit yang lalu</small>
                        </div>
                      </div>
                    </Card.Title>

                    <div>
                      <p>
                        Admin.... (Misal Admin 2) Admin 2, Menghapus Pelanggan yang bermana "Jhon Doe 1" dengan
                        alasan penghapusan <b>"Sengaja tidak membayar pesanan yang di pesan lebih dari 5x"</b>
                      </p>
                    </div>
                  </Card.Body>
                  </Card>
    </div>
  )
}

export default Aktivitasadminmenghapuspelanggan