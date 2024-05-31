import React from 'react';
import { Form, Card } from 'react-bootstrap';

function ContentDiskonProdukuntukVarianDinding() {
  const warnaText = ["Merah", "Kuning", "Putih", "Hijau", "Biru"];
  const placeholderText = "Masukkan diskon";

  const renderVariantInputs = () => {
    const variantInputs = [];

    for (let i = 0; i < warnaText.length; i++) {
      variantInputs.push(
        <div key={`variant${i}`}>
          <Card.Title>{`${i + 1}. Varian ${warnaText[i]}`}.</Card.Title>
          <Form.Group controlId={`diskon${i + 1}`}>
            <Form.Control
              type="text"
              placeholder={`${placeholderText}, Contoh 20`}
            />
          </Form.Group>
          {i < warnaText.length - 1 && <hr style={{ marginBottom : "-7px" }}/>} {/* Tambahkan <hr> kecuali untuk varian terakhir */}
        </div>
      );
    }

    return variantInputs;
  };

  return (
    <div>
      {renderVariantInputs()}
      <footer className="blockquote-footer mt-3">Kosongi kotak jika tidak ingin memberi diskon pada varian tersebut</footer>
    </div>
  );
}

export default ContentDiskonProdukuntukVarianDinding;
