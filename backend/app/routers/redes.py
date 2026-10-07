from fastapi import APIRouter
from ..content import cargar
from ..schemas import Red

router = APIRouter(prefix="/redes", tags=["redes"])

@router.get("", response_model=list[Red])
def redes():
    return cargar("redes")

