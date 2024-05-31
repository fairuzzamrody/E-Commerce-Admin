import React, { useState, useEffect } from 'react';
import Headeradmin from '../../components/Header/Headeradmin';
import SidebarAdmin from '../../components/Sidebar/Sidebaradmin';
import Footeradmin from '../../components/Footer/Footeradmin';
import Contentloading from '../../components/Loaders/Contentloading';
import Bodymainprofiladmin from '../../components/Bodymainpage/Body Main Akun dan Ulasan/Akun Admin/Bodymainprofiladmin';

function Profiladmin() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Setelah 1.5 detik, loading selesai
    }, 1500);
  }, []);

  return (
    <div>
      {loading ? (
        <Contentloading /> // Menampilkan loader selama loading = true
      ) : (
        <>
          <Headeradmin />
          <SidebarAdmin />
          <Bodymainprofiladmin />
          <Footeradmin />
        </>
      )}
    </div>
  );
}

export default Profiladmin;
