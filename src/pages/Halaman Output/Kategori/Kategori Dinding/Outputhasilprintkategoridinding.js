import React, { useEffect, useState } from 'react';
import Contentloading from '../../../../components/Loaders/Contentloading';
import Contentoutputprintkategoridinding from '../../../../components/Kategoridinding/Content Output Print/Contentoutputprintkategoridinding';

function Outputhasilprintkategoridinding() {
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
                <Contentoutputprintkategoridinding />
          </>
        )}
      </div>
  )
}

export default Outputhasilprintkategoridinding