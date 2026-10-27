import { useState } from "react";
import type { FormEvent } from "react";
import { textos } from "./tema";

const CLAVE = "moodify_usuario";

// Lee el usuario guardado. Si falla o no hay nada, devuelve texto vacío.
function leerGuardado(): string {
  try {
    return localStorage.getItem(CLAVE) ?? "";
  } catch {
    return "";
  }
}

type Props = {
  onEntrar: (usuario: string) => void;
};

function Login({ onEntrar }: Props) {
  const guardado = leerGuardado();

  const [usuario, setUsuario] = useState(guardado);
  const [password, setPassword] = useState("");
  const [recordar, setRecordar] = useState(guardado !== "");
  const [error, setError] = useState("");

  const manejarLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (usuario.trim() === "" || password.trim() === "") {
      setError(textos.errorCampos);
      return;
    }
    setError("");

    // Guardar o borrar el usuario según la casilla
    try {
      if (recordar) {
        localStorage.setItem(CLAVE, usuario.trim());
      } else {
        localStorage.removeItem(CLAVE);
      }
    } catch {
      // Si el navegador no permite guardar, seguimos sin guardar
    }

    onEntrar(usuario.trim());
  };

  return (
    <div>
      <p className="logo">{textos.nombreApp}</p>
      <h1 className="titulo">{textos.tituloLogin}</h1>
      <p className="subtitulo">{textos.subtituloMenu}</p>

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

        <label className="recordar">
          <input
            type="checkbox"
            checked={recordar}
            onChange={(e) => setRecordar(e.target.checked)}
          />
          {textos.recordarme}
        </label>

        <button type="submit" className="boton-principal boton-ancho">
          {textos.botonEntrar}
        </button>
      </form>
    </div>
  );
}

export default Login;