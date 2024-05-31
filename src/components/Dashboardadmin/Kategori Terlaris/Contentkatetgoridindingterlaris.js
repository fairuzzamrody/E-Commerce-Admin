import React, { useState } from "react";
import { Container, Table } from "react-bootstrap";

function Contentkatetgoridindingterlaris() {
  const [selectedFilter, setSelectedFilter] = useState("Hari Ini");

  const FilterEnum = {
    HARI_INI: "Hari Ini",
    BULAN_INI: "Bulan Ini",
    TAHUN_INI: "Tahun Ini",
  };

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
  

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  // Data produk dalam bentuk array
  const products = [
    {
      image: "assets/assets/img/product-1.jpg",
      name: "Kabinet Dinding",
      totalProducts: "12 Produk",
      totalSold: "10x Terjual",
    },
    {
      image: "assets/assets/img/product-2.jpg",
      name: "Jawa Is Key",
      totalProducts: "8 Produk",
      totalSold: "8x Terjual",
    },
    {
      image: "assets/assets/img/product-3.jpg",
      name: "Hiasan Dinding",
      totalProducts: "6 Produk",
      totalSold: "5x Terjual",
    },
    // Tambahkan produk lainnya ke dalam array
  ];

  return (
    <div>
      <div className="card top-selling overflow-auto">
        <div className="filter">
          <a className="icon" data-bs-toggle="dropdown">
            <i className="bi bi-three-dots"></i>
          </a>
          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
            <li className="dropdown-header text-start">
              <h6>Filter</h6>
            </li>
            {Object.values(FilterEnum).map((filter) => (
              <li key={filter}>
                <a
                  className={`dropdown-item ${
                    selectedFilter === filter ? "active" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleFilterChange(filter);
                  }}
                >
                  {filter} ({getFormattedDate(filter)})
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="card-body pb-0">
          <h5 className="card-title">
            Kategori Dinding <span>| {selectedFilter}</span>
          </h5>
          <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '53vh' }}>
  <p style={{ fontSize : "1.4vw" }}>Belum ada data.</p>
  {/* {!isLoading && <Pesanansaya />} */}
  {/* Menampilkan Pesanansaya setelah loading */}
</Container>
          {/* <Table bordered hover>
            <thead>
              <tr>
                <th>Kategori</th>
                <th>Nama</th>
                <th scope="col">Total Produk</th>
                <th scope="col">Total Terjual</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>
                    <a href="#">
                      <img src={product.image} alt="" />
                    </a>
                  </td>
                  <td style={{ fontSize: "0.8rem" }}>{product.name}</td>
                  <td>{product.totalProducts}</td>
                  <td className="fw-bold">{product.totalSold}</td>
                </tr>
              ))}
            </tbody>
          </Table> */}
        </div>
      </div>
    </div>
  );
}

export default Contentkatetgoridindingterlaris;
