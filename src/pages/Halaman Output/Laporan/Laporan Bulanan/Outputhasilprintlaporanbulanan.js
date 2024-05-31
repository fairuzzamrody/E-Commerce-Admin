import React, { useEffect, useState } from 'react';
import Contentloading from '../../../../components/Loaders/Contentloading';
import Contentoutputprintlaporanbulanan from '../../../../components/Laporan/Content Print Laporan/Laporan Bulanan/Contentoutputprintlaporanbulanan';

function Outputhasilprintlaporanbulanan() {
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
                    <Contentoutputprintlaporanbulanan />
				</>
			)}
		</div>
	);
}

export default Outputhasilprintlaporanbulanan