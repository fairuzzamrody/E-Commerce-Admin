import { useState } from "react";
import React from "react";
import { Button, Card, Dropdown, Form, Table } from "react-bootstrap";
import Swal from "sweetalert2";
import Contentloading from "../../Loaders/Contentloading";

function Contenttabelkategoridatarannonaktif() {
  const [isLoading, setIsLoading] = useState(false); // State untuk mengatur visibilitas loader

  const DataKategoriDiarsipkan = [
    {
      id: 1,
      image: "assets/assets/img/product-1.jpg",
      name: "Meja",
      totalProducts: 8,
      createdBy: "Admin 1",
      createdAt: "09/30/2023 23:59:00",
    },
    // Tambahkan data kategori diarsipkan lainnya sesuai kebutuhan
  ];

  const handleDeleteClick = (kategoriId) => {
    Swal.fire({
			icon: "question",
			title: "Apakah Anda yakin ingin menghapus kategori ini ?",
      text : "Kategori yang sudah dihapus tidak bisa dikembalikan kembali",
			showCancelButton: true,
			confirmButtonText: "Ya, hapus Produk",
			cancelButtonText: "Batal",
		  }).then((result) => {
			if (result.isConfirmed) {
			  // Simulasikan proses loading selama 1 detik
			  setIsLoading(true);
			  setTimeout(() => {
				setIsLoading(false);
				// Lakukan logika penyimpanan data di sini
				Swal.fire({
				  icon: "success",
				  title: "Produk Berhasil dihapus!",
				  showConfirmButton: true,
				});
			  }, 2500);
			}
		  });
		};

  const handleActivateClick = (kategoriId) => {
    Swal.fire({
			icon: "question",
			title: "Apakah Anda yakin ingin mengAktifkan produk ini ?",
      text : "Seluruh Produk yang terdapat pada kategori ini akan diaktifkan juga.",
			showCancelButton: true,
			confirmButtonText: "Ya, Arsipkan produk",
			cancelButtonText: "Batal",
		  }).then((result) => {
			if (result.isConfirmed) {
			  // Simulasikan proses loading selama 1 detik
			  setIsLoading(true);
			  setTimeout(() => {
				setIsLoading(false);
				// Lakukan logika penyimpanan data di sini
				Swal.fire({
				  icon: "success",
				  title: "Produk Berhasil aktif!",
				  showConfirmButton: true,
				});
			  }, 1800);
			}
		  });
		};

  return (
    <div>
      <Card className="top-selling overflow-auto mt-4">
        <Card.Body className="pb-0">
          <div className="d-flex justify-content-between">
            <Card.Title>Kategori Non-aktif / Diarsipkan</Card.Title>
            <Card.Title>
              <span>{DataKategoriDiarsipkan.length} Produk</span>
            </Card.Title>
          </div>

          <Table bordered hover>
            <thead>
              <tr>
                <th className="text-center">Kategori</th>
                <th className="text-center">Nama Kategori</th>
                <th className="text-center">Total Produk</th>
                <th className="text-center">Dibuat Oleh</th>
                <th className="text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {DataKategoriDiarsipkan.map((kategori) => (
                <tr key={kategori.id}>
                  <td className="text-center">
                    <img src={kategori.image} alt="" />
                  </td>
                  <td className="text-center">
                    <a href="#" className="text-primary fw-bold">
                      {kategori.name}
                    </a>
                  </td>
                  <td className="text-center">
                    <a className="text-dark fw-bold">
                      {kategori.totalProducts} <br />
                      <small>Produk</small>
                    </a>
                  </td>
                  <td className="text-center">
                    <a className="text-dark fw-bold">
                      {kategori.createdBy} <br />
                      <small>{kategori.createdAt}</small>
                    </a>
                  </td>
                  <td>
                    <Button variant="link" style={{ textDecoration: "none" }} onClick={() => handleActivateClick(kategori.id)}>
                      Aktifkan
                    </Button>
                    <br />
                    <Button variant="link" style={{ textDecoration: "none" }}>
                      Ubah
                    </Button>
                    <br />
                    <Dropdown>
												<Dropdown.Toggle
													variant="link"
													style={{
														textDecoration:
															"none",
													}}
												>
													Lainnya
												</Dropdown.Toggle>
												<Dropdown.Menu>
												
                        <Dropdown.Item  variant="link"
                      style={{ textDecoration: "none" }}
                      onClick={() => handleDeleteClick(kategori)}>
														Hapus
													</Dropdown.Item>
													<Dropdown.Item href="/DetailKategoriDataran">
														Lihat Detail Kategori
													</Dropdown.Item>
												</Dropdown.Menu>
											</Dropdown>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          {isLoading && <Contentloading />} {/* Tampilkan loader jika isLoading true */}

          <Card.Footer>
            <div className="d-flex justify-content-between align-items-center">
              <Form.Group className="showperpage">
                <Form.Label>Show per page:</Form.Label>
                <Form.Control as="select" size="sm">
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </Form.Control>
              </Form.Group>
              <div className="pagination-info">1 - {DataKategoriDiarsipkan.length} of {DataKategoriDiarsipkan.length} items</div>
            </div>
          </Card.Footer>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Contenttabelkategoridatarannonaktif;
