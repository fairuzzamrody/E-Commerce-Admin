import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Contentloading from '../../components/Loaders/Contentloading';

const Login = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    // Scroll to the top of the page when the component is loaded
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Simulate loading for 1.5 seconds
    const loaderTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(loaderTimeout);
    };
  }, []);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;
  const [loading, setLoading] = useState(false); // State untuk indikator loading
  const [showPassword, setShowPassword] = useState(false); // State untuk mengontrol tampilan password

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Fungsi untuk memvalidasi alamat email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Fungsi untuk memvalidasi password (implement more complex validation)
  const validatePassword = (password) => {
    return password.length >= 8; // Update the password length as per your requirement
  };

  // In your Login component
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validasi alamat email dan password
    if (!validateEmail(email)) {
      showErrorAlert('Format Email Salah', 'Mohon masukkan alamat email yang valid.');
      return;
    }

    if (!validatePassword(password)) {
      showErrorAlert('Password Tidak Memadai', 'Password harus memiliki setidaknya 8 karakter.');
      return;
    }

    try {
      setLoading(true); // Mengubah state loading menjadi true saat proses login dimulai

      // Simulate login process (replace with actual API call)
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.isAdmin) {
          // Admin login successful
          showSuccessAlert('Berhasil Masuk', 'Anda telah berhasil masuk sebagai admin.');
          // Redirect to admin dashboard or admin-specific page
          // Tambahkan instruksi yang diperlukan untuk mengarahkan ke halaman admin di sini
        } else {
          // Regular user login (handle as per your requirements)
          showErrorAlert('Login Gagal', 'Anda bukan admin. Silakan gunakan akun admin untuk masuk.');
        }
      } else {
        // Handle login failure (e.g., invalid credentials)
        showErrorAlert('Gagal Masuk', 'Terjadi kesalahan saat melakukan masuk. Silakan coba lagi.');
      }
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
      // Gagal masuk, tampilkan pesan error yang sesuai
      showErrorAlert('Gagal Masuk', 'Terjadi kesalahan saat melakukan masuk. Silakan coba lagi.');
    } finally {
      setLoading(false); // Mengubah state loading menjadi false setelah proses login selesai (berhasil atau gagal)

      // Scroll to the top of the page after the form is submitted
      window.scrollTo(0, 0);
    }
  };

  // Menampilkan alert kesalahan
  const showErrorAlert = (title, text) => {
    Swal.fire({
      icon: 'warning',
      title,
      text,
    });
  };

  // Menampilkan alert berhasil
  const showSuccessAlert = (title, text) => {
    Swal.fire({
      icon: 'success',
      title,
      text,
    });
  };

  return (
    <>
      {isLoading ? (
        <Contentloading />
      ) : (
        <>
          <nav className="navbar navbar-light bg-white">
            <div className="navbar-brand">
              <img src="./gambar/logo.png" alt="" style={{ maxHeight: '70px' }} />
            </div>
          </nav>
          {/* Bagian login form */}
          <section className="d-flex align-items-center justify-content-center" style={{ background: 'white' }}>
            <Container style={{ marginTop: '70px', marginBottom: '150px' }}>
              <Row>
                <Col lg={6} pt-5 pt-lg-0 d-flex flex-column justify-content-center>
                  <h1
                    data-aos="fade-up"
                    style={{ fontSize: '6.2vw', maxWidth: '600px', marginBottom: '30px' }}
                  >
                    <b>
                      THE FUTURE
                      IS TODAY.
                    </b>
                  </h1>
                </Col>

                <Col lg={6}>
                  {/* Form login */}
                  <Form onSubmit={handleSubmit}>
                    <Form.Group>
                      <Form.Label>Alamat Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                        placeholder="Masukkan email"
                        style={{ marginTop: '10px' }}
                        required
                      />
                    </Form.Group>
                    <br />
                    <Form.Group>
                      <Form.Label>Password</Form.Label>
                      <div className="position-relative">
                        <Form.Control
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          value={password}
                          onChange={handleInputChange}
                          placeholder="Masukkan kata sandi Anda"
                          style={{ marginTop: '10px' }}
                          required
                        />
                        <div
                          className="input-group-append"
                          onClick={() => setShowPassword(!showPassword)}
                          style={{
                            cursor: 'pointer',
                            fontSize: '15px',
                            borderRadius: '0px',
                            position: 'absolute',
                            right: '10px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                          }}
                        >
                          <FontAwesomeIcon
                            icon={showPassword ? faEyeSlash : faEye}
                          />
                        </div>
                      </div>
                    </Form.Group>
                    <br />
                    {/* Tombol submit */}
                    <Button
                      type="submit"
                      className="btn btn-primary btn-lg w-100 btn-dark"
                      style={{ borderRadius: '25px' }}
                      disabled={loading}
                    >
                      {loading ? 'Loading...' : 'Masuk'}
                    </Button>
                  </Form>
                  {/* Teks di bawah tombol masuk pada mode responsif */}
                </Col>
              </Row>
            </Container>
          </section>
        </>
      )}
    </>
  );
};

export default Login;
