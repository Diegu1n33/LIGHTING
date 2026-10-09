import logo from "../assets/LOGOS/PRINBL.png";

export function  Navbar() {
    return (
        <nav id="navbar">
            <div className="logo">
                <img src={logo} alt="Lighting" className="logo-img"/>
            </div>

            <div className="menu-toggle" id="menu-toggle">
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul id="nav-links">
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#versiculo">Versículo</a></li>
                <li><a href="#horarios">Horarios</a></li>
                <li><a href="#ubicacion">Contacto</a></li>
            </ul>
        </nav>
    );
}