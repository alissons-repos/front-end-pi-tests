function Entrar() {
	return (
		<main className='container-fluid'>
			<div className='d-flex flex-column flex-lg-row justify-content-center my-4'>
				<div className='container' style={{ width: '50%' }}>
					<img className='img-fluid rounded' src='../src/assets/img/owner-dog.jpg' alt='' />
				</div>
				<div className='container text-white bg-dark rounded p-2' style={{ width: '40%' }}>
					<h2 className='m-3 text-center'>Entrar</h2>
					<form>
						<div className='mx-3 mb-3'>
							<label className='form-label' for='email'>
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
							<div className='form-text' id='emailHelp'>
								Não compartilharemos seu email
							</div>
						</div>
						<div className='mx-3 mb-3'>
							<label className='form-label' for='password'>
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
							<div className='form-text' id='passwordHelp'>
								Utilize uma senha forte
							</div>
						</div>
						<div className='mx-3 mb-3 d-flex justify-content-between align-items-center'>
							<a className='text-white' href=''>
								Esqueci minha senha
							</a>
							<button className='btn btn-outline-light' type='submit'>
								Entrar
							</button>
						</div>
					</form>
				</div>
				{/* <div className='row d-flex justify-content-between mx-5'>
				<div className='col-md-6 col-lg-7 text-white'>
					<img className='img-fluid rounded' src='../src/assets/img/owner-dog.jpg' alt='' />
				</div>
				<div className='col-md-6 col-lg-5 text-white bg-dark rounded border'>
					<h2 className='m-3 text-center'>Entrar</h2>
					<form>
						<div className='mx-2 mb-3'>
							<label className='form-label' for='email'>
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
							<label className='form-label' for='password'>
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
			</div> */}
			</div>
		</main>
	);
}

export default Entrar;
