from fastapi import FastAPI

app = FastAPI(title="Lighting API")
@app.get("/api/health")
def health():
    return {"status": "ok"}