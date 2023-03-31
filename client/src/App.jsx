import { useEffect, useState } from 'react';
import './App.css';

function App() {
	const [backEndData, setBackEndData] = useState([]);

	useEffect(() => {
		fetch('/usuarios')
			.then((response) => response.json())
			.then((data) => {
				setBackEndData(data);
				console.log(data);
			});
	}, []);

	return (
		<div>
			<h1>Olá</h1>
			{typeof backEndData === 'undefined' ? (
				<p>Loading...</p>
			) : (
				backEndData.map((user, index) => {
					<p key={index}>{user.nome}</p>;
				})
			)}
			{backEndData.map((user, index) => {
				<p key={index}>{user.nome}</p>;
			})}
		</div>
	);
}

export default App;
