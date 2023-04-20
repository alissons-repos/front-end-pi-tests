import React from 'react';
import { postsList } from '../apis/data';

const Feed = () => {
	return (
		<div>
			<h1>Feed</h1>
			{postsList ? (
				<ul>
					{postsList.map((post, id) => (
						<li key={post.id}>
							<h3>{post.title}</h3>
							<p>{post.descrip}</p>
							<p>{post.owner}</p>
							<span>{post.category}</span>
						</li>
					))}
				</ul>
			) : (
				<h2>Não há anúncios para visualização no momento!</h2>
			)}
		</div>
	);
};

export default Feed;
