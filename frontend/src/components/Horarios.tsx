
export function Horarios() {
    return (
        <section id="horarios" className="light-section">
            <h2 className="reveal">Nuestros horarios</h2>
            <div className="grid">
                <div className="card schedule-card reveal">
                    <div className="card-icon">☀️</div>
                    <h3>Domingo</h3>
                    <p className="time">11:00 AM</p>
                    <span className="tag">Reunión General</span>
                </div>

                <div className="card schedule-card reveal">
                    <div className="card-icon">🌙</div>
                    <h3>Viernes</h3>
                    <p className="time">8:30 PM</p>
                    <span className="tag">Noche de oración</span>
                </div>
            </div>
        </section>
    );
}
