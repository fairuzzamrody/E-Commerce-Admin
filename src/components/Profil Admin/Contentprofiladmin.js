import React, { useState } from "react";
import { Button, Modal, Form, InputGroup } from "react-bootstrap";
import Swal from 'sweetalert2';
import 'bootstrap-icons/font/bootstrap-icons.css';  // Ensure Bootstrap icons are imported

function Contentprofiladmin() {
    const [showModal, setShowModal] = useState(false);
    const [passwordInput, setPasswordInput] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);
    const [editableFields, setEditableFields] = useState({
        name: "Admin 1",
        email: "admin1@gmail.com",
        password: "*************"
    });
    const [originalFields, setOriginalFields] = useState({ ...editableFields });
    const [showPassword, setShowPassword] = useState(false);
    const [newPassword, setNewPassword] = useState(""); // New password state
    const handleNewPasswordChange = (e) => setNewPassword(e.target.value); // Handle new password changes

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => {
        setPasswordInput("");
        setShowModal(false);
    };

    const handlePasswordChange = (e) => setPasswordInput(e.target.value);

    const handleFieldChange = (e) => {
        setEditableFields({
            ...editableFields,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        if (passwordInput === "admin12345") {
            setIsAdmin(true);
            setShowModal(false);
            setOriginalFields({ ...editableFields });
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Incorrect password.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
        setPasswordInput("");
    };

    const handleSave = () => {
        Swal.fire({
            title: 'Success!',
            text: 'Your profile has been updated successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
        });
        setIsAdmin(false);
        setOriginalFields({ ...editableFields });
    };

    const handleCancelEdit = () => {
        setIsAdmin(false);
        setEditableFields({ ...originalFields });
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <div className="pagetitle">
                <h1>Profil Anda</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active">Profil Anda</li>
                    </ol>
                </nav>
            </div>

            <section className="section dashboard">
                <div className="row">
                    <div className="col-12 mb-0">
                        <div className="card large-card">
                            <div className="card-body">
                                <h5 className="card-title">Informasi Akun</h5>
                                <div className="d-flex justify-content-between align-items-center my-2">
                                    <p className="fw-bold">Nama</p>
                                    {isAdmin ? (
                                        <Form.Control
                                            type="text"
                                            value={editableFields.name}
                                            onChange={handleFieldChange}
                                            name="name"
                                            className="mx-3" // Adding margin horizontally
                                            style={{ width: '80%' }} // Optional: Adjust width
                                        />
                                    ) : (
                                        <p>{editableFields.name}</p>
                                    )}
                                </div>
                                <div className="d-flex justify-content-between align-items-center my-2">
                                    <p className="fw-bold">Email</p>
                                    {isAdmin ? (
                                        <Form.Control
                                            type="email"
                                            value={editableFields.email}
                                            onChange={handleFieldChange}
                                            name="email"
                                            className="mx-3" // Adding margin horizontally
                                            style={{ width: '80%' }} // Optional: Adjust width
                                        />
                                    ) : (
                                        <p>{editableFields.email}</p>
                                    )}
                                </div>
								<div className="d-flex justify-content-between align-items-center my-2">
                <p className="fw-bold">Password</p>
                {isAdmin ? (
                    <Form.Control
                        type={showPassword ? "text" : "password"}
                        placeholder="New password"
                        value={newPassword}
                        onChange={handleNewPasswordChange}
                        className="mx-3"
                        style={{ width: '80%' }}
                    />
                ) : (
                    <p>********</p> // Display asterisks instead of password
                )}
            </div>
                            </div>
                        </div>
                    </div>
                </div>
                {!isAdmin && (
                    <Button variant="outline-secondary" onClick={handleShowModal}>
                        Ubah Profil
                    </Button>
                )}
                {isAdmin && (
                    <>
                        <Button variant="primary" className="ms-2" onClick={handleSave}>
                            Simpan
                        </Button>
                        <Button variant="danger" className="ms-2" onClick={handleCancelEdit}>
                            Batal Edit
                        </Button>
                    </>
                )}

                <Modal show={showModal} onHide={handleCloseModal} centered backdrop="static">
                    <Modal.Header closeButton>
                        <Modal.Title>Validasi Akun</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group controlId="password">
                            <Form.Label>Masukkan Password Sebelum Mengedit Akun</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    value={passwordInput}
                                    onChange={handlePasswordChange}
                                    className="mx-1" // Adjusting margin
                                />
                                <Button variant="outline-secondary" onClick={toggleShowPassword}>
                                    <i className={showPassword ? "bi bi-eye-slash" : "bi bi-eye"}></i>
                                </Button>
                            </InputGroup>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Tutup
                        </Button>
                        <Button variant="primary" onClick={handleSubmit}>
                            Konfirmasi
                        </Button>
                    </Modal.Footer>
                </Modal>
            </section>
        </div>
    );
}

export default Contentprofiladmin;
