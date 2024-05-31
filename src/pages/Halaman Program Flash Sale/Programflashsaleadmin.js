import React, { useEffect, useState } from 'react';
import Headeradmin from '../../components/Header/Headeradmin';
import Sidebaradmin from '../../components/Sidebar/Sidebaradmin';
import Bodymainprogramflashsale from '../../components/Bodymainpage/Body Main Program Flash Sale/Bodymainprogramflashsale';
import Footeradmin from '../../components/Footer/Footeradmin';
import Contentloading from '../../components/Loaders/Contentloading';

function Programflashsaleadmin() {
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
          <Bodymainprogramflashsale />
          <Footeradmin />
        </>
      )}
    </div>
  );
}

export default Programflashsaleadmin;
