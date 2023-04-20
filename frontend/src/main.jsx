import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Register from './routes/Register';
import Login from './routes/Login';
import Profile from './routes/Profile';

import './index.css';

// import Root, { rootLoader } from "./routes/root";
// import Team, { teamLoader } from "./routes/team";

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		loader: appLoader,
		children: [
			{
				path: 'register',
				element: <Register />,
				loader: registerLoader,
			},
			{
				path: 'login',
				element: <Login />,
				loader: loginLoader,
			},
		],
	},
	{
		path: '/auth',
		element: <App />,
		loader: authLoader,
		children: [
			{
				path: 'profile',
				element: <Profile />,
				loader: profileLoader,
			},
			{
				path: 'pets',
				element: <Pets />,
				loader: petsLoader,
			},
			{
				// path: 'posts/:postID',
				path: 'posts',
				element: <Posts />,
				loader: postsLoader,
			},
			{
				path: 'feed',
				element: <Feed />,
				loader: feedLoader,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
