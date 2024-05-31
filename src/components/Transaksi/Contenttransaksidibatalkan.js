import React from "react";
import {
  Card,

  Form,
  FormControl,
} from "react-bootstrap";

import Contenttabeltransaksidibatalkan from "./Tabel/Contenttabeltransaksidibatalkan";

function Contenttransaksikadeluarsa() {
  return (
    <div>
      <div className="pagetitle">
        <h1>Transaksi Dibatalkan</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active">
              Transaksi Dibatalkan
            </li>
          </ol>
        </nav>
      </div>

      {/* Card Informasi Atas */}
      <section className="section dashboard">
        <div class="row">
       
          <div class="col-sm-4">
            <div className="card info-card revenue-card">
              {/* Jumlah Terjual */}
              <div className="card-body">
                <h5 className="card-title"> Dibatalkan</h5>
                <div className="d-flex align-items-center">
                  <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
				  <i class="bi bi-bag-x"></i>
                  </div>
                  <div className="ps-3">
                    <h6> 12</h6>
                    <span className="text-muted small pt-1">
                      Total Dibatalkan
                    </span>{" "}
                    <br />
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
              <span className="d-flex align-items-center me-2">Filter : </span>
              <Form>
                <FormControl as="select">
                  <option selected disabled>
                    Filter Transaksi
                  </option>
                  <option value="option1">Transaksi Terbaru</option>
                  <option value="option2">Transaksi Terlama</option>
                  <option value="option3">Nominal Tertinggi</option>
                  <option value="option3">Nominal Terendah</option>
                </FormControl>
              </Form>
            </div>
            <div className="d-none d-md-block">
              {/* <Contenttabeltransaksikadeluarsa /> */}
              <hr style={{ marginTop: "40px" }} />
              <Contenttabeltransaksidibatalkan />
            </div>

            <div className="d-block d-lg-none">
              <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    class="nav-link active"
                    id="nav-home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-home"
                    type="button"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    Kadeluarsa <br/>
					(1)
                  </button>
                  <button
                    class="nav-link"
                    id="nav-profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profile"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    Dibatalkan<br/>
					(1)
                  </button>
                </div>
              </nav>
              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                  tabindex="0"
                >
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                  tabindex="0"
                >
                  {" "}
                  
                </div>
              </div>

              <hr />
            </div>
          </Card.Body>
        </Card>
      </section>
    </div>
  );
}

export default Contenttransaksikadeluarsa;
