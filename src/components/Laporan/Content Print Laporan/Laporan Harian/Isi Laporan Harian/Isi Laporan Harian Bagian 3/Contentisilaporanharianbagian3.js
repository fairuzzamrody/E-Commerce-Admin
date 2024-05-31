import React from "react";
import Contentisilaporanharianprodukterlarisdataran from "./Contentisilaporanharianprodukterlarisdataran";
import Contentisilaporanharianprodukterlarisdinding from "./Contentisilaporanharianprodukterlarisdinding";
import { Card } from "react-bootstrap";

const Contentisilaporanharianbagian3 = () => {
	return (
		<div>
             <div className="mt-4">
            <h2 style={{ fontSize: '1.5rem' }} className="fw-bold">
              Bagian 3: 5 Produk Terlaris
            </h2>
          </div>
          <Card.Title>Produk Dataran</Card.Title>
			<Contentisilaporanharianprodukterlarisdataran />
            <Card.Title>Produk Dinding</Card.Title>
			<Contentisilaporanharianprodukterlarisdinding />
		</div>
	);
};

export default Contentisilaporanharianbagian3;
