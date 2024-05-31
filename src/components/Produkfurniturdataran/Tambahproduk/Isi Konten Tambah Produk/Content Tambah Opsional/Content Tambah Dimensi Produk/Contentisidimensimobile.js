import React from 'react';
import { Card, Form } from 'react-bootstrap';

function Contentisiskaladandimensimobile() {
  const variantData = [
    { title: "Panjang", placeholder: "Panjang untuk varian produk" },
    { title: "Lebar", placeholder: "Lebar untuk varian produk" },
    { title: "Tinggi", placeholder: "Tinggi untuk varian produk" },
  ];

  const warnaVarian = ["Merah", "Kuning", "Putih", "Hijau", "Biru"];

  const renderVariantInputs = (variantNumber) => {
    return (
      <div key={variantNumber}>
        <Card.Title>
          {variantNumber}. Varian {warnaVarian[variantNumber - 1]}
        </Card.Title>
        {variantData.map((data, index) => (
          <div key={index}>
            <p>
              {data.title} Varian Produk ({warnaVarian[variantNumber - 1]}){" "}
             
            </p>
            <Form.Group controlId={`diskon${variantNumber}-${index}`} className='mt-2 mb-3'>
              <Form.Control
                type="text"
                placeholder={`Contoh 20.`}
              />
            </Form.Group>
          </div>
        ))}
        {variantNumber < 6 && <hr />}
      </div>
    );
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((variantNumber) => renderVariantInputs(variantNumber))}
    </div>
  );
}

export default Contentisiskaladandimensimobile;
