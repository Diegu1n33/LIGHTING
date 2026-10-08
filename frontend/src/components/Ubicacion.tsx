import {useContacto} from "../hooks/useContenido.ts";

export function Ubicacion() {
    const { data: contacto } = useContacto();

    if (!contacto) {
        return null;
    }

    return (
        <section id="ubicacion" className="light-section">
            <h2 className="reveal">Encuéntranos</h2>

            <p className="location-text reveal">
                {contacto.direccion}
            </p>

            <div className="map-container reveal">
                <iframe
                    src={contacto.mapa_embed_url}
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </section>
    );
}