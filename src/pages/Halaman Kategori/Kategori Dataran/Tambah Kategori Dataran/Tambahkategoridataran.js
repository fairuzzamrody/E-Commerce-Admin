import React, { useState, useEffect } from 'react';
import Headeradmin from '../../../../components/Header/Headeradmin';
import Sidebaradmin from '../../../../components/Sidebar/Sidebaradmin';
import Footeradmin from '../../../../components/Footer/Footeradmin';
import Bodymaintambahkategoridataran from '../../../../components/Bodymainpage/Body Main Kategori/Kategori Dataran/Bodymaintambahkategoridataran';
import Contentloading from '../../../../components/Loaders/Contentloading';

function Tambahkategoridataran() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading selama 1.5 detik
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Membersihkan timer jika komponen dibongkar sebelum loading selesai
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Contentloading />
      ) : (
        <>
          <Headeradmin />
          <Sidebaradmin />
          <Bodymaintambahkategoridataran />
          <Footeradmin />
        </>
      )}
    </div>
  );
}

export default Tambahkategoridataran;
