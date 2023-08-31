import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const login = (user) => {
    const expirationTime = new Date().getTime() + 5 * 60 * 60 * 1000; // 5 horas em milissegundos

    // Salvar o tempo de expiração no sessionStorage
    sessionStorage.setItem('expirationTime', expirationTime);
    setUser(user);
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem('expirationTime');
  };

  const expirationTime = sessionStorage.getItem('expirationTime');

  useEffect(() => {
    // Verifique o tempo de expiração e faça logout se necessário
    
    const currentTime = new Date();
    if (expirationTime && currentTime > parseInt(expirationTime, 10)) {
      logout();
    }
  }, [expirationTime]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
    return useContext(AuthContext)
}