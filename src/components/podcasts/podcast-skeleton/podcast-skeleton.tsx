import { useEffect, useRef, useState } from 'react';

interface PodcastSkeletonProps {
	customKey?: string;
}

export const PodcastSkeleton = ({
	customKey = 'skeletonKey_dafault',
}: PodcastSkeletonProps) => (
	<div className='skeleton-box podcast-skeleton' key={customKey} />
);

export const PodcastSkeletonLine = () => {
	const [elementosPorLinea, setElementosPorLinea] = useState(0);
	const gridContainerRef = useRef<HTMLDivElement | null>(null);
	const gridItemRef = useRef<HTMLDivElement | null>(null);

	const calcularElementosPorLinea = () => {
		if (gridContainerRef.current && gridItemRef.current) {
			const containerWidth = gridContainerRef.current.offsetWidth;
			const itemWidth = gridItemRef.current.offsetWidth;

			const elementos = Math.floor(containerWidth / itemWidth);
			setElementosPorLinea(elementos);
		}
	};

	useEffect(() => {
		calcularElementosPorLinea();
		window.addEventListener('resize', calcularElementosPorLinea);

		return () => {
			window.removeEventListener('resize', calcularElementosPorLinea);
		};
	}, []);

	const renderSkeletons = () => {
		const skeletons = [];
		for (let i = 0; i < elementosPorLinea - 1; i++) {
			const key = `skeletonKey_${i}`;
			skeletons.push(<PodcastSkeleton key={key} />);
		}
		return skeletons;
	};

	return (
		<div className='podcast-skeleton-container' ref={gridContainerRef}>
			<div className='skeleton-box podcast-skeleton' ref={gridItemRef} />
			{renderSkeletons()}
		</div>
	);
};
