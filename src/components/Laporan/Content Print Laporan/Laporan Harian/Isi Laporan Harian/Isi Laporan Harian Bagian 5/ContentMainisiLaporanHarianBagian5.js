import React from 'react'
// import ContentisilaporanharianGrafikPenilaian from './Grafik Penilaian/ContentisilaporanharianGrafikPenilaian'
import ContentisiGrafikPenilaian from '../Isi Laporan Harian Bagian 5/Grafik Penilaian/ContentisiGrafikPenilaian'

function ContentMainisiLaporanHarianBagian5() {
  return (
    <div>
        <div className="mt-4">
            <h2 style={{ fontSize: '1.5rem' }} className="fw-bold">
              Bagian 5: Grafik
            </h2>
          </div>
        
        <ContentisiGrafikPenilaian />
    </div>
  )
}

export default ContentMainisiLaporanHarianBagian5