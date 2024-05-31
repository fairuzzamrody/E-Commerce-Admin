import React from "react";
import Contenttabelprodukflashsaledataranmobile from "./Contenttabelprodukflashsaledataranmobile";
import ContenttabelprodukflashsaledataranPC from "./ContenttabelprodukflashsaledataranPC";

function Contenttabelprodukflashsaledataran() {
	return (
		<div>
			<hr/>
			<h5 className="card-title">Produk Di Kategori Sofa</h5>
			<ContenttabelprodukflashsaledataranPC />
			<Contenttabelprodukflashsaledataranmobile />
		</div>
	);
}

export default Contenttabelprodukflashsaledataran;
