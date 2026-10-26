import { useState } from "react";
import type { FormEvent } from "react";
import { textos } from "./tema";

type Props = {
  onEntrar: (usuario: string) => void;
};

function Login({ onEntrar }: Props) {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const manejarLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (usuario.trim() === "" || password.trim() === "") {
      setError(textos.errorCampos);
      return;
    }
    setError("");
    onEntrar(usuario.trim());
  };

  return (
    <div>
      <p className="logo">{textos.nombreApp}</p>
      <h1 className="titulo">{textos.tituloLogin}</h1>

      {error && <div className="error-msg">{error}</div>}

      <form onSubmit={manejarLogin}>
        <div className="grupo-campo">
          <label htmlFor="usuario">{textos.etiquetaUsuario}</label>
          <input
            id="usuario"
            className="campo"
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            placeholder={textos.placeholderUsuario}
          />
        </div>

        <div className="grupo-campo">
          <label htmlFor="password">{textos.etiquetaPassword}</label>
          <input
            id="password"
            className="campo"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={textos.placeholderPassword}
          />
        </div>

        <button type="submit" className="boton-principal boton-ancho">
          {textos.botonEntrar}
        </button>
      </form>
    </div>
  );
}

export default Login;