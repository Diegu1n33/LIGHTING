//import {Redes} from ../components/Redes.tsx;
//const BASE_URL = import.meta.env.VITE_API_URL;"
//export const getContenido = async () => {"
//   const res = await fetch(`${BASE_URL}/api/contenido`);"
//    if (!res.ok) throw new Error('Error al obtener datos');"
//    return res.json();}

import type { Contacto, Horario, Red, Versiculo} from "../types.ts";

async function get<T>(ruta: string): Promise<T> {
    const res = await fetch(`/api/${ruta}`);
    if (!res.ok) {
        throw new Error(`Error ${res.status} en ${ruta}`);
    }
    return res.json();
}

export const api = {
    versiculo: () => get<Versiculo>("versiculo"),
    horarios: () => get<Horario[]>("horarios"),
    redes: () => get<Red[]>("redes"),
    contacto: () => get<Contacto>("contacto"),
}