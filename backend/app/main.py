from fastapi import FastAPI
from app.routers import horarios
from app.routers import contacto
from app.routers import redes
from app.routers import versiculo

app = FastAPI(title="Lighting API", docs_url="/api/docs", openapi_url="/api/openapi.json")
app.include_router(horarios.router, prefix="/api")
app.include_router(contacto.router, prefix="/api")
app.include_router(redes.router, prefix="/api")
app.include_router(versiculo.router, prefix="/api")


@app.get("/api/health")
def health():
    return {"status": "ok"}