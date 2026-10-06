
export function Ubicacion() {
    return (
        <section id="ubicacion" className="light-section">
            <h2 className="reveal">Encuéntranos</h2>
            <p className="location-text reveal">
                Lic. José López Portillo 704, Joyas de Anáhuac, Escobedo, N.L.
            </p>
            <div className="map-container reveal">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.9416414753896!2d-100.29276282507257!3d25.7724910773451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86629300575617e5%3A0xd16ed679dd62d6c2!2sIglesia%20lighting!5e0!3m2!1ses-419!2smx!4v1779151434003!5m2!1ses-419!2smx"
                    width="100%"
                    height="450"
                    style={{border: 0}}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </section>
    );
}