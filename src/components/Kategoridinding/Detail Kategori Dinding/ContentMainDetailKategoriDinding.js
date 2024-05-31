import React from 'react'
import { Row, Col } from "react-bootstrap";
import ContentInformasiDetailKategoriDindingAktif from './Isi Detail Kategori Dinding/ContentInformasiDetailKategoriDindingAktif';
import ContentGambarKategoriDinding from './Isi Detail Kategori Dinding/ContentGambarKategoriDinding';
import ContentListProdukDetailKategoriDinding from './Isi Detail Kategori Dinding/ContentListProdukDetailKategoriDinding';

function ContentMainDetailKategoriDinding() {
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
              <ContentInformasiDetailKategoriDindingAktif />
            </Col>
            <Col className="col-lg-4 col-sm-12">
              {/*  */}
              <ContentGambarKategoriDinding />
            </Col>
          </Row>
    
          <ContentListProdukDetailKategoriDinding />
        </div>
      );
    }

export default ContentMainDetailKategoriDinding