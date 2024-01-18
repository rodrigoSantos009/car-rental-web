import { useEffect } from "react"
import { api } from "../../lib/axios"
import { useAuth } from "../../contexts/Auth/UseAuth"

export function Perfil() {
  const { name, email, token } = useAuth(); 

  useEffect(() => {
      getPerfil()
  }, [])

  const getPerfil = async () => {
    try {
        await api.get("/perfil", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
    } catch (error) {
      console.error("Error", error);
    }
  }

  return (
    <>
      {token ? (<div className="w-5/6 mx-auto mb-10">
      <div className="">
        <h1 className="font-semibold my-4">Dados Pessoais</h1>
        <form
          action=""
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3"
        >
          <div className="col-span-2 lg:col-span-1 flex flex-col">
            <label className="font-semibold text-orange-100">
              Nome Completo
            </label>
            <input className="perfil-input" type="text" value={name} />
          </div>
          <div className="col-span-2 lg:col-span-1 flex flex-col">
            <label className="font-semibold text-orange-100">
              Nacionalidade
            </label>
            <input className="perfil-input" type="text" value={"Brasil"} />
          </div>
          <div className="col-span-2 md:col-span-1 flex flex-col">
            <label className="font-semibold text-orange-100">Documento</label>
            <input className="perfil-input" type="text" value={"CPF"} />
          </div>
          <div className="md:col-span-1 flex flex-col">
            <label className="font-semibold text-orange-100">CPF</label>
            <input
              className="perfil-input"
              type="text"
              value={"000-000-000.00"}
            />
          </div>
        </form>
        <div className="max-w-lg mb-4">
          <h1 className="font-semibold my-4">Dados para contato</h1>
          <div className="rounded-md border border-zinc-200 py-2 px-4">
            <p className="font-semibold text-zinc-800">Atenção</p>
            <p className=" text-zinc-600">
              Lembre-se de revisar os dados preenchidos, serão importantes para
              concluir o seu cadastro e realizar a sua reserva.
            </p>
          </div>
        </div>
        <form
          action=""
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3"
        >
          <div className="col-span-2 lg:col-span-1 flex flex-col">
            <label className="font-semibold text-orange-100">DDI</label>
            <input type="text" className="perfil-input" />
          </div>
          <div className="col-span-2 lg:col-span-1 flex flex-col">
            <label className="font-semibold text-orange-100">DDD</label>
            <input type="text" className="perfil-input" />
          </div>
          <div className="col-span-2 md:col-span-1 flex flex-col">
            <label className="font-semibold text-orange-100">Celular</label>
            <input type="text" className="perfil-input" />
          </div>
          <div className="md:col-span-1 flex flex-col">
            <label className="font-semibold text-orange-100">E-mail</label>
            <input type="text" value={email} className="perfil-input" />
          </div>
        </form>
        <button className="bg-orange-100 px-6 py-2 text-white font-semibold rounded-md mt-4">
          Salvar Dados
        </button>
      </div>
    </div>) : null}
    </>
  );
}