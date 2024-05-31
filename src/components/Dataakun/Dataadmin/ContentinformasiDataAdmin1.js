import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import Contentloading from "../../Loaders/Contentloading";
import Swal from "sweetalert2";

function ContentinformasiDataAdmin1() {
  const [isLoading, setIsLoading] = useState(false);

  const handleAktifkanAdminClick = () => {
    Swal.fire({
      icon: "question",
      title: "Apakah Anda yakin mengaktifkan akun admin ini?",
      showCancelButton: true,
      confirmButtonText: "Ya, Aktifkan Akun admin",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        setIsLoading(true);

        // Simulate an error condition (true for error, false for success)
        const hasError = false; // Change this to true or false as needed

        setTimeout(() => {
          setIsLoading(false);

          if (hasError) {
            Swal.fire({
              icon: "error",
              title: "Gagal mengaktifkan akun admin!",
              text: "Terjadi kesalahan saat mengaktifkan akun admin.",
              showConfirmButton: true,
            });
          } else {
            Swal.fire({
              icon: "success",
              title: "Akun admin berhasil diaktifkan!",
              showConfirmButton: true,
            });
          }
        }, 1800);
      }
    });
  };

  return (
		<div>
			<Card>
				<Card.Body>
					<Card.Title>
						<i class="bi bi-person-badge"></i> Informasi Admin
					</Card.Title>
					<p style={{ marginBottom: "4px" }} className="text-muted">
						Jhon Doe 2
					</p>
					<p style={{ marginBottom: "4px" }} className="text-muted">
						JhonDoe2@gmail.com
					</p>
					<p style={{ marginBottom: "4px" }} className="text-muted">
						081213133187
					</p>
				</Card.Body>
			</Card>
			<Card>
				<Card.Body>
					<Card.Title>
						<i class="bi bi-person-lines-fill me-2"></i> Informasi Akun
					</Card.Title>
					<div
						className="d-flex justify-content-between"
						style={{ marginBottom: "-10px" }}
					>
						<p className="text-muted">Waktu Ditambahkan</p>
						<p className="text-muted" style={{ fontSize: "0.9rem" }}>
							2023-06-21 12:20
						</p>
					</div>
					<div
						className="d-flex justify-content-between"
						style={{ marginBottom: "-10px" }}
					>
						<p className="text-muted">Terakhir Login</p>
						<p className="text-muted" style={{ fontSize: "0.9rem" }}>
							2023-06-21 22:20
						</p>
					</div>

					<Card.Title>
						{" "}
						<i class="bi bi-person-exclamation me-2"></i>Status Akun
					</Card.Title>
					<div
						class="alert alert-secondary d-flex align-items-center"
						role="alert"
					>
						<i class="bi bi-exclamation-triangle me-2"></i>
						<div>Akun Non-Aktif</div>
					</div>
				</Card.Body>
				<Card.Footer>
					<Button onClick={handleAktifkanAdminClick}>Aktifkan Akun Admin</Button>
				</Card.Footer>
			</Card>
            {isLoading && <Contentloading />}
		</div>
	);
}

export default ContentinformasiDataAdmin1;
