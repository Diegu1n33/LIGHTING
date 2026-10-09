import type { Contacto, Horario, Red, Versiculo } from "../types";

const ESTATICO = import.meta.env.VITE_STATIC === "true";

function urlDe(recurso: string): string {
  return ESTATICO
    ? `${import.meta.env.BASE_URL}data/${recurso}.json`
    : `/api/${recurso}`;
}

async function get<T>(recurso: string): Promise<T> {
  const res = await fetch(urlDe(recurso));
  if (!res.ok) throw new Error(`Error ${res.status} en ${recurso}`);
  return res.json();
}

async function versiculoDelDia(): Promise<Versiculo> {
  if (!ESTATICO) return get<Versiculo>("versiculo");

  const lista = await get<Versiculo[]>("versiculos");
  if (lista.length === 0) throw new Error("No hay versículos");

  const hoy = new Date();
  const dia = Math.floor(
    Date.UTC(hoy.getFullYear(), hoy.getMonth(), hoy.getDate()) / 86_400_000,
  );
  return lista[dia % lista.length];
}

export const api = {
  versiculo: versiculoDelDia,
  horarios: () => get<Horario[]>("horarios"),
  redes: () => get<Red[]>("redes"),
  contacto: () => get<Contacto>("contacto"),
};