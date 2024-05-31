import React, { useState } from "react";
import { Card, Modal } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

function Ratingdanulasansudahdibalas() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedImage("");
    setShowModal(false);
  };

  return (
    <div>
      <Card>
				<Card.Body>
					<div className="d-flex justify-content-between">
						<Card.Title>Jhon Doe 1</Card.Title>
						<Card.Title>
            <span style={{ fontSize: "0.78rem" }}>2023-08-02 23:59:10</span>
						</Card.Title>
					</div>
					<p className="fw-bold">Sofa Klasik Eropa - Merah</p>
					<div className="d-flex">
						<img
							src="../assets/assets/img/product-1.jpg"
							style={{ maxHeight: "130px",
						borderRadius: "10px" }}
							alt="Gambar produk"
						/>
						<div
							className="d-flex flex-column justify-content-center align-items-start ml-3"
							style={{ marginTop: "-9px"}}
						>
							<div className="star-rating">
								<FaStar color="gold" />
								<FaStar color="gold" />
								<FaStar color="gold" />
								<FaStar color="gold" />
								<FaStar color="gold" />
							</div>
							<p className="mt-1 text-justify">
								There are many variations of passages of Lorem Ipsum available,
								but the majority have suffered alteration in some form, by
								injected humour, or randomised words which don't look even
								slightly believable.
							</p>
						</div>
					</div>
          
					{/* Start Gambar Pendukung Ulasan */}

					<div className="d-flex justify-content-end">
						<div className="d-flex flex-row">
							<img
								src="../assets/assets/img/card.jpg"
								style={{
									maxWidth: "6rem",
									cursor: "pointer",
									marginRight: "10px",
                  marginLeft: "10px",
				  borderRadius : "5px"
								}}
								alt="Gambar Pendukung Ulasan"
								onClick={() => openModal("../assets/assets/img/card.jpg")}
							/>
							<img
								src="../assets/assets/img/card.jpg"
								style={{
									maxWidth: "6rem",
									cursor: "pointer",
									marginRight: "10px",
									borderRadius : "5px"
								}}
								alt="Gambar Pendukung Ulasan"
								onClick={() => openModal("../assets/assets/img/card.jpg")}
							/>
							<img
								src="../assets/assets/img/card.jpg"
								style={{
									maxWidth: "6rem",
									cursor: "pointer",
									borderRadius : "5px"
								}}
								alt="Gambar Pendukung Ulasan"
								onClick={() => openModal("../assets/assets/img/card.jpg")}
							/>
						</div>
					</div>
					{/* End gambar pendukung ulasan */}
		 
        </Card.Body>
		<Card.Footer>
          <div className="d-flex justify-content-between">
            <Card.Title>Tanggapan Anda</Card.Title>
            <Card.Title>
            <span style={{ fontSize: "0.78rem" }}>2023-08-02 23:59:10</span>
            </Card.Title>
          </div>
          <Card.Text>
            <p className="text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </p>
          </Card.Text>
		  </Card.Footer>
      </Card>

	  <Modal show={showModal} onHide={closeModal} centered backdrop="static"> 
        <Modal.Header closeButton>
          <Modal.Title>Gambar dari pelanggan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={selectedImage}
            style={{ width: "100%", borderRadius : "10px" }}
            alt="Gambar Lebih Besar"
          />
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={closeModal}>
            Tutup
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Ratingdanulasansudahdibalas;
