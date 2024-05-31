import React from "react";
import Table from "react-bootstrap/Table";

function CategoryTopSellers() {
	const centerText = {
		textAlign: "center",
	};

	const topSellingItems = [
		{
			imgSrc: "assets/assets/img/product-3.jpg",
			name: "Kabinet Dinding",
			productCount: 12,
			soldCount: 10,
		},
		{
			imgSrc: "assets/assets/img/product-2.jpg",
			name: "Sofa Dinding",
			productCount: 8,
			soldCount: 8,
		},
		{
			imgSrc: "assets/assets/img/product-5.jpg",
			name: "Kursi Dinding",
			productCount: 6,
			soldCount: 5,
		},
	];

	return (
		<div>
			<div className="card top-selling overflow-auto">
				<div className="card-body pb-0">
					<h5 className="card-title">Kategori Dinding</h5>

					<Table bordered hover>
						<thead>
							<tr>
								<th style={centerText}>Kategori</th>
								<th style={centerText}>Nama Kategori</th>
								<th style={centerText}>Total Produk</th>
								<th style={centerText}>Total Produk Terjual</th>
							</tr>
						</thead>
						<tbody>
							{topSellingItems.map((item, index) => (
								<tr key={index}>
									<td style={centerText}>
										<a href="#">
											<img src={item.imgSrc} alt={item.name} />
										</a>
									</td>
									<td style={centerText}>
										<p className="fw-bold">{item.name}</p>
									</td>
									<td style={centerText}>{item.productCount} Produk</td>
									<td style={centerText} className="fw-bold">
										{item.soldCount}x Terjual
									</td>
								</tr>
							))}
						</tbody>
					</Table>
				</div>
			</div>
		</div>
	);
}

export default CategoryTopSellers;
