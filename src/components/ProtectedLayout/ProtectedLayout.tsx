import { useAuth } from "../../contexts/Auth/UseAuth"
import { Login } from "../Home/Login";

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();

  if (!auth.token) {
    return (
      <Login />
    );  
  } 

  return children;
};  