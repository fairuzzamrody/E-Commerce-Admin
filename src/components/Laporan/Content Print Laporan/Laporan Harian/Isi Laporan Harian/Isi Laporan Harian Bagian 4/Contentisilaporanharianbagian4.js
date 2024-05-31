import React from 'react'
import Contentisilaporanhariankategoriterlarisdataran from './Contentisilaporanhariankategoriterlarisdataran'
import Contentisilaporanhariankategoriterlarisdinding from './Contentisilaporanhariankategoriterlarisdinding'
import { Card } from 'react-bootstrap'

function Contentisilaporanharianbagian4() {
  return (
    <div>
         <div className="mt-4">
						<h2 style={{ fontSize: "1.5rem" }} className="fw-bold">
							Bagian 4: 5 Kategori Terlaris
						</h2>
                        <Card.Title>Kategori Dataran</Card.Title>
        <Contentisilaporanhariankategoriterlarisdataran />
        <Card.Title>Kategori Dinding</Card.Title>

        <Contentisilaporanhariankategoriterlarisdinding />
        </div>
    </div>
  )
}

export default Contentisilaporanharianbagian4