
export function Esencia() {
    return (

        <section id="esencia" className="light-section">
            <div className="container-narrow reveal">
                <h2>Lo que encontrarás aquí</h2>
                <p className="section-subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et
                    dolore magna aliqua.
                </p>
            </div>

            <div className="grid features-grid">
                <div className="card feature-card reveal">
                    <div className="feature-icon">🤝</div>
                    <h3>Título Opción 1</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip.</p>
                </div>

                <div className="card feature-card reveal" style={{transitionDelay: "0.1s"}}>
                    <div className="feature-icon">🎸</div>
                    <h3>Título Opción 2</h3>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur.
                        Excepteur sint occaecat cupidatat non proident.</p>
                </div>

                <div className="card feature-card reveal" style={{transitionDelay: "0.2s"}}>
                    <div className="feature-icon">💡</div>
                    <h3>Título Opción 3</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        totam
                        rem aperiam, eaque ipsa quae ab illo.</p>
                </div>
            </div>
        </section>
    );
}
