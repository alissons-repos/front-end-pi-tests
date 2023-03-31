import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRoute, RouterProvider, Route } from 'react-router-dom';

// Páginas
import App from './App';

// Estilos
import './index.css';

const router = createBrowserRoute([
	{
		element: <App />,
		children: [
			// {
			// 	path: '/',
			// 	element: <BoasVindas />,
			// },
			{
				path: '/entrar',
				element: <Entrar />,
			},
			{
				path: '/registro',
			},
			{
				path: '/sair',
			},
			{
				path: '/usuarios',
			},
			{
				path: '/usuarios/:id',
			},
			{
				path: '/auth/usuarios',
			},
			{
				path: '/pets',
			},
			{
				path: '/pets/:id',
			},
			{
				path: '/auth/pets',
			},
			{
				path: '/auth/pets/:id',
			},
			{
				path: '/anuncios',
			},
			{
				path: '/anuncios/:id',
			},
			{
				path: '/auth/anuncios',
			},
			{
				path: '/auth/anuncios/:id',
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
