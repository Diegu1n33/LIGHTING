const BASE_URL = import.meta.env.VITE_API_URL;

export const getContenido = async () => {
    const res = await fetch(`${BASE_URL}/api/contenido`);
    if (!res.ok) throw new Error('Error al obtener datos');
    return res.json();
}