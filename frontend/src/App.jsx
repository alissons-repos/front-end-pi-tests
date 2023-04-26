import { Outlet } from 'react-router-dom';
import Feed from './routes/Feed';
import './App.css';

function App() {
	return (
		<div className='App'>
			{/* <Outlet /> */}
			<Feed />
		</div>
	);
}

export default App;
