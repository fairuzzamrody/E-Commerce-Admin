import React, { useEffect, useState } from 'react';
import Headeradmin from '../../../../components/Header/Headeradmin';
import Sidebaradmin from '../../../../components/Sidebar/Sidebaradmin';
import Bodymaintambahkategoridinding from '../../../../components/Bodymainpage/Body Main Kategori/Kategori Dinding/Bodymaintambahkategoridinding';
import Footeradmin from '../../../../components/Footer/Footeradmin';
import Contentloading from '../../../../components/Loaders/Contentloading';

function Tambahkategoridinding() {
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
          <Bodymaintambahkategoridinding />
          <Footeradmin />
        </>
      )}
    </div>
  );
}

export default Tambahkategoridinding;
