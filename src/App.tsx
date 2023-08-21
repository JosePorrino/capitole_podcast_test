import { Link, Outlet } from 'react-router-dom';
import { Header } from '@/components/header';
import useLoading from '@/hooks/useLoading';

export const App: React.FC = () => {
	const isLoading = useLoading();
	return (
		<div className='app-layout'>
			<Header>
				<Link to={'/'}>
					<h1>Podcasts</h1>
				</Link>
				{isLoading && <div className='pulse-loader' />}
			</Header>

			<main>
				<Outlet />
			</main>
		</div>
	);
};
