import React from "react";
import { Card, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

// maksimal menampilkan 5
export default function Contenttransaksibaru() {

	const transactions = [
		{
			customer: "Jhon Doe 1",
			purchase: "1 Produk",
			status: "Menunggu Pembayaran",
      Waktupemesanan : "2001-02-21",
			link: "/Detailtransaksibelumdibayar",
		},
		{
			customer: "Jhon Doe 2",
			purchase: "12 Produk",
			status: "Menunggu Pembayaran",
      Waktupemesanan : "2001-02-21",
			link: "/Detailtransaksibelumdibayar",
		},
		{
			customer: "Jhon Doe 3",
			purchase: "1 Produk",
			status: "Menunggu Pembayaran",
      Waktupemesanan : "2001-02-21",
			link: "/Detailtransaksibelumdibayar",
      
		},
    {
			customer: "Jhon Doe 4",
			purchase: "1 Produk",
			status: "Menunggu Pembayaran",
      Waktupemesanan : "2001-02-21",
			link: "/Detailtransaksibelumdibayar",
      
		},
    {
			customer: "Jhon Doe 5",
			purchase: "1 Produk",
			status: "Menunggu Pembayaran",
      Waktupemesanan : "2001-02-21",
			link: "/Detailtransaksibelumdibayar",
		},
      ];

	return (
		<div>
			<Card>
				<div className="filter"></div>

				{/* Max 5 transaksi belum bayar yang ditampilkan */}
				<Card.Body>
					<Card.Title>List Transaksi Belum Di Bayar</Card.Title>

				
					<Table bordered hover>
						<thead>
							<tr>
								<th className="text-center">Pelanggan</th>
								<th className="text-center">Pembelian</th>
                <th className="text-center">Waktu Pemesanan</th>
								<th className="text-center">Status</th>
								<th className="text-center">Aksi</th>
							</tr>
						</thead>
						<tbody>
							{transactions.map((transaction, index) => (
								<tr key={index}>
									<td className="text-center">
										<a href={transaction.link} className="text-dark fw-bold">
											{transaction.customer}
										</a>
									</td>
									<td className="text-center">{transaction.purchase}</td>
                  <td className="text-center">{transaction.Waktupemesanan}</td>

									<td className="text-center">
										<span
											className={`badge ${getBadgeColor(transaction.status)}`}
											style={{ whiteSpace: "pre-line" }}
										>
											{transaction.status === "Menunggu Pembayaran"
												? "Menunggu\nPembayaran"
												: transaction.status}
										</span>
									</td>
									<td className="text-center">
										<a href="/Transaksibelumbayar">Lihat</a>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
					{/*  */}
				</Card.Body>
				<Card.Footer>
					<Link to="/Transaksibelumbayar" target="_blank">
						<div
							className="d-flex justify-content-end"
							style={{ marginBottom: "-10px" }}
						>
							<p style={{ marginRight: "20px" }}>Selengkapnya</p>
							<FontAwesomeIcon
								icon={faArrowRight}
								style={{ fontSize: "20px", marginTop: "2px" }}
							/>
						</div>
					</Link>
				</Card.Footer>
			</Card>
		</div>
	);
}

function getBadgeColor(status) {
	switch (status) {
		case "Lunas":
			return "bg-success";
		case "Menunggu Pembayaran":
			return "bg-primary";
		case "Dibatalkan":
			return "bg-danger";
		case "Kedaluwarsa":
			return "bg-danger";
		default:
			return "bg-info";
	}
}
