export interface Horario {
    id: number;
    dia: string;
    hora: string;
    etiqueta: string;
    icono: string;
}

export type TipoRed = "youtube" | "instagram" | "facebook";

export interface Red {
    nombre: string;
    url: string;
    tipo: TipoRed;
}

export interface Contacto {
    whatsapp: string;
    transmision_url: string;
    direccion: string;
    mapa_embed_url: string;
}

export interface Versiculo {
    texto: string;
    referencia: string;
    version: string;
}