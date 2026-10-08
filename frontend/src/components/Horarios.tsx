import { useHorarios } from "../hooks/useContenido.ts";

export function Horarios() {
    const { data: horarios, isPending, isError } = useHorarios();

    return (
        <section id="horarios" className="light-section">
            <h2 className="reveal">Nuestros horarios</h2>

            {isPending && <p>Cargando horarios…</p>}

            {isError && <p>No pudimos cargar los horarios.</p>}

            <div className="grid">
                {horarios?.map((h) => (
                    <div
                        key={`${h.dia}-${h.hora}`}
                        className="card schedule-card reveal"
                    >
                        <div className="card-icon">
                            {h.dia === "Domingo" ? "☀️" : "🌙"}
                        </div>

                        <h3>{h.dia}</h3>

                        <p className="time">{h.hora}</p>

                        <span className="tag">
                            {h.dia === "Domingo"
                                ? "Reunión General"
                                : "Noche de oración"}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
