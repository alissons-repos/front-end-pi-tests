import axios from 'axios';

// const token = cookies.tokenUsuario

const meuAmigoPet = axios.create({
	baseURL: 'http://localhost:8080/',
	headers: {
		'Content-Type': 'application/json',
		// Authorization: `Bearer ${token}`,
	},
});

export default meuAmigoPet;
