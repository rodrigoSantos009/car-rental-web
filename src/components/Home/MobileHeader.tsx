import logo from "../../public/logo.png"
import { Link } from "react-router-dom"

import { IoMdMenu, IoMdClose  } from "react-icons/Io"
import { useState } from "react"
import { useAuth } from "../../contexts/Auth/UseAuth"

export function MobileHeader() {
  const {token, name, logout} = useAuth()
  const [open, setOpen] = useState(false)

  function handleMenu() {
    setOpen((prev) => !prev)
  }

  function handleLogout() {
    logout();
  }

  return (
    <>
      <div className="header-mobile">
        <div className="logo">
          <Link to="/">
            <img
              className="w-24"
              width={145}
              height={51}
              src={logo}
              alt="Logo"
            />
          </Link>
        </div>
        <div className="flex items-center md:hidden gap-2">
          {!token ? (
              <Link to={"/login"}>
                <button type="submit" className="font-semibold">
                  Entrar
                </button>
              </Link>
          ) : (
            <Link to={"/"}>
              <button
                onClick={handleLogout}
                type="submit"
                className="rounded-sm"
              >
                Sair
              </button>
            </Link>
          )}
          {token ? (
            <Link to={"/perfil"}>
              <p className="">{name}</p>
            </Link>
          ) : null}
          <button onClick={handleMenu} className="cursor-pointer">
            {!open ? (
              <IoMdMenu className="text-2xl" />
            ) : (
              <IoMdClose className="text-2xl" />
            )}
          </button>
        </div>
      </div>
      {open ? (
        <div
          className={`nav-mobile w-full h-auto md:h-auto flex justify-center mb-10`}
        >
          <ul className="nav-mobile md:hidden text-center flex flex-col">
            <Link onClick={handleMenu} to={"/"}>
              Home
            </Link>
            <Link onClick={handleMenu} to={"models"}>
              Modelos de Veículos
            </Link>
          </ul>
        </div>
      ) : null}
    </>
  );
}