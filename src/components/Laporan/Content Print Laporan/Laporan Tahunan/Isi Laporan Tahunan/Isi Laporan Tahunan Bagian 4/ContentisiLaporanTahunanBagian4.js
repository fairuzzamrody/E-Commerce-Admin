import React from 'react'
import ContentisiLaporanTahunanKategoriTerlarisDataran from './ContentisiLaporanTahunanKategoriTerlarisDataran'
import ContentisiLaporanTahunanKategoriTerlarisDinding from './ContentisiLaporanTahunanKategoriTerlarisDinding'
import { Card } from 'react-bootstrap'

function ContentisiLaporanTahunanBagian4() {
  return (
    <div>
        
          <Card.Title>Kategori Dataran</Card.Title>
        <ContentisiLaporanTahunanKategoriTerlarisDataran />
        <Card.Title>Kategori Dinding</Card.Title>

        <ContentisiLaporanTahunanKategoriTerlarisDinding />
    </div>
  )
}

export default ContentisiLaporanTahunanBagian4