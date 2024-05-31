import React from 'react'
import ContentisiLaporanTahunanProdukTerlarisDataran from './ContentisiLaporanTahunanProdukTerlarisDataran'
import ContentisiLaporanTahunanProdukTerlarisDinding from './ContentisiLaporanTahunanProdukTerlarisDinding'
import { Card } from 'react-bootstrap'

function ContentisiLaporanTahunanBagian3() {
  return (
    <div>
        <div className="mt-4">
            <h2 style={{ fontSize: '1.5rem' }} className="fw-bold">
              Bagian 4: 5 Kategori Terlaris
            </h2>
          </div>
          <Card.Title>Furnitur Dataran</Card.Title>
        <ContentisiLaporanTahunanProdukTerlarisDataran />
        <Card.Title>Furnitur Dinding</Card.Title>
        <ContentisiLaporanTahunanProdukTerlarisDinding />
    </div>
  )
}

export default ContentisiLaporanTahunanBagian3