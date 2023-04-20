import { useContext } from 'react';
import axios from 'axios';
import path from './routes.config.json';

// const token = cookies.tokenUsuario

// import AuthContext from '../context/AuthProvider';

// const { auth } = useContext(AuthContext);
// const token = auth.accessToken;

const meuAmigoPet = axios.create({
	baseURL: path.base_url,
	headers: {
		'Content-Type': 'application/json',
		// Authorization: `Bearer ${token}`,
	},
});

export default meuAmigoPet;
