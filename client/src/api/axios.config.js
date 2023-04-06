import axios from 'axios';
import path from './routes.config.json';

// const token = cookies.tokenUsuario

const meuAmigoPet = axios.create({
	baseURL: path.base_url,
	headers: {
		'Content-Type': 'application/json',
		// Authorization: `Bearer ${token}`,
	},
});

export default meuAmigoPet;
