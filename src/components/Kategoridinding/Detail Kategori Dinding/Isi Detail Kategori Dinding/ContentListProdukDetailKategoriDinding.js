import React from "react";
import { Table, Image, Card } from "react-bootstrap";
function ContentListProdukDetailKategoriDinding() {
    const produkData = [
        {
          id: 1,
          nama: "Produk A",
          harga: 1000000, // Contoh harga dalam satuan Rupiah
          totalTerjual: 50,
          totalDilihat: 500,
          gambarUrl: "assets/assets/img/product-1.jpg",
        },
        {
          id: 2,
          nama: "Produk B",
          harga: 1500000, // Contoh harga dalam satuan Rupiah
          totalTerjual: 30,
          totalDilihat: 300,
          gambarUrl: "assets/assets/img/product-1.jpg",
        },
        // Tambahkan data produk lainnya
      ];
    
      // Fungsi untuk mengubah angka menjadi format rupiah
      function formatRupiah(angka) {
        var reverse = angka.toString().split("").reverse().join(""),
          ribuan = reverse.match(/\d{1,3}/g);
        ribuan = ribuan.join(".").split("").reverse().join("");
        return "Rp " + ribuan;
      }
    
      return (
        <Card>
          <Card.Body>
            <Card.Title>List Produk di Kategori Sofa</Card.Title>
            <Table responsive bordered hover>
              <thead>
                <tr>
                  <th style={{ textAlign: 'center' }}>Gambar</th>
                  <th style={{ textAlign: 'center' }}>Nama Produk</th>
                  <th style={{ textAlign: 'center' }}>Harga</th>
                  <th style={{ textAlign: 'center' }}>Total Terjual</th>
                  <th style={{ textAlign: 'center' }}>Total Dilihat</th>
                </tr>
              </thead>
              <tbody>
                {produkData.map((produk) => (
                  <tr key={produk.id}>
                    <td style={{ textAlign: 'center' }}>
                      <Image
                        src={produk.gambarUrl}
                        alt={produk.nama}
                        width="70" // Lebar gambar dalam piksel
                        height="70" // Tinggi gambar dalam piksel
                        fluid
                        style={{ borderRadius : "10px" }}
                      />
                    </td>
                    <td style={{ textAlign: 'center' }}>{produk.nama}</td>
                    <td style={{ textAlign: 'center' }}>{formatRupiah(produk.harga)}</td>
                    <td style={{ textAlign: 'center' }}>{produk.totalTerjual}x</td>
                    <td style={{ textAlign: 'center' }}>{produk.totalDilihat}x</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      );
    }

export default ContentListProdukDetailKategoriDinding