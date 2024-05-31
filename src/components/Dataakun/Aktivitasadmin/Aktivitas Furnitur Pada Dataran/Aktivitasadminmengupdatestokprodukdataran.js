import React from 'react'
import { Card } from 'react-bootstrap'

function Aktivitasadminmengupdatestokprodukdataran() {
  return (
    <div>
      <Card>


         <Card.Body>
                                  {/* Sesuaikan dengan apa yang Admin LAKUKAN */}

                    <Card.Title>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                        <i class="bi bi-cart-check mr-2" style={{ marginTop: "-10px", fontSize: "25px" }}></i>

                          <h4>Mengupdate Stok Produk</h4>
                        </div>
                        <div>
                          <small>25 Menit yang lalu</small>
                        </div>
                      </div>
                    </Card.Title>

                    <div>
                      <p>
                                                {/* Sesuaikan dengan apa yang Admin LAKUKAN */}

                      Admin ....(Misal Admin 1), Admin 1 Telah mengupdate stok produk "Kursi Lipat" 
                      yang terdapat di Produk "Furnitur Pada Dataran" yang termasuk dalam kategori 
                      "Kursi" menjadi "30" yang semula tersisa "10".
                      </p>
                    </div>
                  </Card.Body>
                  </Card>
    </div>
  )
}

export default Aktivitasadminmengupdatestokprodukdataran