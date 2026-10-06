
export function Versiculo() {
    return (
        <section id="versiculo" className="glass-section">
            <div className="container-narrow">
                <h2 className="reveal">Versículo del día</h2>
                <div className="card glass-card reveal" id="versiculoTexto">
                    <div className="spinner"></div>
                    <span>Cargando versículo...</span>
                </div>
            </div>
        </section>
    );
}
