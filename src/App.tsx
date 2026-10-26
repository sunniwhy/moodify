import { useEffect, useState } from "react";
import { colores, diseno, fuente, imagen } from "./tema";
import Login from "./Login";
import MenuAnimo from "./MenuAnimo";
import "./App.css";

function App() {
  const [usuario, setUsuario] = useState<string | null>(null);

  useEffect(() => {
    const raiz = document.documentElement.style;
    Object.entries(colores).forEach(([nombre, valor]) => raiz.setProperty(`--${nombre}`, valor));
    Object.entries(diseno).forEach(([nombre, valor]) => raiz.setProperty(`--${nombre}`, valor));
    raiz.setProperty("--fuente", fuente);
  }, []);

  return (
    <main className="pagina">
      {imagen.mostrar && (
        <img
          className="imagen-superior"
          src={imagen.ruta}
          alt="Logo"
          style={{ width: imagen.ancho, marginBottom: imagen.espacio }}
        />
      )}

      <section className="caja">
        {usuario === null ? (
          <Login onEntrar={setUsuario} />
        ) : (
          <MenuAnimo usuario={usuario} onSalir={() => setUsuario(null)} />
        )}
      </section>
    </main>
  );
}

export default App;