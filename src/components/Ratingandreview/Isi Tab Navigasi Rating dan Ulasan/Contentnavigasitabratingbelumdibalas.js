import { Card } from "react-bootstrap";

import Ratingdanulasanbelumdibalas from "../Penilaiandanulasan/Ratingdanulasanbelumdibalas";

function Contentnavigasitabratingbelumdibalas() {
	return (
		<div>
         <div className="d-flex justify-content-between mt-2">
				<Card.Title>
					Furnitur Dataran{" "}
					<div class="badge rounded-pill bg-primary mr-2">
						{" "}
						<small>2 Ulasan</small> 						<i class="bi bi-chat-left-text ml-1"></i>
{" "}
					</div>
				</Card.Title>
				<Card.Title>
					<div class="dropdown">
						<button
							class="btn btn-outline-secondary dropdown-toggle"
							type="button"
							id="dropdownMenuButton1"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							Filter
						</button>
						<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
							<li>
								<a class="dropdown-item" href="#">
									Terbaru
								</a>
							</li>
							<li>
								<a class="dropdown-item" href="#">
									Terlama
								</a>
							</li>
							<li>
								<a class="dropdown-item" href="#">
									Rating Tertinggi
								</a>
							</li>
							<li>
								<a class="dropdown-item" href="#">
									Rating Terendah
								</a>
							</li>
						</ul>
					</div>
				</Card.Title>
			</div>
			<Ratingdanulasanbelumdibalas />
			<hr/>
			<Card.Title>
				Furnitur Dinding{" "}
				<div class="badge rounded-pill bg-primary mr-2">
					{" "}
					<i class="bi bi-chat-left-text"></i>
					<small className="ml-1">2 Ulasan</small>{" "}
				</div>
			</Card.Title>
			<Ratingdanulasanbelumdibalas />
		</div>
	);
}

export default Contentnavigasitabratingbelumdibalas;
