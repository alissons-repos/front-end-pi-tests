import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';

function App() {
	return (
		<div>
			<div className='appContainer'>
				<Outlet />
			</div>
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
