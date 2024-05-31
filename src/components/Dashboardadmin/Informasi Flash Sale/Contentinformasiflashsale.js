import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

function Contentinformasiflashsale() {
  const [selectedFilter, setSelectedFilter] = useState('Hari Ini');

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const FilterEnum = {
    HARI_INI: "Hari Ini",
    BULAN_INI: "Bulan Ini",
    TAHUN_INI: "Tahun Ini",
  };
  const flashSales = [
    {
      title: 'Flash Sale 1.1',
      totalProducts: 8,
      status: 'Sedang Berjalan',
      dateRange: '2023-05-12 12:00 - 2023-05-12 13:59',
    },
    {
      title: 'Flash Sale 2.2',
      totalProducts: 12,
      status: 'Akan Datang',
      dateRange: '2023-05-12 13:00 - 2023-05-12 15:59',
    },
    // Add more flash sales here
  ];

  const getFormattedDate = (filter) => {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = currentDate.getFullYear();
  
    const indonesianMonthNames = [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember',
    ];
  
    const indonesianDayNames = [
      'Minggu',
      'Senin',
      'Selasa',
      'Rabu',
      'Kamis',
      'Jumat',
      'Sabtu',
    ];
  
    switch (filter) {
      case FilterEnum.HARI_INI:
        const dayName = indonesianDayNames[currentDate.getDay()];
        return `${dayName}, ${day}`;
      case FilterEnum.BULAN_INI:
        return indonesianMonthNames[currentDate.getMonth()];
      case FilterEnum.TAHUN_INI:
        return year;
      default:
        return `${day}/${month}/${year}`;
    }
  };  

  return (
    <div>
      <div className="card info-card revenue-card">
        <div className="filter">
          
        </div>

        <div className="card-body" style={{ marginBottom: "-15px" }}>
          <h5 className="card-title">
            Flash Sale Sedang Berjalan
          </h5>
          {/* <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '52vh' }}>
  <p style={{ fontSize : "1.4vw" }}>Belum ada data.</p>
</Container>    */}


          {flashSales.map((flashSale, index) => (
            <div key={index}>
              <div className="d-flex align-items-center mb-3">
                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                  <i className="bi bi-lightning-charge"></i>
                </div>
                <div className="ps-3">
                  <h6 style={{ fontSize: '1.2rem' }}>{flashSale.title}</h6>
                  <span className="text-success small pt-1 fw-bold">
                    {flashSale.totalProducts} Produk Total,
                  </span>{' '}
        
                  <br />
                  <span className="text-muted small pt-2 ps-1">
                    {flashSale.status}
                  </span>
                  <br />
                  <span className="text-muted small pt-2 ps-1">
                    {flashSale.dateRange}
                  </span>
                  
                </div>
              </div>
              {index < flashSales.length - 1 && <hr />}
            </div>
          ))} 
        </div>
      </div>
    </div>
  );
}

export default Contentinformasiflashsale;
