import React from 'react'
import { Col, Row } from "react-bootstrap";
import ContentinformasiDetailProdukAktifDinding from './Isi Detail Produk/ContentinformasiDetailProdukAktifDinding';
import ContentDetailProdukAugmentedRealityDinding from './Isi Detail Produk/ContentDetailProdukAugmentedRealityDinding';
import ContentDetailProdukGambarThumbnailDinding from './Isi Detail Produk/ContentDetailProdukGambarThumbnailDinding';
import ContentDetailProdukGambarPendukungDinding from './Isi Detail Produk/ContentDetailProdukGambarPendukungDinding';

function ContentMainDetailProdukDinding() {
  return (
    <div>
      <div className="pagetitle">
        <h1>Detail Produk Kabinet Dinding Arab</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active">Detail Produk Kabinet Dinding Arab</li>
          </ol>
        </nav>
      </div>
      <Row>
        <Col className="col-lg-8 col-sm-12">
        <ContentinformasiDetailProdukAktifDinding />
          {/* <ContentInformasiDetailProdukDiarsipkanDinding /> */}
          {/* <ContentinformasiDetailProdukHabisDinding /> */}
          {/* <ContentInformasiDetailProdukSegeraHabisDinding /> */}
          <ContentDetailProdukAugmentedRealityDinding />
        </Col>
        <Col className="col-lg-4 col-sm-12">
          <ContentDetailProdukGambarThumbnailDinding />
          <ContentDetailProdukGambarPendukungDinding />
        </Col>
      </Row>
    </div>
  );
}

export default ContentMainDetailProdukDinding