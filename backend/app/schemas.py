from pydantic import BaseModel

class Horario(BaseModel):
    id:int
    dia:str
    hora:str
    etiqueta:str
    icono:str

class Versiculo(BaseModel):
    texto: str
    referencia: str
    version: str

class Red(BaseModel):
    nombre: str
    url: str
    tipo: str

class Contacto(BaseModel):
    whatsapp: str
    transmision_url: str
    direccion: str
    mapa_embed_url: str