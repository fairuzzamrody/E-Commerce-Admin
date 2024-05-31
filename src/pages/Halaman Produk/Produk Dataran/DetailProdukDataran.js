import React, { useEffect, useState } from 'react';
import Headeradmin from '../../../components/Header/Headeradmin';
import Sidebaradmin from '../../../components/Sidebar/Sidebaradmin';

import Footeradmin from '../../../components/Footer/Footeradmin';
import Contentloading from '../../../components/Loaders/Contentloading';
import BodyMainDetailProdukDataran from '../../../components/Bodymainpage/Body Main Produk/Produk Dataran/BodyMainDetailProdukDataran';

function DetailProdukDataran() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      // Simulate loading for 1.5 seconds
      const loaderTimeout = setTimeout(() => {
        setIsLoading(false);
      }, 1500);
  
      return () => {
        clearTimeout(loaderTimeout);
      };
    }, []);
  
    return (
      <div>
        {isLoading ? (
          <Contentloading />
        ) : (
          <>
            <Headeradmin />
            <Sidebaradmin />
            <BodyMainDetailProdukDataran />
             <Footeradmin />
          </>
        )}
      </div>
    );
  }

export default DetailProdukDataran