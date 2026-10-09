from datetime import datetime
from zoneinfo import  ZoneInfo

from fastapi import APIRouter

from ..schemas import Versiculo
from ..content import cargar

router = APIRouter(prefix="/versiculo", tags=["versiculo"])

@router.get("", response_model=Versiculo)
def versiculo_del_dia():
    lista = cargar("versiculos")
    hoy = datetime.now(ZoneInfo("America/Monterrey"))
    return lista[hoy.toordinal() % len(lista)]