import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Card} from "react-bootstrap";

import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Contentnavigasiflashsale from "./Contentnavigasiflashsale";
import Contentslideinformasiflashsale from "./Informasi Flash Sale/Contentslideinformasiflashsale";

function Contentprogramflashsale() {
  return (
    <div>
      <div class="pagetitle">
        <h1>Program FlashSale</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li class="breadcrumb-item active">Program FlashSale</li>
          </ol>
        </nav>
      </div>
      
    <Contentslideinformasiflashsale />

      <section className="section dashboard">
        <div className="row d-flex flex-wrap justify-content-between">
          <div className="col-12 mb-0">
            <Link
              to="/Tambahflashsale"
              className="btn btn-primary btn-lg btn-block"
            >
              Tambah FlashSale
              <FontAwesomeIcon
                icon={faPlus}
                size="sm"
                style={{ marginLeft: "15px" }}
              />
            </Link>
          </div>
        </div>
        <hr/>
        <Card>
          <Card.Body>
            <Card.Title style={{ marginBottom: "-5px" }}>
              List Program Flash Sale
            </Card.Title>
            <Contentnavigasiflashsale />

          </Card.Body>
        </Card>
        
      </section>
    </div>
  );
}

export default Contentprogramflashsale;
