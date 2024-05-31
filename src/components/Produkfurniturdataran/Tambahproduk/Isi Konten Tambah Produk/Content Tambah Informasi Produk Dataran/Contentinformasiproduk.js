import React from "react";
import ContentInformasiProdukPC from "./ContentInformasiProdukPC";
import ContentInformasiProdukMobile from "./ContentInformasiProdukMobile";

function Contentinformasiproduk() {

  return (
    <div>
      <div className="d-none d-md-block">
      <ContentInformasiProdukPC />

      </div>
      <div className="d-block d-lg-none">
      <ContentInformasiProdukMobile />

      </div>
    </div>
  );
}

export default Contentinformasiproduk;
