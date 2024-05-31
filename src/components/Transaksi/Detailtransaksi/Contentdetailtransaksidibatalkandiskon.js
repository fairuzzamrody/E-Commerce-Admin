import React from "react";
import { Card } from "react-bootstrap";
import ContentdetailtransaksidibatalkanPCdiskon from "./Componen Detail transaksi dibatalkan/ContentdetailtransaksidibatalkanPCdiskon";

function Contentdetailtransaksidibatalkandiskon() {
    return (
        <div>
        <div className="pagetitle">
          <h1>Detail Akun Transaksi Dibatalkan</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active">
                Detail Akun Transaksi Dibatalkan
              </li>
            </ol>
          </nav>
        </div>
    
        <section className="section dashboard">
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
    <ContentdetailtransaksidibatalkanPCdiskon />
           </div>
    
 
        </section>
      </div>
      )
    }

export default Contentdetailtransaksidibatalkandiskon