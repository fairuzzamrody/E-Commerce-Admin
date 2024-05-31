import React, { useState } from "react";
import { Card, Form } from "react-bootstrap";
import Contentloading from "../../../../../Loaders/Contentloading";
// import ContentisiSkaladanDimensiProdukDindingPervarian from "./ContentisiSkaladanDimensiProdukDindingPervarian";
import ContentisiDimensiPervarian from './ContentisiDimensiPervarian'

function ContentisiSkaladanDimensiProdukDinding() {
    const [showSkaladanDimensiPervarian, setShowSkaladanDimensiPervarian] =
    useState(false);
const [isLoading, setIsLoading] = useState(false); // State untuk mengatur visibilitas loader

const toggleSkaladanDimensiPervarian = () => {
    setIsLoading(true); // Aktifkan loader saat switch diubah
    setTimeout(() => {
        setShowSkaladanDimensiPervarian(!showSkaladanDimensiPervarian);
        setIsLoading(false); // Nonaktifkan loader setelah 1.3 detik
    }, 1300);
};

return (
    <div>
        <Card>
            <Card.Body>
                <Card.Title> Dimensi Produk</Card.Title>
                <Form
                    style={{ display: showSkaladanDimensiPervarian ? "none" : "block" }}
                >
                    <Form.Group>
                        <Form.Label>Panjang</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Masukkan panjang produk"
                            disabled={showSkaladanDimensiPervarian} // Menonaktifkan input jika showSkaladanDimensiPervarian true
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Lebar</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Masukkan lebar produk"
                            disabled={showSkaladanDimensiPervarian} // Menonaktifkan input jika showSkaladanDimensiPervarian true
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Tinggi</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Masukkan tinggi produk"
                            disabled={showSkaladanDimensiPervarian} // Menonaktifkan input jika showSkaladanDimensiPervarian true
                        />
                    </Form.Group>
                </Form>

                <footer
						className={`blockquote-footer mt-3 ${
							showSkaladanDimensiPervarian ? "d-none" : ""
						}`}
					>
					Kosongi kotak jika tidak ingin memberi Skala dan Dimensi pada varian tersebut.
					</footer>
					<footer
						className={`blockquote-footer ${
							showSkaladanDimensiPervarian ? "d-none" : ""
						}`}
					>
						Dimensi ini juga akan tampil di Augmented Reality.
					</footer>
					<footer
						className={`blockquote-footer ${
							showSkaladanDimensiPervarian ? "d-none" : ""
						}`}
					>
						Jika mengaktifkan mode Dimensi Produk, pengguna tidak bisa memperbesar dan memperkecil produk di Augmented reality.
					</footer>
                <div
                    className={`alert alert-primary d-flex align-items-center mt-3 ${
                        showSkaladanDimensiPervarian ? "d-none" : ""
                    }`}
                    role="alert"
                >
                    <i className="bi bi-exclamation-circle me-2"></i>
                    <div>
                        <div className="d-none d-md-block">
                            <span>
                                Sistem mendeteksi bahwa Anda menggunakan 5 varian pada produk
                                ini. Apakah Anda ingin menerapkan Skala dan Dimensi pada
                                masing-masing varian ?
                            </span>
                        </div>
                        <div className="d-block d-lg-none">
                            <span style={{ fontSize: "0.85rem" }}>
                                Sistem mendeteksi 5 varian produk. Ingin beri Skala dan
                                Dimensi pada satu atau semua varian?"
                            </span>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-between">
                <p>{showSkaladanDimensiPervarian ? "Non-Aktifkan Dimensi per varian ?" : "Aktifkan Dimensi per varian ?"}</p>
                    <div className="form-check form-switch">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            onChange={toggleSkaladanDimensiPervarian}
                        />
                    </div>
                </div>
                {isLoading && <Contentloading />}
                {showSkaladanDimensiPervarian && !isLoading && (
                    < ContentisiDimensiPervarian />
                )}
            </Card.Body>
        </Card>
    </div>
);
}

export default ContentisiSkaladanDimensiProdukDinding