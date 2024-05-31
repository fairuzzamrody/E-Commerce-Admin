import React from 'react'
import ContentisiDimensiMobile from './ContentisiDimensiMobile'
import ContentisiDimensiPC from './ContentisiDimensiPC'
function ContentisiSkaladanDimensiProdukDindingPervarian() {
    return (
        <div>
            <div className='d-none d-md-block'>
            {/* <ContentisiSkaladanDimensiDindingPC  /> */}
            <ContentisiDimensiPC />
            </div>
    
            <div className='
            d-block d-lg-none'>
            <ContentisiDimensiMobile />
            </div>
       
            <footer className="blockquote-footer mt-3">
				Kosongi kotak jika tidak ingin memberi Skala dan Dimensi pada varian
				tersebut.
			</footer>
			<footer className="blockquote-footer">
      Dimensi ini juga akan tampil di Augmented Reality dan saat pelanggan akan memasukkan produk ke keranjang.
			</footer>
			<footer className="blockquote-footer">
				Jika mengaktifkan mode Dimensi Produk, pengguna tidak bisa memperbesar
				dan memperkecil produk di Augmented reality.
			</footer>
        </div>
      );
    }

export default ContentisiSkaladanDimensiProdukDindingPervarian