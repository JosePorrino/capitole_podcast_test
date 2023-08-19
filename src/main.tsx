import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import { withProviders } from './router/router-provider.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	withProviders(<App />)
);
