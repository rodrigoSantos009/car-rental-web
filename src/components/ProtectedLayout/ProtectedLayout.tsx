import { useAuth } from "../../contexts/Auth/UseAuth"
import { Login } from "../Home/Login";

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();

  if (!auth.token) {
    return (
      <div>
        <h1 className="text-center">Você não tem acesso! Cadastre-se ou entre em sua conta.</h1>
        <Login />
      </div>
    );  
  } 

  return children;
};  