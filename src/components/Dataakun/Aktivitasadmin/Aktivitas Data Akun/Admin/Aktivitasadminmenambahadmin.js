import React from "react";
import { Card } from "react-bootstrap";

function Aktivitasadminmenambahadmin() {
	return (
		<div>
			<Card>
			<Card.Body>
				<Card.Title>
					<div className="d-flex justify-content-between align-items-center">
						<div className="d-flex align-items-center">
							<i
								class="bi bi-person-add mr-2"
								style={{ marginTop: "-10px" }}
							></i>
							<h4>Menambah Admin</h4>
						</div>
						<div>
							<small>1 Jam 30 Menit yang lalu</small>
						</div>
					</div>
				</Card.Title>

				<div>
					<p>
						Admin...(Misal Admin 1), Admin 1 telah menambahkan admin baru yaitu
						"Admin 3" ke dalam sistem. Dengan tindakan ini, Admin 3 sekarang
						memiliki akses penuh untuk mengelola platform ini. "
					</p>
				</div>
			</Card.Body>
			</Card>
		</div>
	);
}

export default Aktivitasadminmenambahadmin;
