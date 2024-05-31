import React, { useState, useEffect } from 'react';
import Contentloading from '../../components/Loaders/Contentloading';
import ContentMainTidakadaKoneksiinternet from '../../components/Error Handling/ContentMainTidakadaKoneksiinternet';

function HalamanTidakAdaInternet() {
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

          <ContentMainTidakadaKoneksiinternet />
          
          </>
        )}
      </div>
    );
  }

export default HalamanTidakAdaInternet;
