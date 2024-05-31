import React, { useState, useEffect } from 'react';
import Headeradmin from '../../../../components/Header/Headeradmin';
import Sidebaradmin from '../../../../components/Sidebar/Sidebaradmin';
import Footeradmin from '../../../../components/Footer/Footeradmin';
import Bodymaintambahprodukdinding from '../../../../components/Bodymainpage/Body Main Produk/Produk Dinding/Bodymaintambahprodukdinding';
import Contentloading from '../../../../components/Loaders/Contentloading';

function Tambahprodukdinding() {
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
          <Bodymaintambahprodukdinding />
          <Footeradmin />
        </>
      )}
    </div>
  );
}

export default Tambahprodukdinding;
