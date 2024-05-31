import React from 'react'
import { Card } from 'react-bootstrap'

function Aktivitasadminfollowupbelumbayar() {
  return (
    <div>
       <Card>
      <Card.Body>
        <Card.Title>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <BsFillChatLeftTextFill
                size={20}
                className="mr-2 text-warning"
                style={{ marginTop: "-10px" }}
              />
              <h4>Membalas Penilaian</h4>
            </div>
            <div>
              <small>4 Jam 10 Menit yang lalu</small>
            </div>
          </div>
        </Card.Title>

        <div>
          <p>
            Admin... (Misal Admin 1), Admin 1, melakukan follow up terhadap pelanggan dengan nomor transaksi "ARF/ORD/TRX/20230302".
            .
          </p>
        </div>
      </Card.Body>
      </Card>
    </div>
  )
}

export default Aktivitasadminfollowupbelumbayar