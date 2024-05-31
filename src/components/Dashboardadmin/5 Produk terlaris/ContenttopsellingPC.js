import React, { useState } from 'react';
import { Container, Table } from 'react-bootstrap';

function ContenttopsellingPC() {
    const [selectedFilter, setSelectedFilter] = useState('Hari Ini');

    const handleFilterChange = (filter) => {
      setSelectedFilter(filter);
    };
  
    const FilterEnum = {
      HARI_INI: "Hari Ini",
      BULAN_INI: "Bulan Ini",
      TAHUN_INI: "Tahun Ini",
    };
  
    // Daftar produk dengan data terjual
    const topSellingProducts = [
      {
        id: 1,
        name: 'Meja Gaming',
        category: 'Meja',
        varian : "-",
        price: 'Rp 1.200.000',
        sold: 20,
        image: 'assets/assets/img/product-1.jpg',
        KategoriDetail : "Dataran",
      },
      {
        id: 2,
        name: 'Meja Rias Aesthetic',
        varian : "Kuning",
        category: 'Meja',
        price: 'Rp 1.200.000',
        sold: 15,
        image: 'assets/assets/img/product-2.jpg',
        KategoriDetail : "Dataran",


      },
      {
        id: 3,
        name: 'Kabinet Dinding',
        varian : "Putih",
        category: 'Kabinet Dinding',
        price: 'Rp 1.200.000',
        sold: 10,
        image: 'assets/assets/img/product-4.jpg',
        KategoriDetail : "Dinding",


      },
      {
        id: 4,
        name: 'Kabinet Jawa',
        varian : "-",
        category: 'Kabinet Dinding',
        price: 'Rp 1.200.000',
        sold: 8,
        image: 'assets/assets/img/product-5.jpg',
        KategoriDetail : "Dinding",


      },
      {
        id: 5,
        name: 'Kabinet Jati Asli',
        varian : "-",
        category: 'Kabinet Dinding',
        price: 'Rp 1.200.000',
        sold: 6,
        image: 'assets/assets/img/product-3.jpg',
        KategoriDetail : "Dinding",


      },
      // Tambahkan produk lainnya di sini
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
    
    // Filter produk yang terlaris (terjual lebih dari 5x)
    const filteredTopSellingProducts = topSellingProducts.filter(
      (product) => product.sold > 5
    );
  
    return (
      <div>
        <div className="card top-selling overflow-auto">
          <div className="filter">
            
          </div>
  
          <div className="card-body pb-0">
            <h5 className="card-title">
              Top 5 Produk Terlaris (Terjual lebih dari 10)
            </h5>
            {/* <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '35vh' }}>
  <p style={{ fontSize : "1.4vw" }}>Belum ada data.</p>
</Container>   */}
            <Table bordered hover>
              <thead>
                <tr>
                  <th className="text-center">Produk</th>
                  <th className="text-center">Nama Produk</th>
                  <th className="text-center">Kategori</th>
                  <th className="text-center">Harga</th>
                  <th className="text-center">Terjual</th>

                </tr>
              </thead>
              <tbody>
                {filteredTopSellingProducts.map((product) => (
                  <tr key={product.id}>
                    <td className="text-center">
                  
                        <img src={product.image} alt="" />
                     
                    </td>
                    <td className='text-center'>{product.name}<br/>
                    <span>Varian : {product.varian}</span></td>
                    <td className="text-center fw-bold">
                      {product.category}<br />
                    <small>{product.KategoriDetail}</small>
                    </td>
                    <td className="text-center">{product.price}</td>
                    <td className="text-center fw-bold">{product.sold}x</td>

                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
        </div>
    );
  }
export default ContenttopsellingPC