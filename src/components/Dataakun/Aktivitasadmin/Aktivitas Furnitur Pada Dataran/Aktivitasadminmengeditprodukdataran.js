import React from 'react'
import { Card } from 'react-bootstrap'
import { BsFillClipboard2XFill } from 'react-icons/bs'

function Aktivitasadminmengeditprodukdataran() {
  return (
    <div>
                              {/* Sesuaikan dengan apa yang Admin LAKUKAN */}
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
                          <small>5 Menit yang lalu</small>
                        </div>
                      </div>
                    </Card.Title>

                    <div>
                      <p>
                        {/* Sesuaikan dengan apa yang Admin LAKUKAN */}
                     Admin... (Misal Admin 1), "Admin 1 telah mengedit Nama Produk yang sebelumnya "Kursi Eropa" Menjadi "Kursi DPR" dan "Gambar Thumbnail" yang termasuk 'Furnitur Pada Dataran' dan terdapat dalam kategori 'Kursi."


                      </p>
                    </div>
                  </Card.Body>
                  </Card>
    </div>
  )
}

export default Aktivitasadminmengeditprodukdataran