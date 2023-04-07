import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import meuAmigoPet from '../api/axios.config';
import path from '../api/routes.config.json';

function AuthAnuncios() {
	const navigate = useNavigate();
	// const [novoAnuncio, setNovoAnuncio] = useState({ titulo, tipo, raca, sexo, quantidade });
	const [titulo, setTitulo] = useState();
	const [tipo, setTipo] = useState();
	const [raca, setRaca] = useState();
	const [sexo, setSexo] = useState();
	const [quantidade, setQuantidade] = useState();

	const handleSubmit = async (event) => {
		event.preventDefault();

		const novoAnuncio = { titulo, tipo, raca, sexo, quantidade };
		// console.log(novoAnuncio);

		await meuAmigoPet
			.post(path.auth_usuarios_url, JSON.stringify(novoAnuncio), {
				// headers: {
				// 	Authorization: 'Bearer ' + token,
				// },
			})
			.then((res) => {
				// console.log(res);
				console.log(res?.data);
				alert('Anúncio criado com sucesso!');
			})
			.catch((error) => console.log(error?.response));

		navigate(path.anuncios_url);
	};

	return (
		<div className=''>
			<h1>Página privada de anuncios</h1>
			<div>
				<h2>Criar novo anúncio:</h2>
			</div>
			<div className='container'>
				<form className='row g-3' onSubmit={handleSubmit}>
					<div className='col-12'>
						<label htmlFor='titulo' className='form-label'>
							Título:
						</label>
						<input
							type='text'
							className='form-control'
							name='titulo'
							id='titulo'
							placeholder='Insira o título do anúncio...'
							required
							onChange={(event) => {
								setTitulo(event.target.value);
							}}
						/>
					</div>
					<div className='col-6'>
						<label htmlFor='tipo' className='form-label'>
							Tipo:
						</label>
						<select
							name='tipo'
							id='tipo'
							className='form-select'
							required
							onChange={(event) => {
								setTipo(event.target.value);
							}}
						>
							<option value={''}>Escolha uma das opções...</option>
							<option value={'adoção'}>Adoção</option>
							<option value={'cruzamento'}>Cruzamento</option>
						</select>
					</div>
					<div className='col-6'>
						<label htmlFor='raça' className='form-label'>
							Raça:
						</label>
						<input
							type='text'
							className='form-control'
							name='raça'
							id='raça'
							placeholder='Insira a raça do animal...'
							onChange={(event) => {
								setRaca(event.target.value);
							}}
						/>
					</div>
					<div className='col-6'>
						<label htmlFor='inputState' className='form-label'>
							Sexo:
						</label>
						<select
							name='sexo'
							id='sexo'
							className='form-select'
							required
							onChange={(event) => {
								setSexo(event.target.value);
							}}
						>
							<option value={''}>Escolha uma das opções...</option>
							<option value={'ambos'}>Ambos (Adoção)</option>
							<option value={'fêmea'}>Fêmea</option>
							<option value={'macho'}>Macho</option>
						</select>
					</div>
					<div className='col-6'>
						<label htmlFor='quantidade' className='form-label'>
							Quantidade (Adoção):
						</label>
						<input
							type='number'
							className='form-control'
							name='quantidade'
							id='quantidade'
							placeholder='Indique a quantidade de animais para adoção'
							min={0}
							step={1}
							onChange={(event) => {
								setQuantidade(event.target.value);
							}}
						/>
					</div>
					<div className='col-12'>
						<button type='submit' className='btn btn-primary'>
							Criar
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

{
	/* <div className='col-6'>
						<fieldset className='row'>
							<legend className='col-form-label col-sm-2 pt-0'>Sexo:</legend>
							<div className='col-sm-10'>
								<div className='form-check form-check-inline'>
									<input
										className='form-check-input'
										type='radio'
										name='sexo'
										id='sexo1'
										value='ambos'
									/>
									<label className='form-check-label' htmlFor='sexo1'>
										Ambos
									</label>
								</div>
								<div className='form-check form-check-inline'>
									<input
										className='form-check-input'
										type='radio'
										name='sexo'
										id='sexo2'
										value='fêmea'
									/>
									<label className='form-check-label' htmlFor='sexo2'>
										Fêmea
									</label>
								</div>
								<div className='form-check form-check-inline'>
									<input
										className='form-check-input'
										type='radio'
										name='sexo'
										id='sexo3'
										value='macho'
									/>
									<label className='form-check-label' htmlFor='sexo3'>
										Macho
									</label>
								</div>
							</div>
						</fieldset>
					</div> */
}

export default AuthAnuncios;
