import React, { useEffect, useState } from 'react';
import Contentloading from '../../../../components/Loaders/Contentloading';
import Contentoutputprintlaporanharian from '../../../../components/Laporan/Content Print Laporan/Laporan Harian/Contentoutputprintlaporanharian';

function Outputhasilprintlaporanharian() {
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
                <Contentoutputprintlaporanharian />
				</>
			)}
		</div>
	);
}

export default Outputhasilprintlaporanharian