import React from 'react'

// import ContentisiLaporanTahunanGrafikPenilaian from './Grafik Penilaian/ContentisiLaporanTahunanGrafikPenilaian'
import ContentisiGrafikPenilaian from '../Isi Laporan Tahunan Bagian 5/Grafik Penilaian/ContentisiGrafikPenilaian'
function ContentMainisiLaporanTahunanBagian5() {
  return (
    <div>
        <div className="mt-4">
            <h2 style={{ fontSize: '1.5rem' }} className="fw-bold">
              Bagian 5:  Grafik
            </h2>
          </div>
          <ContentisiGrafikPenilaian />
    </div>
  )
}

export default ContentMainisiLaporanTahunanBagian5