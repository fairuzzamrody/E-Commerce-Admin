import React from 'react'
import { Card } from 'react-bootstrap'

function Aktivitasadminmencetaklaporanharian() {
  return (
    <div>
      <Card>
      <Card.Body>
                    <Card.Title>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <i class="bi bi-clipboard2-data mr-2" style={{ marginTop: "-10px" }}></i>
                          <h4>Mencetak Laporan Harian</h4>
                        </div>
                        <div>
                          <small>4 Jam 30 Menit yang lalu</small>
                        </div>
                      </div>
                    </Card.Title>

                    <div>
                      <p>
                        Admin...(Misal Admin 1), Admin 1, Mencetak laporan harian "2023-05-01 hingga 2023-06-01".
                      </p>
                    </div>
                  </Card.Body>
                  </Card>
    </div>
  )
}

export default Aktivitasadminmencetaklaporanharian