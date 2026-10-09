from fastapi import APIRouter

from ..schemas import Contacto
from ..content import cargar

router = APIRouter(prefix="/contacto", tags=["contacto"])

@router.get("", response_model=Contacto)
def contacto():
    return cargar("contacto")
