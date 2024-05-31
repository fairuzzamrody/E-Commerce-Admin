import React from 'react';
import ContenttabelprodukflashsalediskonkeseluruhandataranPC from './ContenttabelprodukflashsalediskonkeseluruhandataranPC';
import Contenttabelprodukflashsalediskonkeseluruhandataranmobile from './Contenttabelprodukflashsalediskonkeseluruhandataranmobile';

function ContentTabelProdukFlashSaleDataRandiskonKeseluruhan() {
  return (
    <div>

     <div className='d-none d-md-block' style={{ marginTop: " -40px" }} >
<ContenttabelprodukflashsalediskonkeseluruhandataranPC />
     </div>
     
     <div className=' d-block  d-lg-none '>
<Contenttabelprodukflashsalediskonkeseluruhandataranmobile />
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
  )
}

export default ContentTabelProdukFlashSaleDataRandiskonKeseluruhan;
