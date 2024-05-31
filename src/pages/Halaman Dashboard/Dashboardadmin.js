import React, { useState, useEffect } from 'react';
import Headeradmin from '../../components/Header/Headeradmin';
import Sidebaradmin from '../../components/Sidebar/Sidebaradmin';
import Bodymainadmin from '../../components/Bodymainpage/Body Main Dashboard/Bodymaindashboard';
import Footeradmin from '../../components/Footer/Footeradmin';
import Contentloading from '../../components/Loaders/Contentloading';

const Dashboardadmin = () => {
  // const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });
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
          <Bodymainadmin />
          <Footeradmin />
        </>
      )}
    </div>
  );
};

export default Dashboardadmin;
