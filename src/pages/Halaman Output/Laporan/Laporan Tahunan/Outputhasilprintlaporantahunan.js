import React, { useEffect, useState } from "react";
import Contentloading from "../../../../components/Loaders/Contentloading";
import Contentoutputprintlaporantahunan from "../../../../components/Laporan/Content Print Laporan/Laporan Tahunan/Contentoutputprintlaporantahunan";

function Outputhasilprintlaporantahunan() {
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
					<Contentoutputprintlaporantahunan />
				</>
			)}
		</div>
	);
}

export default Outputhasilprintlaporantahunan;
