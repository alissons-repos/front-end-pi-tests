import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';

const petsList = [
	{
		id: 'id hash 1',
		owner: 'owner hash 1',
		name: 'nome 1',
		sex: 'f',
		age: 1,
		breed: 'raça 1',
		avatar: 'https://dog.ceo/api/breeds/image/random',
	},
	{
		id: 'id hash 2',
		owner: 'owner hash 2',
		name: 'nome 2',
		sex: 'm',
		age: 2,
		breed: 'raça 2',
		avatar: 'https://dog.ceo/api/breeds/image/random',
	},
	{
		id: 'id hash 3',
		owner: 'owner hash 3',
		name: 'nome 3',
		sex: 'f',
		age: 3,
		breed: 'raça 3',
		avatar: 'https://dog.ceo/api/breeds/image/random',
	},
	{
		id: 'id hash 4',
		owner: 'owner hash 4',
		name: 'nome 4',
		sex: 'm',
		age: 4,
		breed: 'raça 4',
		avatar: 'https://dog.ceo/api/breeds/image/random',
	},
	{
		id: 'id hash 5',
		owner: 'owner hash 5',
		name: 'nome 5',
		sex: 'f',
		age: 5,
		breed: 'raça 5',
		avatar: 'https://dog.ceo/api/breeds/image/random',
	},
];

function App() {
	return (
		<div className='appContainer'>
			{/* <Outlet /> */}
			<main>
				<h1>Eae, Professor. Suaveira?</h1>
				<p>Se liga nos meus cachorros!</p>
				<div>
					{petsList ? (
						<ul
							style={{
								listStyle: 'none',
								display: 'flex',
								flexDirection: 'column',
								gap: '32px',
							}}
						>
							{petsList.map((pet, id) => (
								<li
									key={pet.id}
									style={{
										backgroundColor: 'gray',
										color: 'white',
									}}
								>
									<div
										style={{
											display: 'flex',
											justifyContent: 'flex-start',
											gap: '32px',
										}}
									>
										<img
											style={{
												width: '200px',
												borderRadius: '50%',
											}}
											key={pet.avatar.message}
											src={fetch(pet.avatar).then((res) => {
												console.log(res);
												res.message;
											})}
										/>
										<div>
											<h3>{pet.name}</h3>
											<p>{pet.sex === 'm' ? 'Macho' : 'Fêmea'}</p>
											<p>{pet.age}</p>
											<span>{pet.breed}</span>
										</div>
									</div>
								</li>
							))}
						</ul>
					) : (
						<h2>Cadê os cães?!</h2>
					)}
				</div>
			</main>
		</div>
	);
}

export default App;

// const [backEndData, setBackEndData] = useState([]);

// useEffect(() => {
// 	fetch('/usuarios')
// 		.then((response) => response.json())
// 		.then((data) => {
// 			setBackEndData(data);
// 			console.log(data);
// 		});
// }, []);

// {/* <h1>Olá</h1>
// {typeof backEndData === 'undefined' ? (
// 	<p>Loading...</p>
// ) : (
// 	backEndData.map((user, index) => {
// 		<p key={index}>{user.nome}</p>;
// 	})
// )}
// {backEndData.map((user, index) => {
// 	<p key={index}>{user.nome}</p>;
// })} */}
