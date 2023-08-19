import { Link, Outlet } from 'react-router-dom';
import './App.css';

export const App: React.FC = () => {
	return (
		<div className='app-layout'>
			<Link className='no-style' to={'/'}>
				<h1>Podcasts</h1>
			</Link>

			<main className='app-layout__main'>
				<Outlet />
			</main>
		</div>
	);
};
