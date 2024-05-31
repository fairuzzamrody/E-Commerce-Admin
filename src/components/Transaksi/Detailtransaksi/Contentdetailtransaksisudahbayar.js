import React from "react";
import { Button, Card, } from "react-bootstrap";
import { Link } from "react-router-dom";
import ContentdetailtransaksisudahbayarPC from "./Componen Detail transaksi sudah bayar/ContentdetailtransaksisudahbayarPC";

function Contentdetailtransaksisudahbayar() {
  return (
    <div>
      <div className="pagetitle">
        <h1>Sudah Di bayar</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active">
              Detail Akun Transaksi Sudah Dibayar
            </li>
          </ol>
        </nav>
      </div>

      <section className="section dashboard">
      <h5 className="card-title">Informasi Identitas Pelanggan</h5>

        <div className="row d-flex flex-wrap justify-content-between">
          <div className="col-12 mb-0">
            <div className="card large-card">
              <div className="card-body">
<Card.Title><i class="bi bi-geo-alt-fill"></i> Informasi Pelanggan</Card.Title>
<p style={{ marginBottom : "2px" }} className="text-muted">Jhon Doe 1</p>


<p style={{ marginBottom : "2px" }} className="text-muted" >JhonDoe1@gmail.com</p>


<p style={{ marginBottom : "2px" }} className="text-muted">081213133187</p>

<p className="text-muted">Jl. Mangga BesarSikep, Keboansikep, Kec. Gedangan, Kabupaten Sidoarjo, Jawa Timur 61254</p>


              </div>
            </div>
            
          </div>
        </div>
        <h5 className="card-title" style={{ marginTop: "-25px" }}>Detail Produk yang Dipesan</h5>

          <div className="d-none d-md-block">
                                 <ContentdetailtransaksisudahbayarPC />
                 </div>

       
    <div className="mt-3 d-flex justify-content-end">
    <Link to="/Invoicepelanggan">
    <Button>Lihat Invoice <i class="bi bi-chevron-right"></i></Button>
    </Link>
    </div>
      </section>
    </div>
  );
}

export default Contentdetailtransaksisudahbayar;
