import React from "react";
import { Table, Image, Card } from "react-bootstrap";
import ContentLaporanProdukTerlarisDataranBulanan from "./ContentLaporanProdukTerlarisDataranBulanan";
import ContentLaporanProdukTerlarisDindingBulanan from "./ContentLaporanProdukTerlarisDindingBulanan";

function Contentlaporanprodukterlaris() {
  
  return (
    <div>
    <ContentLaporanProdukTerlarisDataranBulanan />
    <ContentLaporanProdukTerlarisDindingBulanan />
    </div>
  );
}

export default Contentlaporanprodukterlaris;
