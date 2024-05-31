import React from 'react';

function Contentsidebaruntukoffcanvas() {
  return (
    <div>
      <ul className="sidebar-nav" id="sidebar-nav">
        {/* Dashboard */}
        <li className="nav-item">
          <a className="nav-link" href="/">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </a>
        </li>
        {/* End Dashboard Nav */}

        {/* Produk */}
        <li className="nav-item">
          <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
            <i className="bi bi-box"></i><span>Produk</span><i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
              <a href="/Produkdataranadmin">
                <i className="bi bi-circle"></i><span>Furnitur Pada Dataran</span>
              </a>
            </li>
            <li>
              <a href="/Produkdindingadmin">
                <i className="bi bi-circle"></i><span>Furnitur Pada Dinding</span>
              </a>
            </li>
          </ul>
        </li>
        {/* End Produk Nav */}

        {/* Kategori */}
        <li className="nav-item">
          <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
            <i className="bi bi-journal-text"></i><span>Kategori</span><i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
              <a href="/Kategoridataranadmin">
                <i className="bi bi-circle"></i><span>Kategori Pada Dataran</span>
              </a>
            </li>
            <li>
              <a href="/Kategoridindingadmin">
                <i className="bi bi-circle"></i><span>Kategori Pada Dinding</span>
              </a>
            </li>
          </ul>
        </li>
        {/* End Kategori Nav */}

        {/* Akun & Ulasan */}
        <li className="nav-item">
          <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
            <span className="badge rounded-pill text-bg-primary me-2">2</span>
            <i className="bi bi-layout-text-window-reverse"></i><span>Akun & Ulasan</span><i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
              <a href="/Dataakunpelanggan">
                <i className="bi bi-circle"></i><span> Data Akun </span>
              </a>
            </li>
            <li>
              <a href="/Ratingdanulasanpelanggan">
                <i className="bi bi-circle"></i><span>Rating dan Ulasan <span className="badge rounded-pill text-bg-primary me-2">2</span></span>
              </a>
            </li>
          </ul>
        </li>
        {/* End Akun & Ulasan Nav */}

        {/* Transaksi */}
        <li className="nav-item">
          <a className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
            <span className="badge rounded-pill text-bg-primary me-2">3</span>
            <i className="bi bi-bar-chart"></i><span>Transaksi</span><i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
              <a href="/Transaksibelumbayar">
                <i className="bi bi-circle"></i><span>Belum Di Bayar <span className="badge rounded-pill text-bg-primary me-2">1</span></span>
              </a>
            </li>
            <li>
              <a href="/Transaksisudahbayar">
                <i className="bi bi-circle"></i><span>Sudah Di Bayar <span className="badge rounded-pill text-bg-primary me-2">1</span></span>
              </a>
            </li>
            <li>
              <a href="/Transaksikadeluarsa">
                <i className="bi bi-circle"></i><span>Kadeluarsa & Dibatalkan <span className="badge rounded-pill text-bg-primary me-2">1</span></span>
              </a>
            </li>
          </ul>
        </li>
        {/* End Transaksi Nav */}

        {/* Laporan */}
        <li className="nav-item">
          <a className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
            <i className="bi bi-graph-up-arrow"></i><span>Laporan</span><i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul id="icons-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
            <li>
              <a href="/Laporanharianadmin">
                <i className="bi bi-circle"></i><span>Laporan Harian</span>
              </a>
            </li>
            <li>
              <a href="/Laporanbulananadmin">
                <i className="bi bi-circle"></i><span>Laporan Bulanan</span>
              </a>
            </li>
            <li>
              <a href="/Laporantahunanadmin">
                <i className="bi bi-circle"></i><span>Laporan Tahunan</span>
              </a>
            </li>
          </ul>
        </li>
        {/* End Laporan Nav */}

        {/* Program Flash Sale */}
        <li className="nav-item">
          <a className="nav-link collapsed" href="/Programflashsaleadmin">
            <i className="bi bi-lightning-charge"></i>
            <span>Program Flash Sale</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contentsidebaruntukoffcanvas;
