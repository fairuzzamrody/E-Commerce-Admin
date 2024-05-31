import React, { useEffect, useState } from 'react';
import Contentloading from '../../../../components/Loaders/Contentloading';

import Contentoutputprintprodukdataran from '../../../../components/Produkfurniturdataran/Content Output Print/Contentoutputprintprodukdataran';

function Outputhasilprintprodukdataran() {
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
            <Contentoutputprintprodukdataran />
          </>
        )}
      </div>
  )
}

export default Outputhasilprintprodukdataran