import React from 'react';
import { Card, Table } from 'react-bootstrap';

function ContentAnalisisFlashSaleProdukTerlarisDinding() {
  // Data produk dalam bentuk array
  const produkData = [
    {
      id: 1,
      gambarUrl: "assets/assets/img/product-1.jpg",
      nama: "Meja Gaming",
      diskon: "10%",
      harga: "Rp 1.200.000",
      terjual: 10,
	  diLihat : 100,
    },
    {
      id: 2,
      gambarUrl: "assets/assets/img/product-2.jpg",
      nama: "Meja Rias Aesthetic",
      diskon: "10%",
      harga: "Rp 1.200.000",
      terjual: 8,
      varian: "Varian : Kuning",
	  diLihat : 100,

    },
    {
      id: 3,
      gambarUrl: "assets/assets/img/product-3.jpg",
      nama: "Kabinet Dinding",
      diskon: "10%",
      harga: "Rp 1.200.000",
      terjual: 5,
      varian: "Varian : Putih",
	  diLihat : 100,

    },
	{
		id: 4,
		gambarUrl: "assets/assets/img/product-5.jpg",
		nama: "Kabinet Dinding",
		diskon: "10%",
		harga: "Rp 1.200.000",
		terjual: 5,
		diLihat : 100,
  
	  },
	  {
		id: 5,
		gambarUrl: "assets/assets/img/product-2.jpg",
		nama: "Kabinet Dinding",
		diskon: "10%",
		harga: "Rp 1.200.000",
		terjual: 5,
		varian: "Varian : Putih, Biru, Hijau",
		diLihat : 100,
  
	  },
  ];

  return (
    <div>
      <Card className="top-selling overflow-auto">
        <Card.Body className="pb-0">
          <Card.Title>Produk Dinding</Card.Title>
          <Table bordered hover>
            <thead>
              <tr>
                <th className="text-center">Gambar</th>
                <th className="text-center">Produk</th>
                <th className="text-center">Diskon</th>
                <th className="text-center">Harga Diskon</th>
                <th className="text-center">Terjual</th>
                <th className="text-center">Dilihat</th>
              </tr>
            </thead>
            <tbody>
              {produkData.map((produk) => (
                <tr key={produk.id}>
                  <td className="text-center">
                    <a href="#">
                      <img src={produk.gambarUrl} alt="" />
                    </a>
                  </td>
                  <td className="text-center">
                    {produk.varian ? (
                      <>
                        {produk.nama}
                        <br />
                        <small className="text-muted">{produk.varian}</small>
                      </>
                    ) : (
                      produk.nama
                    )}
                  </td>
                  <td className="text-center">
                    <small>{produk.diskon}</small>
                  </td>
                  <td className="text-center">{produk.harga}</td>
                  <td className="text-center fw-bold">{produk.terjual}x</td>
				  <td className="text-center">{produk.diLihat}x</td>

                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ContentAnalisisFlashSaleProdukTerlarisDinding;
