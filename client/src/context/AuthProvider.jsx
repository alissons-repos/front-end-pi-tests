import { createContext, useState } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	// AuthProvider é como se fosse o componente que transporta o contexto para seus componentes filhos
	const [auth, setAuth] = useState({});

	return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
