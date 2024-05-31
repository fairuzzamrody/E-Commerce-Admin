import React from 'react';
import Table from 'react-bootstrap/Table';

function CategoryTopSellersDataran() {
  const topSellingItems = [
    {
      imgSrc: 'assets/assets/img/product-5.jpg',
      name: 'Meja',
      productCount: 12,
      soldCount: 10,
    },
    {
      imgSrc: 'assets/assets/img/product-1.jpg',
      name: 'Sofa',
      productCount: 8,
      soldCount: 8,
    },
    {
      imgSrc: 'assets/assets/img/product-3.jpg',
      name: 'Kursi',
      productCount: 6,
      soldCount: 5,
    },
  ];

  return (
    <div>
      <div className="card top-selling overflow-auto">
        <div className="card-body pb-0">
          <h5 className="card-title">Kategori Dataran</h5>

          <Table  bordered hover>
            <thead>
              <tr>
                <th className="text-center">Kategori</th>
                <th className="text-center">Nama Kategori</th>
                <th className="text-center">Total Produk</th>
                <th className="text-center">Total Produk Terjual</th>
              </tr>
            </thead>
            <tbody>
              {topSellingItems.map((item, index) => (
                <tr key={index}>
                  <td className="text-center">
                    <a href="#">
                      <img src={item.imgSrc} alt={item.name} />
                    </a>
                  </td>
                  <td className="text-center">
                    <p className="fw-bold">{item.name}</p>
                  </td>
                  <td className="text-center">{item.productCount} Produk</td>
                  <td className="text-center fw-bold">{item.soldCount}x Terjual</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default CategoryTopSellersDataran;
    