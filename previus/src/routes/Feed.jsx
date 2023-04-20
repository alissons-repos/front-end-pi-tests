import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import meuAmigoPet from '../api/axios.config';

function Feed() {
	const [posts, setPosts] = useState([]);

	const getPosts = async () => {
		console.log('Testando!');
		// try {
		// 	const res = await meuAmigoPet.get('/anuncios');
		// 	const data = res.data;
		// 	setPosts(data);
		// } catch (error) {
		// 	console.log(error);
		// }
		await meuAmigoPet
			.get('/anuncios')
			.then((res) => setPosts(res?.data))
			.catch((error) => console.log(error?.response));
	};

	useEffect(() => {
		getPosts();
	}, []);

	return (
		<div>
			<h1>Feed de Anúncios</h1>
			<div className='container-fluid bg-success text-white'>
				{posts.length == 0 ? (
					<p>Loading...</p>
				) : (
					posts.map((post) => {
						return (
							<div className='post' key={post._id}>
								<h2>{post.titulo}</h2>
								<p>{post.tipo}</p>
								<p>{post.donoAnuncio}</p>
								<Link to={`/anuncios/${post._id}`} className='btn btn-primary'>
									Conferir postagem
								</Link>
							</div>
						);
					})
				)}
			</div>
		</div>
	);
}

export default Feed;
