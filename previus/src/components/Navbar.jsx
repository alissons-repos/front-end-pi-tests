import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<header>
			<nav className='navbar navbar-expand-lg bg-dark navbar-dark'>
				<div className='container-fluid px-5'>
					<Link to={'/entrar'} className='navbar-brand'>
						<img
							className='d-inline-block align-text-middle'
							src='./src/assets/svg/cat-svgrepo-com.svg'
							alt='Logo de Meu Amigo PET'
							width={64}
							height={64}
						/>
						Meu Amigo PET
					</Link>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navigationBarList'
						aria-controls='navigationBarList'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navigationBarList'>
						<ul className='navbar-nav ms-auto my-auto text-center'>
							<li className='nav-item'>
								<Link to={'/registro'} className='nav-link'>
									Registro
								</Link>
							</li>
							<li className='nav-item'>
								<Link to={'/'} className='nav-link'>
									Início
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Navbar;
