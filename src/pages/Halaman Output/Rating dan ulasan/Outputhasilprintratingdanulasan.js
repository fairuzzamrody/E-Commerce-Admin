import React, { useEffect, useState } from 'react';
import Contentoutputprintratingdanulasan from '../../../components/Ratingandreview/Content Output Print/Contentoutputprintratingdanulasan';
import Contentloading from '../../../components/Loaders/Contentloading';

function Outputhasilprintratingdanulasan() {
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
            <Contentoutputprintratingdanulasan />
          </>
        )}
      </div>
  )
}

export default Outputhasilprintratingdanulasan