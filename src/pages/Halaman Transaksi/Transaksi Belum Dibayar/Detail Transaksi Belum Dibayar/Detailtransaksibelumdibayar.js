import React, { useState, useEffect } from 'react';
import Headeradmin from '../../../../components/Header/Headeradmin';
import Sidebaradmin from '../../../../components/Sidebar/Sidebaradmin';
import Footeradmin from '../../../../components/Footer/Footeradmin';
import Bodymaindetailtransaksibelumdibayar from '../../../../components/Bodymainpage/Body Main Transaksi/Transaksi Belum Bayar/Bodymaindetailtransaksibelumdibayar';
import Contentloading from '../../../../components/Loaders/Contentloading';

function Detailtransaksibelumdibayar() {
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
          <Bodymaindetailtransaksibelumdibayar />
          <Footeradmin />
        </>
      )}
    </div>
  );
}

export default Detailtransaksibelumdibayar;
