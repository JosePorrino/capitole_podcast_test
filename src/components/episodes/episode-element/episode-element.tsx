import { ROUTES } from '@/constants/app.constants';
import { Episode } from '@/modules/podcast/domain/models/Episode';
import { Link } from 'react-router-dom';

interface EpisodeElementProps {
	episode: Episode;
	podcastId: string;
}

export const EpisodeElement = ({ episode, podcastId }: EpisodeElementProps) => {
	const msToDuration = (ms: number | undefined): string => {
		if (!ms) return '-';
		const seconds = Math.floor((ms / 1000) % 60);
		const minutes = Math.floor((ms / (1000 * 60)) % 60);
		const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);

		const hoursStr = hours < 10 ? `0${hours}` : hours;
		const minutesStr = minutes < 10 ? `0${minutes}` : minutes;
		const secondsStr = seconds < 10 ? `0${seconds}` : seconds;

		return `${
			hoursStr === '00' ? '' : `${hoursStr}:`
		}${minutesStr}:${secondsStr}`;
	};

	return (
		<tr key={episode.id}>
			<td className='episodes-list-title'>
				<Link
					to={`${ROUTES.PODCAST}/${podcastId}${ROUTES.EPISODE}/${episode.id}`}
				>
					{episode.name}
				</Link>
			</td>
			<td>{new Date(episode.releaseDate).toLocaleDateString()}</td>
			<td className='episodes-list-duration'>
				{msToDuration(episode.duration)}
			</td>
		</tr>
	);
};
