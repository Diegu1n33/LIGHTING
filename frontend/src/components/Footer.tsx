import logoBlanco from "../assets/LOGOS/PRINWH.png";

export function Footer() {
    return (
    <footer id="contacto">
        <div className="footer-brand">
            <img src={logoBlanco} alt="Lighting Logo" className="footer-logo"/>
            <p className="footer-tagline">La iglesia de la ciudad</p>
        </div>
        <div className="footer-separator"></div>
        <p className="copyright">© 2026 Lighting. Monterrey, Nuevo León.</p>
    </footer>
);
}