import { useState } from "react";
import { animos, plataformas, recomendaciones, textos, enlaces } from "./tema.ts";

type Props = {
  usuario: string;
  onSalir: () => void;
};

function MenuAnimo({ usuario, onSalir }: Props) {
  const [animo, setAnimo] = useState<string>("feliz");
  const [plataforma, setPlataforma] = useState<string | null>(null);

  const datosPlataforma = plataformas.find(
    (p: (typeof plataformas)[number]) => p.id === plataforma,
  );

  const recomendacion = plataforma
    ? recomendaciones[plataforma]?.[animo] ?? textos.recomendacionGeneral
    : "";

  // Quita el prefijo ("Playlist: ", "Set: ") para que la búsqueda sea más limpia
  const textoBusqueda = recomendacion.includes(": ")
    ? recomendacion.split(": ").slice(1).join(": ")
    : recomendacion;

  const urlDestino = plataforma
    ? enlaces[plataforma] + encodeURIComponent(textoBusqueda)
    : "";

  return (
    <div>
      <p className="conectado">
        {textos.etiquetaUsuarioPanel} {usuario}
      </p>
      <h1 className="titulo">{textos.tituloMenu}</h1>
      <p className="subtitulo">{textos.subtituloMenu}</p>
      <div className="rejilla-animos">
        {animos.map((a) => {
          const Icono = a.icono;
          return (
            <button
              key={a.id}
              className={`tarjeta-animo ${animo === a.id ? "activo" : ""}`}
              style={{ background: a.color }}
              onClick={() => setAnimo(a.id)}
            >
              <Icono className="icono-animo" />
              <span className="nombre-animo">{a.nombre}</span>
            </button>
          );
        })}
      </div>

      <p className="seccion-titulo">{textos.tituloPlataformas}</p>
      <div className="lista-servicios">
        {plataformas.map((p: (typeof plataformas)[number]) => {
          const Icono = p.icono;
          return (
            <button
              key={p.id}
              className="boton-servicio"
              style={{ background: p.color, color: p.colorTexto }}
              onClick={() => setPlataforma(p.id)}
            >
              <Icono className="icono-servicio" />
              <span className="nombre-servicio">{p.nombre}</span>
            </button>
          );
        })}
      </div>

      {datosPlataforma && (
        <div className="resultado">
          <p>
            {textos.resultadoTitulo} <strong>{datosPlataforma.nombre}</strong>
          </p>
          <p>
            <strong>{recomendacion}</strong>
          </p>
          <a
            className="boton-principal boton-enlace"
            href={urlDestino}
            target="_blank"
            rel="noreferrer"
          >
            {textos.botonAbrir} {datosPlataforma.nombre}
          </a>
        </div>
      )}

      <button className="boton-texto" onClick={onSalir}>
        {textos.botonSalir}
      </button>
    </div>
  );
}

export default MenuAnimo;