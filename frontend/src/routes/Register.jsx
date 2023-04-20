import React from 'react';

const Register = () => {
	return (
		<section>
			<h1>Registre-se</h1>
			<form>
				<label htmlFor=''>Nome:</label>
				<input type='text' />

				<label htmlFor=''>E-mail:</label>
				<input type='email' />

				<label htmlFor=''>Senha:</label>
				<input type='password' />

				<label htmlFor=''>Confirmar Senha:</label>
				<input type='password' />
			</form>
		</section>
	);
};

export default Register;
