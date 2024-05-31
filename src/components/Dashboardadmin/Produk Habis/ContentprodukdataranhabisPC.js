import React, { useState } from "react";
import { Button, Table, Modal, Form, Container } from "react-bootstrap";
import Swal from "sweetalert2";
import Contentloading from "../../Loaders/Contentloading";

const produkData = [
  {
    namaProduk: 'Ut inventore',
    varian1: 'Biru',
    stok1: 0,
    imgSrc: 'assets/assets/img/product-1.jpg',
  },
  {
    namaProduk: 'Exercitationem',
    varian1: 'Biru',
    varian2: 'Kuning',
    stok1: 0,
    stok2: 0,
    imgSrc: 'assets/assets/img/product-2.jpg',
  },
  {
    namaProduk: 'Doloribus',
    varian1: '-',
    stok1: 0,
    imgSrc: 'assets/assets/img/product-3.jpg',
  },
  {
    namaProduk: 'Officiis',
    varian1: '-',
    stok1: 0,
    imgSrc: 'assets/assets/img/product-4.jpg',
  },
  {
    namaProduk: 'Sit unde debitis',
    varian1: 'Merah',
    stok1: 0,
    imgSrc: 'assets/assets/img/product-5.jpg',
  },
];

function ContentprodukdataranhabisPC() {
    const [isLoading, setIsLoading] = useState(false); // State untuk mengatur visibilitas loader
    const [showModal, setShowModal] = useState(false);
    const [stokBaru, setStokBaru] = useState(""); // State untuk menyimpan stok yang akan diperbarui;


    function handleArsipkanClick() {
        Swal.fire({
          icon: "question",
          title: "Apakah Anda yakin ingin mengarsipkan produk ini ?",
          showCancelButton: true,
          confirmButtonText: "Ya, Arsipkan produk",
          cancelButtonText: "Batal",
        })
          .then((result) => {
            if (result.isConfirmed) {
              // Simulasikan proses loading selama 1 detik
              setIsLoading(true);
              setTimeout(() => {
                setIsLoading(false);
                // Lakukan logika penyimpanan data di sini
                // Simulasi kesalahan
                const errorOccurred = false; // Ganti menjadi true jika ada kesalahan
      
                if (!errorOccurred) {
                  Swal.fire({
                    icon: "success",
                    title: "Produk Berhasil diarsipkan!",
                    showConfirmButton: true,
                  });
                } else {
                  Swal.fire({
                    icon: "error",
                    title: "Terjadi kesalahan",
                    text: "Produk gagal diarsipkan. Silakan coba lagi nanti.",
                    showConfirmButton: true,
                  });
                }
              }, 1800);
            }
          })
          .catch((error) => {
            // Handle any unexpected errors here
            console.error("Error occurred:", error);
            Swal.fire({
              icon: "error",
              title: "Terjadi kesalahan",
              text: "Produk gagal diarsipkan. Silakan coba lagi.",
              showConfirmButton: true,
            });
          });
      }

      function handleUpdateStokSweet() {
        Swal.fire({
          icon: "question",
          title: "Konfirmasi update stok ?",
          showCancelButton: true,
          confirmButtonText: "Ya, update stok",
          cancelButtonText: "Kembali",
        })
          .then((result) => {
            if (result.isConfirmed) {
              // Simulasikan proses loading selama 1 detik
              setIsLoading(true);
              setTimeout(() => {
                setIsLoading(false);
                // Lakukan logika penyimpanan data di sini
                // Simulasi kesalahan
                const errorOccurred = false; // Ganti menjadi true jika ada kesalahan
      
                if (!errorOccurred) {
                  Swal.fire({
                    icon: "success",
                    title: "Stok Berhasil diupdate!",
                    showConfirmButton: true,
                  }).then(() => {
                    handleCloseModal(); // Menutup modal saat SweetAlert sukses ditampilkan
                  });
                } else {
                  Swal.fire({
                    icon: "error",
                    title: "Terjadi kesalahan",
                    text: "Stok gagal diupdate. Silakan coba lagi nanti.",
                    showConfirmButton: true,
                  });
                }
              }, 1800);
            } else {
              // Jangan panggil handleCloseModal di sini
            }
          })
          .catch((error) => {
            // Handle any unexpected errors here
            console.error("Error occurred:", error);
            Swal.fire({
              icon: "error",
              title: "Terjadi kesalahan",
              text: "Stok gagal diupdate. Silakan coba lagi.",
              showConfirmButton: true,
            });
          });
      }
      
  // Fungsi untuk menampilkan modal update stok
  function handleUpdateStokClick() {
    setShowModal(true);
  }

  // Fungsi untuk menutup modal
  function handleCloseModal() {
    setShowModal(false);
  }

  // Fungsi untuk menangani perubahan nilai input stok
  function handleStokInputChange(event) {
    setStokBaru(event.target.value);
  }
      
    return (
        <div>
          {/* <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '53vh' }}>
  <p style={{ fontSize : "1.4vw" }}>Belum ada data.</p>
</Container>   */}
          <Table bordered hover>
            <thead>
              <tr>
                <th>Produk</th>
                <th>Nama Produk</th>
                <th>Varian</th>
                <th>Stok</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {produkData.map((produk, index) => (
                <tr key={index}>
                  <td>
                    <a href="#">
                      <img src={produk.imgSrc} alt="" />
                    </a>
                  </td>
                  <td>{produk.namaProduk}</td>
                  <td className="fw-bold">
                    {produk.varian1 !== '-' ? produk.varian1 : '-'}
                    {produk.varian2 && produk.varian2 !== '-' ? <br /> : ''}
                    {produk.varian2 !== '-' ? produk.varian2 : ''}
                  </td>
                  <td className="fw-bold text-center">
                    {produk.stok1}
                    {produk.stok2 !== 0}<br/>
                    {produk.stok2}
                  </td>
                  <td className='text-start'>
                  <Button variant='link' style={{ textDecoration: "none", fontSize : "0.8rem" }} onClick={handleUpdateStokClick}><i class="bi bi-plus-lg me-1"></i>Stok</Button>
                    <Button variant='link' style={{ textDecoration: "none", fontSize : "0.8rem" }} onClick={handleArsipkanClick}> Arsipkan</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          {isLoading && <Contentloading />}{" "}

           {/* Modal untuk update stok */}
         <Modal
        show={showModal}
        onHide={handleCloseModal}
        centered  // Memusatkan modal
        backdrop="static" // Backdrop statis
      >        
      <Modal.Header closeButton>
          <Modal.Title>Update Stok Produk</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="stokBaru">
              <Form.Label>Stok Baru</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan stok baru"
                value={stokBaru}
                onChange={handleStokInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Batal
          </Button>
          <Button variant="primary" onClick={handleUpdateStokSweet}>
            Update Stok
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
      );
    }


export default ContentprodukdataranhabisPC