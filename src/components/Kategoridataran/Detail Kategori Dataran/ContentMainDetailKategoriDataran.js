import React from "react";
import { Row, Col } from "react-bootstrap";
import ContentInformasiDetailKategoriDataran from "./Isi Detail Kategori/ContentInformasiDetailKategoriDataran";
import ContentGambarKategoriDataran from "./Isi Detail Kategori/ContentGambarKategoriDataran";
import ContentListProdukDetailKategoriDataran from "./Isi Detail Kategori/ContentListProdukDetailKategoriDataran";

function ContentMainDetailKategoriDataran() {
  return (
    <div>
      <div className="pagetitle">
        <h1>Detail Kategori Sofa</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active">Detail Kategori Sofa</li>
          </ol>
        </nav>
      </div>
      <Row>
        <Col className="col-lg-8 col-sm-12">
          {/*  */}
          <ContentInformasiDetailKategoriDataran />
        </Col>
        <Col className="col-lg-4 col-sm-12">
          {/*  */}
          <ContentGambarKategoriDataran />
        </Col>
      </Row>
<ContentListProdukDetailKategoriDataran />
    </div>
  );
}

export default ContentMainDetailKategoriDataran;
