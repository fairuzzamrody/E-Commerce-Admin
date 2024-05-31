import React from 'react'
import Contentisilaporanbulanankategoriterlarisdataran from './Contentisilaporanbulanankategoriterlarisdataran'
import Contentisilaporanbulanankategoriterlarisdinding from './Contentisilaporanbulanankategoriterlarisdinding'
import { Card } from 'react-bootstrap'

function Contentisilaporanbulananbagian4() {
  return (
    <div>
         <div className="mt-4">
            <h2 style={{ fontSize: '1.5rem' }} className="fw-bold">
              Bagian 4: 5 Kategori Terlaris
            </h2>
          </div>
<Card.Title>Kategori Dataran</Card.Title>
          <Contentisilaporanbulanankategoriterlarisdataran />
          <Card.Title>Kategori Dinding</Card.Title>

          <Contentisilaporanbulanankategoriterlarisdinding />
    </div>
  )
}

export default Contentisilaporanbulananbagian4