import type { IconType } from "react-icons";
import { FaSpotify, FaApple } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { LuSmile, LuCloudRain, LuZap, LuLeaf } from "react-icons/lu";
// ============================================================
//  ARCHIVO DE CONFIGURACIÓN
//  Aquí cambias colores, textos, iconos y posiciones.
// ============================================================

// ---------- 1. COLORES ----------
export const colores = {
  "fondo": "#2a2a2a",        // color papel
  "tarjeta": "#ffffff",      // caja central
  "texto": "#2b2b2b",        // textos, bordes y sombras
  "texto-suave": "#666666",  // textos secundarios
  "borde": "#2b2b2b",
  "acento": "#4169e1",       // azul de detalles
  "acento-texto": "#ffffff",
};

// ---------- 2. DISEÑO Y POSICIONES ----------
export const diseno = {
  "texto-alineado": "center",
  "ancho-maximo": "700px",
  "alto-minimo": "680px",     // altura de la caja
  "radio": "12px",
  "columnas": "2",
  "icono-posicion": "column", // "column" = icono arriba | "row" = icono al lado
  "icono-tamano": "1.6rem",
  "espacio": "20px",
};

// ---------- 3. TIPOGRAFÍA ----------
export const fuente = "'Chakra Petch', sans-serif";

// ---------- 4. TEXTOS ----------
export const textos = {
  nombreApp: "Moodify",
  tituloLogin: "Si lo sientes, suena.",
  tituloMenu: "¿Cómo te sientes?",
  subtituloMenu: "Elige un ánimo y creamos tu playlist.",
  proximamente: "Próximamente",
  botonVolver: "Cambiar de cuenta",
  botonGenerar: "Crear mi playlist",
  resultadoTitulo: "Elegiste:",
  resultadoAviso: "Aquí aparecerá tu playlist (lo conectamos en el siguiente paso).",
  botonAbrir: "Abrir en",
  etiquetaUsuarioPanel: "Usuario:",
  tituloPlataformas: "Selecciona tu plataforma de música",
  recomendacionGeneral: "Playlist General recomendada",
  botonSalir: "Salir",
  titulo2Login: "Inicio de sesión",
subtitulo3Login: "Ingresa tus datos para acceder.",
etiquetaUsuario: "Usuario:",
placeholderUsuario: "Ej. mi_usuario",
etiquetaPassword: "Contraseña:",
placeholderPassword: "****",
botonEntrar: "Iniciar sesión",
errorCampos: "Por favor llena todos los campos.",
recordarme: "Recordarme en este navegador",
};

// ---------- 5. SERVICIOS DE MÚSICA ----------
export const plataformas: {
  id: string; nombre: string; icono: IconType;
  color: string; colorTexto: string; disponible: boolean;
}[] = [
  { id: "spotify", nombre: "Spotify", icono: FaSpotify, color: "#ffffff", colorTexto: "#2b2b2b", disponible: true },
  { id: "apple", nombre: "Apple Music", icono: FaApple, color: "#ffffff", colorTexto: "#2b2b2b", disponible: true },
  { id: "youtube", nombre: "YouTube Music", icono: SiYoutubemusic, color: "#ffffff", colorTexto: "#2b2b2b", disponible: true },
];

// ---------- 6. IMAGEN SUPERIOR ----------
export const imagen = {
  ruta: "/logo.png",   // nombre de tu archivo dentro de la carpeta public
  ancho: "400px",
  espacio: "20px",
  mostrar: true,
};

// ---------- 7. ESTADOS DE ÁNIMO ----------
export type Animo = { id: string; nombre: string; icono: IconType; color: string };

export const animos: Animo[] = [
  { id: "feliz", nombre: "Feliz / Motivado", icono: LuSmile, color: "#ffde59" },
  { id: "triste", nombre: "Triste / Melancólico", icono: LuCloudRain, color: "#bcd4ff" },
  { id: "energetico", nombre: "Energético / Activo", icono: LuZap, color: "#ffb88a" },
  { id: "relajado", nombre: "Relajado / Tranquilo", icono: LuLeaf, color: "#c5ecc9" },
];

// ---------- 8. RECOMENDACIONES ----------
// Para agregar una: plataforma → ánimo → texto.
export const recomendaciones: Record<string, Record<string, string>> = {
  spotify: {
    feliz: "Playlist: Indie Pop Alegre & Hyperpop Energético",
    triste: "Playlist: Shoegaze Melancólico & Deftones Vibes",
    energetico: "Playlist: Phonk Pesado & Rock Alternativo Rápido",
    relajado: "Playlist: Lo-Fi Beats & Guitarras Acústicas Suaves",
  },
  youtube: {
    feliz: "Video Mix: Vlogs de Viajes y Retos Divertidos",
    triste: "Video Mix: Documentales Nocturnos y Lo-Fi Triste",
    energetico: "Video Mix: Clips de Gaming Pro y PvP Montages",
    relajado: "Video Mix: Directos Tranquilos y Música Ambiental",
  },
  apple: {
    feliz: "Estación: Éxitos Alternativos del Momento",
    triste: "Estación: Canciones para Días Nublados y Lluvia",
    energetico: "Estación: Workout Motivación Extrema",
    relajado: "Estación: Acústico Íntimo y Letras Profundas",
  },
};
// ---------- 9. ENLACES DE BÚSQUEDA ----------
// Se les agrega al final el texto de la recomendación.
export const enlaces: Record<string, string> = {
  spotify: "https://open.spotify.com/search/",
  youtube: "https://www.youtube.com/results?search_query=",
  apple: "https://music.apple.com/search?term=",
};