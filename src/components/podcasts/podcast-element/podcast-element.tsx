import { memo } from 'react';
import { ROUTES } from '@/constants/app.constants';
import { Podcast } from '@/modules/podcast/domain/models/Podcast';
import { Link } from 'react-router-dom';

interface PodcastElementProps {
	className?: string;
	podcast: Podcast;
}

export const PodcastElement = memo(
	({ className, podcast }: PodcastElementProps) => (
		<div className={['podcast-element', className].join(' ')}>
			<Link to={`${ROUTES.PODCAST}/${podcast.id}`}>
				<div className='podcast-element-content'>
					<img
						loading='lazy'
						className='podcast-element-image'
						src={podcast.image}
						alt={podcast.name}
					/>
					<h3 className='podcast-element-name'>{podcast.name}</h3>
					<p className='podcast-element-author'>Author: {podcast.author}</p>
				</div>
			</Link>
		</div>
	)
);
