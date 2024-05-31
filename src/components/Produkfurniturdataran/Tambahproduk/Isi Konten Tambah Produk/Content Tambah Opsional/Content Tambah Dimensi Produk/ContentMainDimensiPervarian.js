import React from "react";
import ContentisidimensiPC from './ContentisidimensiPC'
import Contentisidimensimobile from './Contentisidimensimobile'
function ContentSkaladanDimensiProdukPervarian() {
	return (
		<div>
			<div className="d-none d-md-block">

				<ContentisidimensiPC />
			</div>

			<div
				className="
        d-block d-lg-none"
			>
				<Contentisidimensimobile />
			</div>

			<footer className="blockquote-footer mt-3">
				Kosongi kotak jika tidak ingin memberi Skala dan Dimensi pada varian
				tersebut.
			</footer>
			<footer className="blockquote-footer">
				Skala dan Dimensi ini juga akan tampil di Augmented Reality.
			</footer>
			<footer className="blockquote-footer">
				Jika mengaktifkan mode Dimensi Produk, pengguna tidak bisa memperbesar
				dan memperkecil produk di Augmented reality.
			</footer>
		</div>
	);
}

export default ContentSkaladanDimensiProdukPervarian;
