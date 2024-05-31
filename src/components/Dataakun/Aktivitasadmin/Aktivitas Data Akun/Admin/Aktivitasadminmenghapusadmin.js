import React from 'react'
import { Card } from 'react-bootstrap'
import { BiSolidTrashAlt } from 'react-icons/bi'

function Aktivitasadminmenghapusadmin() {
  return (
    <div>
      <Card>

       <Card.Body>
                    <Card.Title>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                    
                          <i class="bi bi-person-fill-x mr-2"style={{ marginTop: "-10px" }}></i>
                          <h4>Menghapus Admin</h4>
                        </div>
                        <div>
                          <small>1 Jam 35 Menit yang lalu</small>
                        </div>
                      </div>
                    </Card.Title>

                    <div>
                      <p>
                      (Misal admin 2) Admin 2, telah mengambil tindakan untuk menghapus Admin 3 dari sistem ini. Dengan tindakan ini, Admin 3 tidak lagi memiliki hak akses atau peran dalam administrasi platform ini. Semua izin dan tanggung jawab yang sebelumnya dimiliki oleh Admin 3 telah dihapus.

                      </p>
                    </div>
                  </Card.Body>
                  </Card>

    </div>
  )
}

export default Aktivitasadminmenghapusadmin