import React from 'react'
import Contentisilaporanbulananprodukterlarisdataran from './Contentisilaporanbulananprodukterlarisdataran'
import Contentisilaporanbulananprodukterlarisdinding from './Contentisilaporanbulananprodukterlarisdinding'
import { Card } from 'react-bootstrap'

function Contentisilaporanbulananbagian3() {
  return (
    <div>
        <div className="mt-4">
            <h2 style={{ fontSize: '1.5rem' }} className="fw-bold">
              Bagian 3: 5 Produk Terlaris
            </h2>
          </div>
          <Card.Title>Produk Dataran</Card.Title>
        <Contentisilaporanbulananprodukterlarisdataran />

        <Card.Title>Produk Dinding</Card.Title>
        <Contentisilaporanbulananprodukterlarisdinding />
    </div>
  )
}

export default Contentisilaporanbulananbagian3