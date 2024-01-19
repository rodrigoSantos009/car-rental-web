import { useNavigate } from "react-router-dom";
import { useState } from "react";

import React from "react";

import { useAuth } from "../../contexts/Auth/UseAuth";

export function Login() {
  const LOGIN_URL =
    "https://car-rental-9w7te1m4r-rodrigosantos009.vercel.app/login";
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const auth = useAuth();

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email || !password) {
      return;
    }
    try {
      const success = await auth.authenticate(email, password);
      if (success) {
        if (window.location.href === LOGIN_URL) navigate("/");
          window.location.href;
      }else {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 3000);
      }
    } catch (e) {
      console.error("Failed to authenticate", e);
    }
  }

  return (
    <div className="login-card">
      <div className="login-card-form">
        {error ? (
          <div className="text-center mb-10 p-2 text-white font-bold bg-red-500">
            Email ou senha incorretos!
          </div>
        ) : null}
        <h1 className="login-title">Entre em sua conta</h1>
        <form onSubmit={handleLogin} className="form-login">
          <div className="mb-7 flex flex-col">
            <label htmlFor="" className="text-lg text-purple-100">
              Email
            </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Digite seu email..."
              className={`border-2 focus focus:border-orange-100 p-2 rounded-md outline-none ${
                error ? "border-red-600" : "border-zinc-300"
              }`}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="text-lg text-purple-100">
              Senha
            </label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Digite sua senha..."
              className={`border-2 focus:border-orange-100 p-2 rounded-md outline-none ${
                error ? "border-red-600" : "border-zinc-300"
              }`}
            />
          </div>
          <div className="flex justify-between mt-5">
            <a className="underline cursor-pointer" onClick={() => navigate("/register")}>
              Não possuo conta
            </a>
            <a className="underline" href="#">
              Esqueceu a senha?
            </a>
          </div>
          <div className="flex flex-col mt-3">
            <button
              type="submit"
              className="bg-orange-100 text-white mb-3 rounded-sm p-2 font-bold"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
