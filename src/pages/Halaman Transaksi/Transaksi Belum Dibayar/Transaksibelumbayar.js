import React, { useState, useEffect } from 'react';
import Headeradmin from '../../../components/Header/Headeradmin';
import Sidebaradmin from '../../../components/Sidebar/Sidebaradmin';
import Bodymaintransaksibelumbayar from '../../../components/Bodymainpage/Body Main Transaksi/Transaksi Belum Bayar/Bodymaintransaksibelumbayar';
import Footeradmin from '../../../components/Footer/Footeradmin';
import Contentloading from '../../../components/Loaders/Contentloading';

function Transaksibelumbayar() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Gunakan setTimeout untuk menunggu 1.5 detik sebelum menghilangkan tampilan loading
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Membersihkan timeout jika komponen dibongkar sebelum waktu habis
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Contentloading />
      ) : (
        <>
          <Headeradmin />
          <Sidebaradmin />
          <Bodymaintransaksibelumbayar />
          <Footeradmin />
        </>
      )}
    </div>
  );
}

export default Transaksibelumbayar;
