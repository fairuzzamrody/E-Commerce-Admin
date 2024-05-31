import React from 'react'
import { Card } from 'react-bootstrap'
import ContenttabelprodukflashsaledindingPC from "./ContenttabelprodukflashsaledidingPC"
import Contenttabelprodukflashsaledindingmobile from './Contenttabelprodukflashsaledindingmobile'

function Contenttabelprodukflashsaledinding() {
  return (
    <div>
      <hr/>
      <Card.Title> Produk Di Kategori Kabinet Dinding</Card.Title>
      <div className='d-none d-md-block'>
      <ContenttabelprodukflashsaledindingPC />
      </div>

      <div className='d-block d-lg-none'>
      <Contenttabelprodukflashsaledindingmobile />
      </div>
    </div>
  )
}

export default Contenttabelprodukflashsaledinding