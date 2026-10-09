import { useVersiculo } from "../hooks/useContenido.ts";

export function Versiculo() {
    const {
        data: versiculo,
        isPending,
        isError,
    } = useVersiculo();

    if (isPending) {
        return (
            <section className="verse-section">
                <p>Cargando versículo...</p>
            </section>
        );
    }

    if (isError || !versiculo) {
        return (
            <section className="verse-section">
                <p>No se pudo cargar el versículo.</p>
            </section>
        );
    }

    return (
        <section className="verse-section">
            <p>{versiculo.texto}</p>
            <span>{versiculo.referencia}</span>
        </section>
    );
}
