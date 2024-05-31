import React from 'react'
import { Card } from 'react-bootstrap'
import { BsFillClipboard2XFill } from 'react-icons/bs'

function Aktivitasadminmengarsipkankategoridinding() {
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
              <h4>Mengarsipkan Kategori</h4>
            </div>
            <div>
              <small>1 Jam 25 Menit yang lalu</small>
            </div>
          </div>
        </Card.Title>

        <div>
          <p>
          Admin... (Misal Admin 1), "Admin 1 Telah mengarsipkan Kategori "Kabinet" yang terdapat dalam kategori 'Kategori Pada Dinding'. Produk yang sudah terlanjur ada di kategori ini akan otomatis di arsipkan.
          </p>
        </div>
      </Card.Body>
      </Card>
    </div>
  )
}

export default Aktivitasadminmengarsipkankategoridinding