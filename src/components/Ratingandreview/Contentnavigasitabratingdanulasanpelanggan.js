import React from 'react'

function Contentnavigasitabratingpelanggan() {
  return (
    <div>
      <div className="d-none d-md-block">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Semua
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"

                >
                  Perlu dibalas 
                  {/* Badge ini mengindikasikan jumlah pesan yang perlu di balas, jika tidak ada pesan yang perlu di balas maka display : none saja */}
                  <span class="badge rounded-pill bg-primary" style={{ marginLeft: "5px" }}>2</span>

                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact"
                  type="button"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"

                >
                  Sudah dibalas
                  <span class="badge rounded-pill bg-success" style={{ marginLeft: "5px" }}>2</span>

                </button>
              </li>
            </ul>
      </div>

      <div className='d-block d-md-none'>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                  style={{ fontSize: "0.8rem" }}
                >
                  Semua
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                  style={{ fontSize: "0.72rem" }}

                >
                  Perlu dibalas 
                  {/* Badge ini mengindikasikan jumlah pesan yang perlu di balas, jika tidak ada pesan yang perlu di balas maka display : none saja */}
                  <span class="badge rounded-pill bg-primary" style={{ marginLeft: "5px" }}>2</span>

                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact"
                  type="button"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                  style={{ fontSize: "0.72rem" }}

                >
                  Sudah dibalas
                  <span class="badge rounded-pill bg-success" style={{ marginLeft: "5px" }}>2</span>

                </button>
              </li>
            </ul>
      </div>
       
    </div>
  )
}

export default Contentnavigasitabratingpelanggan