import { ROUTES } from '@/constants/app.constants';
import { Podcast } from '@/modules/podcast/domain/models/Podcast';
import { Link } from 'react-router-dom';

interface PodcastElementProps {
	podcast: Podcast;
}

export const PodcastElement = ({ podcast }: PodcastElementProps) => (
	<div className='podcast-element'>
		<Link className='no-style' to={`${ROUTES.PODCAST}/${podcast.id}`}>
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
);
