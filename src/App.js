import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboardadmin from "./pages/Halaman Dashboard/Dashboardadmin";
import Loginadmin from "./pages/Halaman Login Admin/Loginadmin"

import Produkdataranadmin from "./pages/Halaman Produk/Produk Dataran/Produkdataranadmin"
import Tambahprodukdataran from "./pages/Halaman Produk/Produk Dataran/Tambah Produk Dataran/Tambahprodukdataran";
import DetailProdukDataran from "./pages/Halaman Produk/Produk Dataran/DetailProdukDataran";

import Produkdindingadmin from "./pages/Halaman Produk/Produk Dinding/Produkdindingadmin";
import Tambahprodukdinding from "./pages/Halaman Produk/Produk Dinding/Tambah Produk Dinding/Tambahprodukdinding";
import DetailProdukDinding from "./pages/Halaman Produk/Produk Dinding/DetailProdukDinding"; 

import Kategoridataranadmin from "./pages/Halaman Kategori/Kategori Dataran/Kategoridataranadmin"
import Tambahkategoridataran from "./pages/Halaman Kategori/Kategori Dataran/Tambah Kategori Dataran/Tambahkategoridataran";
import DetailKategoriDataran from "./pages/Halaman Kategori/Kategori Dataran/DetailKategoriDataran";

import Kategoridindingadmin from "./pages/Halaman Kategori/Kategori Dinding/Kategoridindingadmin"
import Tambahkategoridinding from "./pages/Halaman Kategori/Kategori Dinding/Tambah Kategori Dinding/Tambahkategoridinding";
import DetailKategoriDinding from "./pages/Halaman Kategori/Kategori Dinding/DetailKategoriDinding";

import Dataakunadmin from "./pages/Halaman Data Akun/Admin/Data Akun/Dataakunadmin";
import Datadetailakunadmin from "./pages/Halaman Data Akun/Admin/Detail Akun/Datadetailakunadmin"
import Tambahadmin from "./pages/Halaman Data Akun/Admin/Tambah Admin/Tambahadmin";

import Dataakunpelanggan from "./pages/Halaman Data Akun/Pelanggan/Data Akun/Dataakunpelanggan";
import Detailakunpelanggan from "./pages/Halaman Data Akun/Pelanggan/Detail Akun/Detailakunpelanggan";
import Detailakunpelangganyangdihapus from "./pages/Halaman Data Akun/Pelanggan/Detail Akun/Detailakunpelangganyangdihapus";

import Ratingdanulasanpelanggan from "./pages/Halaman Rating dan Ulasan/Ratingdanulasanpelanggan";

import Transaksisudahbayar from "./pages/Halaman Transaksi/Transaksi Sudah Dibayar/Transaksisudahbayar";
import Transaksibelumbayar from "./pages/Halaman Transaksi/Transaksi Belum Dibayar/Transaksibelumbayar";

import Transaksidibatalkan from "./pages/Halaman Transaksi/Transaksi Dibatalkan/Transaksidibatalkan";

import Detailtransaksibelumdibayar from "./pages/Halaman Transaksi/Transaksi Belum Dibayar/Detail Transaksi Belum Dibayar/Detailtransaksibelumdibayar";
import Detailtransaksibelumbayardiskon from "./pages/Halaman Transaksi/Transaksi Belum Dibayar/Detail Transaksi Belum Dibayar/Detailtransaksibelumbayardiskon";

import Detailtransaksisudahdibayar from "./pages/Halaman Transaksi/Transaksi Sudah Dibayar/Detail Transaksi Sudah Dibayar/Detailtransaksisudahdibayar";
import Detailtransaksisudahbayardiskon from "./pages/Halaman Transaksi/Transaksi Sudah Dibayar/Detail Transaksi Sudah Dibayar/Detailtransaksisudahbayardiskon";

import Detailtransaksikadeluarsa from "./pages/Halaman Transaksi/Transaksi Kadeluarsa/Detail Transaksi Kadeluarsa/Detailtransaksikadeluarsa";
import Detailtransaksikadeluarsadiskon from "./pages/Halaman Transaksi/Transaksi Kadeluarsa/Detail Transaksi Kadeluarsa/Detailtransaksikadeluarsadiskon";

import Detailtransaksidibatalkan from "./pages/Halaman Transaksi/Transaksi Dibatalkan/Detail Transaksi Dibatalkan/Detailtransaksidibatalkan";
import Detailtransaksidibatalkandiskon from "./pages/Halaman Transaksi/Transaksi Dibatalkan/Detail Transaksi Dibatalkan/Detailtransaksidibatalkandiskon";

import Laporanharianadmin from "./pages/Halaman Laporan/Laporan Harian/Laporanharianadmin";
import Laporanbulananadmin from "./pages/Halaman Laporan/Laporan Bulanan/Laporanbulananadmin";
import Laporantahunanadmin from "./pages/Halaman Laporan/Laporan Tahunan/Laporantahunanadmin";

import Programflashsaleadmin from "./pages/Halaman Program Flash Sale/Programflashsaleadmin";
import Tambahflashsale from "./pages/Halaman Program Flash Sale/Tambah Flash Sale/Tambahflashsale";
import AnalisisFlashSale from "./pages/Halaman Program Flash Sale/Analisis Flash Sale/AnalisisFlashSale";

import Profiladmin from "./pages/Halaman Profil Admin/Profiladmin";

import Outputhasilprintdatapelanggan from "./pages/Halaman Output/Data Akun/Outputhasilprintdatapelanggan";

import Outputhasilprintdatatransaksibelumbayar from "./pages/Halaman Output/Transaksi/Outputhasilprintdatatransaksibelumbayar";
import Outputhasilprintdatatransaksisudahbayar from "./pages/Halaman Output/Transaksi/Outputhasilprintdatatransaksisudahbayar";
import Outputhasilprintdatatransaksikadeluarsadandibatalkan from "./pages/Halaman Output/Transaksi/Outputhasilprintdatatransaksikadeluarsadandibatalkan";
import Outputhasilprintprodukdataran from "./pages/Halaman Output/Produk/Produk Dataran/Outputhasilprintprodukdataran";
import Outputhasilprintprodukdinding from "./pages/Halaman Output/Produk/Produk Dinding/Outputhasilprintprodukdinding";
import Outputhasilprintkategoridataran from "./pages/Halaman Output/Kategori/Kategori Dataran/Outputhasilprintkategoridataran";
import Outputhasilprintkategoridinding from "./pages/Halaman Output/Kategori/Kategori Dinding/Outputhasilprintkategoridinding";
import Outputhasilprintratingdanulasan from "./pages/Halaman Output/Rating dan ulasan/Outputhasilprintratingdanulasan";
import Outputhasilprintlaporanharian from "./pages/Halaman Output/Laporan/Laporan Harian/Outputhasilprintlaporanharian";
import Outputhasilprintlaporanbulanan from "./pages/Halaman Output/Laporan/Laporan Bulanan/Outputhasilprintlaporanbulanan";
import Outputhasilprintlaporantahunan from "./pages/Halaman Output/Laporan/Laporan Tahunan/Outputhasilprintlaporantahunan";

import Invoicepelanggan from "./pages/Halaman Invoice/Invoicepelanggan";

import HalamanTidakAdaInternet from "./pages/Halaman Error Handling/HalamanTidakAdaInternet";
import Halaman404Notfound from "./pages/Halaman Error Handling/Halaman404Notfound";



function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Dashboardadmin />} />
      <Route path="/Loginadmin" element={<Loginadmin />} />

      <Route path="/Produkdataranadmin" element={<Produkdataranadmin />} />
      <Route path="/Tambahprodukdataran" element={<Tambahprodukdataran />} />
      <Route path="/DetailProdukDataran" element={<DetailProdukDataran />} />

      <Route path="/Produkdindingadmin" element={<Produkdindingadmin />} />
      <Route path="/DetailProdukDinding" element={<DetailProdukDinding />} />
      <Route path="/Tambahprodukdinding" element={<Tambahprodukdinding />} />

      <Route path="/Kategoridataranadmin" element={<Kategoridataranadmin />} />
      <Route path="/Tambahkategoridataran" element={<Tambahkategoridataran />} />
      <Route path="/DetailKategoriDataran" element={<DetailKategoriDataran />} />

      <Route path="/Kategoridindingadmin" element={<Kategoridindingadmin />} />
      <Route path="/Tambahkategoridinding" element={<Tambahkategoridinding />} />
      <Route path="/DetailKategoriDinding" element={<DetailKategoriDinding />} />

      <Route path="/Dataakunadmin" element={<Dataakunadmin />} />
      <Route path="/Datadetailakunadmin" element={<Datadetailakunadmin/>} />
      <Route path="/Ratingdanulasanpelanggan" element={<Ratingdanulasanpelanggan/>} />


      <Route path="/Dataakunpelanggan" element={<Dataakunpelanggan/>} />
      <Route path="/Tambahadmin" element={<Tambahadmin/>} />
      <Route path="/Detailakunpelanggan" element={<Detailakunpelanggan/>} />
      <Route path="/Detailakunpelangganyangdihapus" element={<Detailakunpelangganyangdihapus/>} />

      <Route path="/Transaksisudahbayar" element={<Transaksisudahbayar/>} />
      <Route path="/Transaksibelumbayar" element={<Transaksibelumbayar/>} />
      <Route path="/Transaksidibatalkan" element={<Transaksidibatalkan/>} />

       <Route path="/Detailtransaksibelumdibayar" element={<Detailtransaksibelumdibayar/>} />
       <Route path="/Detailtransaksibelumbayardiskon" element={<Detailtransaksibelumbayardiskon/>} />

      <Route path="/Detailtransaksisudahdibayar" element={<Detailtransaksisudahdibayar/>} />
      <Route path="/Detailtransaksisudahbayardiskon" element={<Detailtransaksisudahbayardiskon/>} />

      <Route path="/Detailtransaksikadeluarsa" element={<Detailtransaksikadeluarsa/>} />
      <Route path="/Detailtransaksikadeluarsadiskon" element={<Detailtransaksikadeluarsadiskon/>} />


      <Route path="/Detailtransaksidibatalkan" element={<Detailtransaksidibatalkan/>} />
      <Route path="/Detailtransaksidibatalkandiskon" element={<Detailtransaksidibatalkandiskon/>} />


      <Route path="/Laporanharianadmin" element={<Laporanharianadmin/>} />
      <Route path="/Laporanbulananadmin" element={<Laporanbulananadmin/>} />
      <Route path="/Laporantahunanadmin" element={<Laporantahunanadmin/>} />

      <Route path="/Programflashsaleadmin" element={<Programflashsaleadmin/>} />
      <Route path="/Tambahflashsale" element={<Tambahflashsale/>} />
      <Route path="/AnalisisFlashSale" element={<AnalisisFlashSale/>} />

      <Route path="/Outputhasilprintdatapelanggan" element={<Outputhasilprintdatapelanggan/>} />
      
      <Route path="/Outputhasilprintdatatransaksibelumbayar" element={<Outputhasilprintdatatransaksibelumbayar/>} />
      <Route path="/Outputhasilprintdatatransaksisudahbayar" element={<Outputhasilprintdatatransaksisudahbayar/>} />
      <Route path="/Outputhasilprintdatatransaksikadeluarsadandibatalkan" element={<Outputhasilprintdatatransaksikadeluarsadandibatalkan/>} />
      <Route path="/Outputhasilprintprodukdataran" element={<Outputhasilprintprodukdataran/>} />
      <Route path="/Outputhasilprintprodukdinding" element={<Outputhasilprintprodukdinding/>} />
      <Route path="/Outputhasilprintkategoridataran" element={<Outputhasilprintkategoridataran/>} />
      <Route path="/Outputhasilprintkategoridinding" element={<Outputhasilprintkategoridinding/>} />
      <Route path="/Outputhasilprintratingdanulasan" element={<Outputhasilprintratingdanulasan/>} />

      <Route path="/Outputhasilprintlaporanharian" element={<Outputhasilprintlaporanharian/>} />
      <Route path="/Outputhasilprintlaporanbulanan" element={<Outputhasilprintlaporanbulanan/>} />
      <Route path="/Outputhasilprintlaporantahunan" element={<Outputhasilprintlaporantahunan/>} />

      <Route path="/Profiladmin" element={<Profiladmin/>} />
    
      <Route path="/Invoicepelanggan" element={<Invoicepelanggan/>} />

      <Route path="/HalamanTidakAdaInternet" element={<HalamanTidakAdaInternet/>} />
      <Route path="/Halaman404Notfound" element={<Halaman404Notfound/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App