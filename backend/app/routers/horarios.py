from fastapi import APIRouter
from ..content import cargar
from ..schemas import Horario

router = APIRouter(prefix="/horarios", tags=["Horarios"])

@router.get("", response_model=list[Horario])
def listar_horarios():
    return cargar("horarios")

