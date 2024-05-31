import React, { useState, useEffect } from 'react';
import Contentloading from '../../components/Loaders/Contentloading';
import ContentMain404Notfound from '../../components/Error Handling/ContentMain404Notfound';

function Halaman404Notfound() {
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

<ContentMain404Notfound />
          
          </>
        )}
      </div>
    );
  }

export default Halaman404Notfound