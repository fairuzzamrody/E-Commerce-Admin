import React, { useEffect, useState } from 'react';
import Headeradmin from '../../../../components/Header/Headeradmin';
import Sidebaradmin from '../../../../components/Sidebar/Sidebaradmin';
import Bodymaintambahadmin from '../../../../components/Bodymainpage/Body Main Akun dan Ulasan/Akun Admin/Bodymaintambahadmin';
import Footeradmin from '../../../../components/Footer/Footeradmin';
import Contentloading from '../../../../components/Loaders/Contentloading';

function Tambahadmin() {
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
          <Bodymaintambahadmin />
          <Footeradmin />
        </>
      )}
    </div>
  );
}

export default Tambahadmin;
