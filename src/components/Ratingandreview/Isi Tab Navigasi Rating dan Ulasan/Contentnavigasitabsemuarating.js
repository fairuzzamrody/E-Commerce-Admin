import React from "react";
import { Card } from "react-bootstrap";

import Ratingdanulasanbelumdibalas from "../Penilaiandanulasan/Ratingdanulasanbelumdibalas";
import Ratingdanulasansudahdibalas from "../Penilaiandanulasan/Ratingdanulasansudahdibalas";

function Contentnavigasitabsemuarating() {
  return (
    <div>
         {/* Start Bagian Semua */}
         <div className="d-flex justify-content-between mt-2">
                  <Card.Title>
                    Furnitur Dataran{" "}
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
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
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
                <Ratingdanulasansudahdibalas />
                <hr/>
                <Card.Title>
                  Furnitur Dinding{" "}
                </Card.Title>
                <Ratingdanulasanbelumdibalas />
                <Ratingdanulasansudahdibalas />
    </div>
  )
}

export default Contentnavigasitabsemuarating