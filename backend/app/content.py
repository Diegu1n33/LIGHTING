import json
from functools import cache
from pathlib import Path

DATA = Path(__file__).parent / "data"

@cache
def cargar(nombre:str):
    with open(DATA/f"{nombre}.json", encoding="utf-8") as f:
        return json.load(f)