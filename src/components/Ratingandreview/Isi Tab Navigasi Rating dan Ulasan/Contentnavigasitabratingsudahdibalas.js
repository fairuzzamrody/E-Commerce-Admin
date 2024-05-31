import React from "react";
import { Card, Badge } from "react-bootstrap";
import { BiShoppingBag } from "react-icons/bi";

import Ratingdanulasansudahdibalas from "../Penilaiandanulasan/Ratingdanulasansudahdibalas";

function Contentnavigasitabratingsudahdibalas() {
  return (
    <div>
         <div className="d-flex justify-content-between mt-2">
                  <Card.Title>
                    Furnitur Dataran{" "}
                    <div class="badge rounded-pill bg-success mr-2">
                      {" "}
                      <small className="mr-1">2 Ulasan</small>{" "}
                      <i class="bi bi-check-all"></i>
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

                    <Ratingdanulasansudahdibalas />
                    <Ratingdanulasansudahdibalas />
<hr/>
                <Card.Title>
                  Furnitur Dinding{" "}
                  <div class="badge rounded-pill bg-success mr-2">
                    {" "}
                    <small className="mr-1"> Total 2 Ulasan</small>{" "}
                    <i class="bi bi-check-all"></i>
                  </div>
                </Card.Title>
                <Ratingdanulasansudahdibalas />
    </div>
  )
}

export default Contentnavigasitabratingsudahdibalas