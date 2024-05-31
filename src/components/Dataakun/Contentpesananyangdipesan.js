import React from "react";
import { Card } from "react-bootstrap";

import Contenttabelpesanandipesanbelumbayar from "./Pesananyangdipesan/Contenttabelpesanandipesanbelumbayar";
import Contenttabelpesanandipesansudahbayar from "./Pesananyangdipesan/Contenttabelpesanandipesansudahbayar";
import Contenttabelpesanandipesankadeluarsa from "./Pesananyangdipesan/Contenttabelpesanandipesankadeluarsa";
import Contenttabelpesanandipesandibatalkan from "./Pesananyangdipesan/Contenttabelpesanandipesandibatalkan";

function Contentpesananyangdipesan() {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <Card.Title>Belum Dibayar</Card.Title>
        <Card.Title>
          <small className="text-muted">1 Transaksi</small>
        </Card.Title>
      </div>

      <div className="d-none d-md-block">
      <Contenttabelpesanandipesanbelumbayar />
      </div>


      <hr />
      <div className="d-flex justify-content-between">
        <Card.Title>Sudah Dibayar</Card.Title>
        <Card.Title>
          <small className="text-muted">1 Transaksi</small>
        </Card.Title>
      </div>
      <div className="d-none d-md-block">
      <Contenttabelpesanandipesansudahbayar />
      </div>


      <hr />
      <div className="d-flex justify-content-between">
        <Card.Title>Kadeluarsa</Card.Title>
        <Card.Title>
          <small className="text-muted">1 Transaksi</small>
        </Card.Title>
      </div>
      <div className="d-none d-md-block">

      <Contenttabelpesanandipesankadeluarsa />
      </div>

      <hr />
      <div className="d-flex justify-content-between">
        <Card.Title>Dibatalkan</Card.Title>
        <Card.Title>
          <small className="text-muted">1 Transaksi</small>
        </Card.Title>
      </div>
      <div className="d-none d-md-block">

      <Contenttabelpesanandipesandibatalkan />
      </div>


    </div>
  );
}

export default Contentpesananyangdipesan;
