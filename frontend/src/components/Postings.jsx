import { useEffect, useState } from 'react';
import postagens from '../data/postagens.json';

const Postings = () => {
	const [imagens, setImagens] = useState([]);

	const getImage = async () => {
		fetch(`https://api.thedogapi.com/v1/images/search?limit=${postagens.length}`)
			.then((res) => {
				if (!res.ok) throw Error('Erro ao requisitar fotos de TheDogAPI.');
				return res.json();
			})
			.then((data) => {
				let lista = [];
				for (let i = 0; i < postagens.length; i++) {
					postagens[i].imagem = data[i].url;
					lista.push = data[i].url;
				}
				setImagens(lista);
			})
			.catch((error) => {
				console.error(error);
				throw Error(error.message);
			});
	};

	useEffect(() => {
		getImage();
	}, []);
	// Funcionou, mas acredito que a melhor opção é ter imagens estáticas

	return (
		<div className='row'>
			{postagens ? (
				postagens.map((post) => (
					<li key={post.id} className='card col-4 g-5'>
						<img src={post.imagem} className='card-img-top img-card text-center' alt='' />
						<div className='card-body'>
							<h5 className='card-title'>{post.titulo}</h5>
							<p className='card-text descricao'>{post.descricao}</p>
							<a href='#' className='btn btn-primary'>
								Mostar mais
							</a>
						</div>
					</li>
				))
			) : (
				<p>Não há postagens no momento</p>
			)}
		</div>
	);
};

export default Postings;
