import React from "react";
import { Card } from "react-bootstrap";

function Contentslideinformasiflashsale() {
  const flashSaleData = [
    {
      title: "Flash Sale 1.1",
      status: "Sedang Berjalan",
      statusClass: "badge-primary",
      startTime: "2023-05-12 23:59:00",
      endTime: "2023-05-12 23:59:00",
      totalProducts: "10 Produk",
      totalSold: "12 Terjual",
    },
    {
      title: "Flash Sale 2.2",
      status: "Akan Datang",
      statusClass: "badge-dark",
      startTime: "2023-05-12 23:59:00",
      endTime: "2023-05-12 23:59:00",
      totalProducts: "20 Produk",
      totalSold: "Belum dimulai",
    },
  ];

  return (
    <div>
      <div className="row">
        {flashSaleData.map((sale, index) => (
          <div className="col-sm-6" key={index}>
            <Card>
              <Card.Body>
                <div className="d-flex justify-content-between">
                  <Card.Title> {sale.title}</Card.Title>
                  <Card.Title>
                    <small className={`badge badge-pill ${sale.statusClass}`}>
                      {sale.status}
                    </small>
                  </Card.Title>
                </div>
                <Card.Text>
                  <div className="d-flex justify-content-between">
                    <p>
                      <b>Waktu Mulai</b> 
                    </p>
                    <span className="text-muted">{sale.startTime}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>
                      <b>Waktu Berakhir</b> 
                    </p>
                    <span className="text-muted">{sale.endTime}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>
                      <b>Total Produk</b> 
                    </p>
                    <span className="text-muted">{sale.totalProducts}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>
                      <b >Total Terjual</b> 
                    </p>
                    <span className="text-muted">{sale.totalSold}</span>
                  </div>                  
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contentslideinformasiflashsale;
