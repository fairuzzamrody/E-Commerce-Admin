import React from "react";
import { Col, Row } from "react-bootstrap";

import ContentDetailProdukGambarThumbnail from "./Isi Detail Produk/ContentDetailProdukGambarThumbnail";
import ContentDetailProdukGambarPendukung from "./Isi Detail Produk/ContentDetailProdukGambarPendukung";
import ContentDetailProdukAugmentedReality from "./Isi Detail Produk/ContentDetailProdukAugmentedReality";
import ContentinformasiDetailProdukAktif from "./Isi Detail Produk/ContentinformasiDetailProdukAktif";
import ContentInformasiDetailProdukDiarsipkan from "./Isi Detail Produk/ContentInformasiDetailProdukDiarsipkan";
import ContentinformasiDetailProdukHabis from "./Isi Detail Produk/ContentinformasiDetailProdukHabis";
import ContentInformasiDetailProdukSegeraHabis from "./Isi Detail Produk/ContentInformasiDetailProdukSegeraHabis";

function ContentMainDetailProdukDataran() {
  return (
    <div>
      <div className="pagetitle">
        <h1>Detail Produk Sofa Arab</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active">Detail Produk Sofa Arab</li>
          </ol>
        </nav>
      </div>
      <Row>
        <Col className="col-lg-8 col-sm-12">
          <ContentinformasiDetailProdukAktif />
          {/* <ContentInformasiDetailProdukDiarsipkan /> */}
          {/* <ContentinformasiDetailProdukHabis /> */}
          {/* <ContentInformasiDetailProdukSegeraHabis /> */}
          <ContentDetailProdukAugmentedReality />
        </Col>
        <Col className="col-lg-4 col-sm-12">
          <ContentDetailProdukGambarThumbnail />
          <ContentDetailProdukGambarPendukung />
        </Col>
      </Row>
    </div>
  );
}

export default ContentMainDetailProdukDataran;
