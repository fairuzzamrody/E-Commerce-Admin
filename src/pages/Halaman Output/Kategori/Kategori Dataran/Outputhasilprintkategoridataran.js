import React, { useEffect, useState } from 'react';
import Contentloading from '../../../../components/Loaders/Contentloading';
import Contentoutputprintkategoridataran from '../../../../components/Kategoridataran/Content Output Print/Contentoutputprintkategoridataran';

function Outputhasilprintkategoridataran() {
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
                <Contentoutputprintkategoridataran />

          </>
        )}
      </div>
  )
}

export default Outputhasilprintkategoridataran