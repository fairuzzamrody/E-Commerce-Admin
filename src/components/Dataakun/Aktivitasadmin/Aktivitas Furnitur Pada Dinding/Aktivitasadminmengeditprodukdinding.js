import React from 'react'
import { Card } from 'react-bootstrap'
import { BsFillClipboard2XFill } from 'react-icons/bs'

function Aktivitasadminmengeditprodukdinding() {
  return (
    <div>
        <Card>


        <Card.Body>
                    <Card.Title>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                        <i class="bi bi-pencil-square mr-2"
                            style={{ marginTop: "-10px" }}></i>
                          <h4>Mengedit Produk</h4>
                        </div>
                        <div>
                          <small>35 Menit yang lalu</small>
                        </div>
                      </div>
                    </Card.Title>

                    <div>
                      <p>
                                                {/* Sesuaikan dengan apa yang Admin LAKUKAN */}
                                                Admin... (Misal Admin 1), "Admin 1 telah mengedit Nama Produk yang sebelumnya "Kabinet" Menjadi "Kabinet Mewah" dan "Gambar Penunjang" yang termasuk 'Furnitur Pada Dinding' dan terdapat dalam kategori 'Kabinet."


                      </p>
                    </div>
                  </Card.Body>
                  </Card>
    </div>
  )
}

export default Aktivitasadminmengeditprodukdinding