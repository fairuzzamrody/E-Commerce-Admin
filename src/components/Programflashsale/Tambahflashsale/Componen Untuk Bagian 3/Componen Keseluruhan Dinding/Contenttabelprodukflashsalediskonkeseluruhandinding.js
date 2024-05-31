import React from 'react';
import ContenttabelprodukflashsalediskonkeseluruhandindingPC from './ContenttabelprodukflashsalediskonkeseluruhandindingPC';
import Contenttabelprodukflashsalediskonkeseluruhandindingmobile from './Contenttabelprodukflashsalediskonkeseluruhandindingmobile';

function ContentTabelProdukFlashSaleDindingDiskonKeseluruhan() {
  return (
    <div>

<div className='d-none d-md-block' style={{ marginTop: " -40px" }} >
      <ContenttabelprodukflashsalediskonkeseluruhandindingPC />
     </div>

     <div className='d-block d-lg-none'>
      <Contenttabelprodukflashsalediskonkeseluruhandindingmobile />
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

export default ContentTabelProdukFlashSaleDindingDiskonKeseluruhan;
