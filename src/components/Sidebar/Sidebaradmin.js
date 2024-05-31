import React from "react";

function SidebarAdmin() {
  return (
    <div>
      {/* Sidebar */}
      <aside id="sidebar" className="sidebar">
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
          <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
        <i class="bi bi-box"></i><span>Produk</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="components-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="/Produkdataranadmin">
              <i class="bi bi-circle"></i><span>Furnitur Pada Dataran</span>
            </a>
          </li>
          <li>
            <a href="/Produkdindingadmin">
              <i class="bi bi-circle"></i><span>Furnitur Pada Dinding</span>
            </a>
          </li>
        </ul>
      </li>
          {/* End Produk Nav */}

          {/* Kategori */}
          <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-journal-text"></i><span>Kategori</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="forms-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="/Kategoridataranadmin">
              <i class="bi bi-circle"></i><span>Kategori Pada Dataran</span>
            </a>
          </li>
          <li>
            <a href="/Kategoridindingadmin">
              <i class="bi bi-circle"></i><span>Kategori Pada Dinding</span>
            </a>
          </li>
        </ul>
      </li>
          {/* End Kategori Nav */}

          
          {/* Akun & Ulasan */}
          <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
        {/* Ini tanda bahwa ada ulasan masuk */}


<i class="bi bi-layout-text-window-reverse"></i><span>Akun & Ulasan</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="tables-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="/Dataakunpelanggan">
              <i class="bi bi-circle"></i><span> Data Akun </span>
            </a>
          </li>
          <li>
            <a href="/Ratingdanulasanpelanggan">
              <i class="bi bi-circle"></i><span>Rating dan Ulasan</span>
            </a>
          </li>
        </ul>
      </li>
         
          {/* End Akun & Ulasan Nav */}

         

          {/* Transaksi */}
          <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">

        {/* Ini tanda bahwa ada pesanan masuk */}

        <i className="bi bi-bar-chart"></i><span>Transaksi</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="charts-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="/Transaksibelumbayar">
              <i class="bi bi-circle"></i><span>Belum Di Bayar </span>
            </a>
          </li>
          <li>
            <a href="/Transaksisudahbayar">
              <i class="bi bi-circle"></i><span>Sudah Di Bayar </span>
            </a>
          </li>
          <li>
            <a href="/Transaksidibatalkan">
              <i class="bi bi-circle"></i><span> Dibatalkan </span>
            </a>
          </li>
        </ul>
      </li>
          
          {/* End Transaksi Nav */}
          {/* Laporan */}
           <li class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
        <i className="bi bi-graph-up-arrow"></i><span>Laporan</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="icons-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="/Laporanharianadmin">
              <i class="bi bi-circle"></i><span>Laporan Harian</span>
            </a>
          </li>
          <li>
            <a href="/Laporanbulananadmin">
              <i class="bi bi-circle"></i><span>Laporan Bulanan</span>
            </a>
          </li>
          <li>
            <a href="/Laporantahunanadmin">
              <i class="bi bi-circle"></i><span>Laporan Tahunan</span>
            </a>
          </li>
        </ul>
      </li>
          {/* End Laporan Nav */}

          {/* Program Flash Sale */}
          <li className="nav-item">
            <a
              className="nav-link collapsed"
              data-target="#flashsale-nav"
              href="/Programflashsaleadmin"
            >
              <i className="bi bi-lightning-charge"></i>
              <span>Program Flash Sale</span>
            </a>
          </li>
        </ul>
      </aside>
      {/* End Sidebar */}
    </div>
  );
}

export default SidebarAdmin;
