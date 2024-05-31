import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import Contentsidebaruntukoffcanvas from "../Sidebar/Contentsidebaruntukoffcanvas";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import Contentloading from "../Loaders/Contentloading";

function Headeradmin() {
	const [showOffcanvas, setShowOffcanvas] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const handleOffcanvasShow = () => {
		setShowOffcanvas(true);
	};

	const handleOffcanvasClose = () => {
		setShowOffcanvas(false);
	};

	const handleLogout = () => {
		Swal.fire({
			title: "Konfirmasi",
			text: "Anda yakin ingin keluar?",
			icon: "warning",
			showCancelButton: true,
			confirmButtonText: "Ya, Keluar",
			cancelButtonText: "Batal",
		}).then((result) => {
			if (result.isConfirmed) {
				setIsLoading(true); // Menampilkan loading

				setTimeout(() => {
					// Proses logout di sini (misalnya, clear session, hapus token, dll.)
					window.location.href = "/loginadmin"; // Arahkan pengguna setelah 2.5 detik
				}, 2500); // Tunggu selama 2.5 detik
			}
		});
	};

	return (
		<div>
			{isLoading && <Contentloading />}{" "}
			{/* Tampilkan Contentloading jika isLoading adalah true */}
			<header
				id="header"
				className="header fixed-top d-flex align-items-center"
			>
				<div className="d-flex align-items-center justify-content-between">
					<a href="/" className="logo d-flex align-items-center">
						<img
							src="../gambar/logo.png"
							alt=""
							style={{ maxHeight: "60px" }}
						/>
					</a>

					{/* Start Toggle off canvas */}
					<i
						className="bi bi-list toggle-sidebar-btn d-block d-lg-none"
						onClick={handleOffcanvasShow}
					></i>
					{/* end Toggle off canvas */}
				</div>

				<nav className="header-nav ms-auto">
					<ul className="d-flex align-items-center">
						{/* <!-- End Search Icon--> */}


						{/* <!-- End Notification Nav --> */}

						<li className="nav-item dropdown pe-3">
							<a
								className="nav-link nav-profile d-flex align-items-center pe-0"
								href="#"
								data-bs-toggle="dropdown"
							>
								<img
									src="assets/assets/img/adminavatar.jpg"
									alt="Profile"
									className="rounded-circle"
								/>
								<span className="d-none d-md-block dropdown-toggle ps-2">
									Admin <strong>1</strong>
								</span>
							</a>
							{/* <!-- End Profile Iamge Icon --> */}

							<ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
								<li className="dropdown-header">
									<h6>Admin</h6>
									<span>
										<strong>1</strong>
									</span>
								</li>
								<li>
									<hr className="dropdown-divider" />
								</li>

								<li>
									<a
										className="dropdown-item d-flex align-items-center"
										href="/Profiladmin"
									>
										<i className="bi bi-person"></i>
										<span>Profil Saya</span>
									</a>
								</li>

								<li>
									<hr className="dropdown-divider" />
								</li>

								<li>
									<hr className="dropdown-divider" />
								</li>

								<li>
									<a
										className="dropdown-item d-flex align-items-center"
										href="#"
										onClick={handleLogout}
									>
										<i className="bi bi-box-arrow-right"></i>
										<span>Log Out / Keluar</span>
									</a>
								</li>
							</ul>
							{/* <!-- End Profile Dropdown Items --> */}
						</li>
						{/* <!-- End Profile Nav --> */}
					</ul>
				</nav>
				{/* <!-- End Icons Navigation --> */}
			</header>
			<Offcanvas
				show={showOffcanvas}
				onHide={handleOffcanvasClose}
				placement="end"
				scroll={false}
				backdrop={false}
			>
				<Offcanvas.Header closeButton>
					<Link to="/Profiladmin">
						<Offcanvas.Title className="fw-bold">
							<span class="badge rounded-pill text-bg-primary">
								<i class="bi bi-person me-2"></i>Admin 1
							</span>
						</Offcanvas.Title>
					</Link>
				</Offcanvas.Header>
				<Offcanvas.Body>
					{/* Isi Offcanvas */}
					<div className="text-center">
						<img
							src="../gambar/logo.png"
							alt="Logo"
							style={{ maxHeight: "60px" }}
						/>
					</div>
					<Contentsidebaruntukoffcanvas />
					<Button
						className="mt-4"
						variant="outline-primary"
						onClick={handleOffcanvasClose}
					>
						{" "}
						<i class="bi bi-chevron-left me-3"></i>Tutup
					</Button>
				</Offcanvas.Body>
			</Offcanvas>
		</div>
	);
}

export default Headeradmin;
