import React, { lazy, Suspense } from "react";
import {  Card, Form, FormControl } from "react-bootstrap";

const Contenttabeltransaksisudahbayar = lazy(() => import("./Tabel/Contenttabeltransaksisudahbayar"));

function Contenttransaksisudahbayar() {
  return (
    <div>
      <div className="pagetitle">
        <h1>Transaksi Sudah Dibayar</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active">Transaksi Sudah Dibayar</li>
          </ol>
        </nav>
      </div>

      {/* Card Informasi Atas */}
      <section className="section dashboard">
      <div class="row">
					<div class="col-sm-4">
						<div className="card info-card sales-card">
							{/* Jumlah Pelanggan */}
							<div className="card-body">
								<h5 className="card-title">Sudah Bayar</h5>
								<div className="d-flex align-items-center">
									<div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
									<i class="bi bi-check2-all"></i>
									</div>
									<div className="ps-3">
										<h6>20</h6>
										<span className="text-muted small pt-1">
										Total Sudah Dibayar
										</span>{" "}
										<br />
									</div>
								</div>
							</div>
						</div>
					</div>
					
					<div class="col-sm-4">
						<div className="card info-card customers-card">
							<div className="filter">
								<a className="icon" href="#" data-bs-toggle="dropdown">
									{/* <i className="bi bi-three-dots"></i> */}
								</a>
							</div>
							{/* Jumlah Total Terjual */}
							<div className="card-body">
								<h5 className="card-title">Invoice</h5>
								<div className="d-flex align-items-center">
									<div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
									<i class="bi bi-envelope-paper"></i>
									</div>
									<div className="ps-3">
										<h6>15</h6>
										<span className="text-muted small pt-1">
										Total Invoice
										</span>{" "}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

          {/* Isi Konten Produk Dataran */}
            <Card className="mt-2">
              <Card.Body>
                <div className="d-flex justify-content-between">
                  <Card.Title>
                    List Data Transaksi <br />
                    <span>Manajemen transaksi sudah dibayar</span>
                  </Card.Title>
                  
                </div>
              </Card.Body>
              <Card.Body>
                <div className="d-flex justify-content-end mb-4">
                  <span className="d-flex align-items-center me-2">Filter :{" "}</span>
                  <Form>
                    <FormControl as="select">
                      <option selected disabled>
                        Filter Transaksi
                      </option>
                      <option value="option1">Transaksi Terbaru</option>
                      <option value="option2">Transaksi Terlama</option>
                      <option value="option3">Nominal Tertinggi</option>
                      <option value="option4">Nominal Terendah</option>
                    </FormControl>
                  </Form>
                </div>
                <div className="d-none d-md-block">
                     <Suspense fallback={<div>Loading...</div>}>
                  <Contenttabeltransaksisudahbayar />
                </Suspense>
                </div>
             
           
              </Card.Body>
            </Card>
      </section>
    </div>
  );
}

export default Contenttransaksisudahbayar;
