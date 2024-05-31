import React, { useEffect, useState } from 'react';
import Contentloading from '../../../../components/Loaders/Contentloading';
import Contentoutputprintprodukdinding from '../../../../components/Produkfurniturdinding/Content Output Print/Contentoutputprintprodukdinding';

function Outputhasilprintprodukdinding() {
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
        <Contentoutputprintprodukdinding />
          </>
        )}
      </div>
  )
}

export default Outputhasilprintprodukdinding