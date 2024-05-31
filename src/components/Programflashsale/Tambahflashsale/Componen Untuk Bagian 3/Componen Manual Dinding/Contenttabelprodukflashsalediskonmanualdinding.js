import React from "react";
import ContenttabelprodukflashsalediskonmanualdindingPC from "./ContenttabelprodukflashsalediskonmanualdindingPC";
import Contenttabelprodukflashsalediskonmanualdindingmobile from "./Contenttabelprodukflashsalediskonmanualdindingmobile";

function Contenttabelprodukflashsalediskonmanualdinding() {
  return (
    <div>
      <div className="d-none d-md-block">
      <ContenttabelprodukflashsalediskonmanualdindingPC />
      </div>

      <div className="d-block d-lg-none">
        <Contenttabelprodukflashsalediskonmanualdindingmobile />
        <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-end">
    <li class="page-item disabled">
      <a class="page-link">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
        </div>
    </div>
  );
}

export default Contenttabelprodukflashsalediskonmanualdinding;
