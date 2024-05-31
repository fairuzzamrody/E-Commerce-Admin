import React from "react";
import { Button, Card, Dropdown, Form, Table } from "react-bootstrap";
import Swal from "sweetalert2"; // Import Sweet Alert 2
import Contentloading from "../../Loaders/Contentloading";
import { useState } from "react";

function CategoryDataActiveTable() {
  const [isLoading, setIsLoading] = useState(false); // State untuk mengatur visibilitas loader

  const DatakategoriAktif = [
    {
      id: 1,
      image: "assets/assets/img/product-1.jpg",
      name: "Meja",
      totalProducts: 8,
      createdBy: "Admin 1",
      createdAt: "09/30/2023 23:59:00",
    },
    // Tambahkan data kategori aktif lainnya sesuai kebutuhan
  ];

  // Fungsi untuk menampilkan Sweet Alert 2 saat tombol "Hapus" diklik
  const handleDeleteClick = (kategori) => {
    Swal.fire({
			icon: "question",
			title: "Apakah Anda yakin ingin menghapus kategori ini ?",
      text : "Kategori yang sudah dihapus tidak bisa dikembalikan kembali",
			showCancelButton: true,
			confirmButtonText: "Ya, hapus kategori",
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
				  title: "Kategori Berhasil dihapus!",
				  showConfirmButton: true,
				});
			  }, 1500);
			}
		  });
		};

   // Fungsi untuk menampilkan Sweet Alert 2 saat tombol "Arsipkan" diklik
   const handleArchiveClick = (kategori) => {
    Swal.fire({
			icon: "question",
			title: "Apakah Anda yakin ingin mengarsipkan kategori ini ?",
      text : "Seluruh Produk yang terdapat pada kategori ini akan diarsipkan juga.",
			showCancelButton: true,
			confirmButtonText: "Ya, Arsipkan kategori",
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
				  title: "Produk Berhasil diarsipkan!",
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
            <Card.Title>Kategori Aktif</Card.Title>
            <Card.Title>
              <span>{DatakategoriAktif.length} Kategori</span>
            </Card.Title>
          </div>

          <Table striped bordered hover>
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
              {DatakategoriAktif.map((kategori) => (
                <tr key={kategori.id}>
                  <td className="text-center">
                    <img src={kategori.image} alt="" />
                  </td>
                  <td className="text-center fw-bold">{kategori.name}</td>
                  <td className="text-center">
                    <a className="text-dark fw-bold">
                      {kategori.totalProducts} <br />
                      <small>Produk</small>
                    </a>
                  </td>
                  <td className="text-center">
                    <span className="text-dark fw-bold text-center">
                      {kategori.createdBy} <br />
                      <small>{kategori.createdAt}</small>
                    </span>
                  </td>
                  <td>
                     <Button
                      variant="link"
                      style={{ textDecoration: "none" }}
                      onClick={() => handleArchiveClick(kategori)}
                    >
                      Arsipkan
                    </Button>
                    <br />
                    <Button
                      variant="link"
                      style={{ textDecoration: "none" }}
                    >
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
              <div className="pagination-info">1 - {DatakategoriAktif.length} of {DatakategoriAktif.length} items</div>
            </div>
          </Card.Footer>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CategoryDataActiveTable;
