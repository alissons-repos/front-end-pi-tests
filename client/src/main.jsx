import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

// Páginas
import Entrar from './routes/Entrar';
import Registro from './routes/Registro';
import Feed from './routes/Feed';
import AuthAnuncios from './routes/AuthAnuncios';

// Estilos
import './index.css';

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: '/',
			},
			{
				path: '/entrar',
				element: <Entrar />,
			},
			{
				path: '/registro',
				element: <Registro />,
			},
			// {
			// 	path: '/sair',
			// },
			// {
			// 	path: '/usuarios',
			// 	element: <Usuarios />,
			// },
			// {
			// 	path: '/usuarios/:id',
			// },
			// {
			// 	path: '/auth/usuarios',
			// },
			// {
			// 	path: '/pets',
			// },
			// {
			// 	path: '/pets/:id',
			// },
			// {
			// 	path: '/auth/pets',
			// },
			// {
			// 	path: '/auth/pets/:id',
			// },
			{
				path: '/anuncios',
				element: <Feed />,
			},
			// {
			// 	path: '/anuncios/:id',
			// },
			{
				path: '/auth/anuncios',
				element: <AuthAnuncios />,
			},
			// {
			// 	path: '/auth/anuncios/:id',
			// },
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
