import React, { useState, useEffect } from 'react';
import Headeradmin from '../../../components/Header/Headeradmin';
import Sidebaradmin from '../../../components/Sidebar/Sidebaradmin';
import Footeradmin from '../../../components/Footer/Footeradmin';

import Contentloading from '../../../components/Loaders/Contentloading';
import BodyMainDetailKategoriDinding from '../../../components/Bodymainpage/Body Main Kategori/Kategori Dinding/BodyMainDetailKategoriDinding';

function DetailKategoriDinding() {
    const [isLoading, setIsLoading] = useState(true);

  // Tampilkan loader selama 1.5 detik
  useEffect(() => {
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
          <BodyMainDetailKategoriDinding />
          <Footeradmin />
        </>
      )}
    </div>
  );
}

export default DetailKategoriDinding