import { useState, useEffect, useContext } from 'react';

import useAuth from '../hooks/useAuth';
import AuthContext from '../context/AuthProvider';
// AuthContext contém o estado global, enquanto AuthProvider é o componente que transporta esse estado.

import meuAmigoPet from '../api/axios.config';
import path from '../api/routes.config.json';

import './Entrar.css';

function Entrar() {
	const { setAuth } = useAuth();

	const [email, setEmail] = useState('');
	const [senha, setSenha] = useState('');
	const [erro, setErro] = useState('');

	useEffect(() => {
		setErro('');
	}, [email, senha]);

	const handleSubmit = async (event) => {
		event.preventDefault();

		await meuAmigoPet
			.post(path.login_url, JSON.stringify({ email, senha }), {
				headers: {
					withCredentials: true,
					//TODO: pesquisar a necessidade dessa configuração
				},
			})
			.then((res) => {
				// console.log(res);
				console.log(res?.data);
				// console.log(res?.data.accessToken);

				const accessToken = res?.data?.Token;
				// const roles = res?.data?.roles;

				setAuth({ email, accessToken });
				setEmail('');
				setSenha('');
			})
			.catch((error) => {
				console.log(error?.response);
				setErro('ALGO DEU ERRADO IRMÃO');
			});
	};

	return (
		<main className='body-custom container-fluid'>
			<div className='row justify-content-center align-items-center' style={{ height: '100vh' }}>
				<div
					className='banner-custom col-10 col-lg-5 h-75 align-items-center bg-success px-4 py-5 m-3 text-white'
					id='banner'
				>
					<h1 className='display-2'>Hello, world!</h1>
					<p className='lead'>
						This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
						featured content or information.
					</p>
					<hr className='my-4' />
					<p>
						It uses utility classes for typography and spacing to space content out within the larger
						container.
					</p>
					<a className='btn btn-outline-light btn-lg rounded-4' href='#'>
						Learn more
					</a>
				</div>
				<div
					className='form-custom col-10 col-lg-5 h-75 align-items-center bg-danger px-4 py-5 m-3 text-white'
					id='form'
				>
					<h2 className='m-3 text-center display-4'>Entrar</h2>
					<form className='' onSubmit={handleSubmit}>
						<div className='mx-2 mb-3'>
							<label className='form-label' htmlFor='email'>
								Email:
							</label>
							<input
								className='form-control'
								id='email'
								name='email'
								type='email'
								placeholder='emailbacana@mail.com'
								aria-describedby='emailHelp'
								aria-label='Email'
								required
								onChange={(event) => setEmail(event.target.value)}
								value={email} // clear the inputs before submition
							/>
							<div className='form-text text-white' id='emailHelp'>
								Não compartilharemos seu email
							</div>
						</div>
						<div className='mx-2 mb-3'>
							<label className='form-label' htmlFor='password'>
								Senha:
							</label>
							<input
								className='form-control'
								id='password'
								name='password'
								type='password'
								placeholder='**********'
								aria-describedby='passwordHelp'
								aria-label='Senha'
								required
								onChange={(event) => setSenha(event.target.value)}
								value={senha} // clear the inputs before submition
							/>
							<div className='form-text text-white' id='passwordHelp'>
								Utilize uma senha forte
							</div>
						</div>
						<div className='mx-2 mb-3 d-flex justify-content-between align-items-center'>
							<a className='text-white' href=''>
								Esqueci minha senha
							</a>
							<button className='btn btn-outline-light' type='submit'>
								Entrar
							</button>
						</div>
					</form>
					<div className='mx-3 mb-3'>
						<span>Não tem uma conta? </span>
						<br />
						<a className='text-white' href=''>
							Registre-se aqui
							{/* Router Link */}
						</a>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Entrar;
