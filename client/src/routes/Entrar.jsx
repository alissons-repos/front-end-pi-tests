import { useState, useEffect, useContext } from 'react';

import AuthContext from '../context/AuthProvider';
// AuthContext contém o estado global, enquanto AuthProvider é o componente que transporta esse estado.

import meuAmigoPet from '../api/axios.config';
import path from '../api/routes.config.json';

function Entrar() {
	const { setAuth } = useContext(AuthContext);

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

				const accessToken = res?.data?.tokenUsuario;
				// const roles = res?.data?.roles;

				setAuth({ email, senha, accessToken });
				setEmail('');
				setSenha('');
			})
			.catch((error) => {
				console.log(error?.response);
				setErro('ALGO DEU ERRADO IRMÃO');
			});
	};

	return (
		<main className='container-fluid'>
			<div className='d-flex flex-column flex-lg-row justify-content-center my-4'>
				<div className='container' style={{ width: '50%' }}>
					<img className='img-fluid rounded' src='../src/assets/img/owner-dog.jpg' alt='' />
				</div>
				<div className='container text-white bg-dark rounded p-2' style={{ width: '40%' }}>
					<h2 className='m-3 text-center'>Entrar</h2>
					<form onSubmit={handleSubmit}>
						{/* Não é necessário passar (event) como parâmetro da função handleSubmit */}
						<div className='mx-3 mb-3'>
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
							<div className='form-text' id='emailHelp'>
								Não compartilharemos seu email
							</div>
						</div>
						<div className='mx-3 mb-3'>
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
							<div className='form-text' id='passwordHelp'>
								Utilize uma senha forte
							</div>
						</div>
						<div className='mx-3 mb-3 d-flex justify-content-between align-items-center'>
							<div>
								<a className='text-white' href=''>
									Esqueci minha senha
									{/* Router Link */}
								</a>
								<br />
							</div>
							<div>
								<button className='btn btn-outline-light' type='submit'>
									Entrar
								</button>
							</div>
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

{
	/* <div className='row d-flex justify-content-between mx-5'>
				<div className='col-md-6 col-lg-7 text-white'>
					<img className='img-fluid rounded' src='../src/assets/img/owner-dog.jpg' alt='' />
				</div>
				<div className='col-md-6 col-lg-5 text-white bg-dark rounded border'>
					<h2 className='m-3 text-center'>Entrar</h2>
					<form>
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
								required
								aria-describedby='emailHelp'
								aria-label='Email'
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
								required
								aria-describedby='passwordHelp'
								aria-label='Senha'
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
				</div>
			</div> */
}

export default Entrar;
