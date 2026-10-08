import img3 from "../assets/img/3.jpg";
import ig from "../assets/img/ig.png";
import img2 from "../assets/img/2.jpg";
import fb from "../assets/img/fb.png";
import img1 from "../assets/img/1.jpg";
import yt from "../assets/img/yt.png";
import { useRedes } from "../hooks/useContenido.ts";

const ESTILO = {
    youtube: {
        clase: "youtube",
        fondo: img1,
        icono: yt,
    },
    instagram: {
        clase: "instagram",
        fondo: img3,
        icono: ig,
    },
    facebook: {
        clase: "facebook",
        fondo: img2,
        icono: fb,
    },
};

export function Redes() {
    const { data: redes, isPending, isError } = useRedes();

    return (
        <section className="social-section">
            <h2 className="reveal">Síguenos</h2>

            {isPending && <p>Cargando redes...</p>}
            {isError && <p>Error al cargar las redes.</p>}

            <div className="social-grid">
                {redes?.map((red) => {
                    const estilo = ESTILO[red.tipo];

                    if (!estilo) return null;

                    return (
                        <a
                            key={red.tipo}
                            href={red.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`social-card ${estilo.clase} reveal`}
                        >
                            <img
                                src={estilo.fondo}
                                className="social-bg"
                                alt={red.nombre}
                                loading="lazy"
                            />

                            <div className="social-overlay">
                                <img
                                    src={estilo.icono}
                                    className="social-icon"
                                    alt={red.nombre}
                                    loading="lazy"
                                />
                            </div>
                        </a>
                    );
                })}
            </div>
        </section>
    );
}
