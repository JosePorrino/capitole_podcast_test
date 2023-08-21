import { Link } from 'react-router-dom';
import { Podcast } from '@/modules/podcast/domain/models/Podcast';
import { Card } from '@/components/card/card';
import { ROUTES } from '@/constants/app.constants';

interface PodcastDetailProps {
	className?: string;
	podcast: Podcast;
}

export const PodcastDetail = ({ className, podcast }: PodcastDetailProps) => {
	return (
		<Card className={['podcast-detail', className].join(' ')}>
			<div className='podcast-detail-image-container'>
				<img
					loading='lazy'
					className='podcast-detail-image'
					src={podcast?.image}
					alt={podcast?.name}
				/>
			</div>
			<hr />
			<div className='podcast-detail-info'>
				<Link className='no-style' to={`${ROUTES.PODCAST}/${podcast?.id}`}>
					<h1 className='podcast-detail-title'>{podcast?.name}</h1>
				</Link>
				<p className='podcast-detail-author'>by {podcast?.author}</p>
			</div>
			<hr />
			<div>
				<h2 className='podcast-detail-subtitle'>Description:</h2>
				<p className='podcast-detail-description' title={podcast?.description}>
					{podcast?.description}
				</p>
			</div>
		</Card>
	);
};
