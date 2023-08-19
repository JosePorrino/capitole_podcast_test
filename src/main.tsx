import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import { withProviders } from '@/router/router-provider.tsx';
import '@/assets/scss/main.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
	withProviders(<App />)
);
