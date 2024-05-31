import React from "react";

import ContentInformasiProdukDindingPC from "./ContentInformasiProdukDindingPC";
import ContentInformasiProdukDindingMobile from "./ContentInformasiProdukDindingMobile";

function ContentInformasiProdukDinding() {
	return (
		<div>
			<div className="d-none d-md-block">
			<ContentInformasiProdukDindingPC />
			</div>

			<div className="d-block d-lg-none">
<ContentInformasiProdukDindingMobile />
			</div>
		</div>
	);
}

export default ContentInformasiProdukDinding;
