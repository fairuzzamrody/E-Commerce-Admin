import React, { useState, useEffect } from 'react';
import Headeradmin from '../../../components/Header/Headeradmin';
import Sidebaradmin from '../../../components/Sidebar/Sidebaradmin';
import Bodymaintransaksi from '../../../components/Bodymainpage/Body Main Transaksi/Transaksi Sudah Bayar/Bodymaintransaksi';
import Footeradmin from '../../../components/Footer/Footeradmin';
import Contentloading from '../../../components/Loaders/Contentloading';

function Transaksisudahbayar() {
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
          <Bodymaintransaksi />
          <Footeradmin />
        </>
      )}
    </div>
  );
}

export default Transaksisudahbayar;
