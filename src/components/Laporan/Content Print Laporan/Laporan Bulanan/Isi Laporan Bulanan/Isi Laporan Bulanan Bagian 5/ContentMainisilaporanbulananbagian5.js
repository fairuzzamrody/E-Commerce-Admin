import React from 'react'

// import ContentisiLaporanBulananGrafikPenilaian from './Grafik Penilaian/ContentisiLaporanBulananGrafikPenilaian'
import ContentisiGrafikpenilaian from '../Isi Laporan Bulanan Bagian 5/Grafik Penilaian/ContentisiGrafikPenilaian'
function ContentMainisilaporanbulananbagian5() {
  return (
    <div>
        <div className="mt-4">
            <h2 style={{ fontSize: '1.5rem' }} className="fw-bold">
              Bagian 5:  Grafik
            </h2>
          </div>
    
        <ContentisiGrafikpenilaian />
    </div>
  )
}

export default ContentMainisilaporanbulananbagian5