import img3 from "../assets/img/3.jpg";
import ig from "../assets/img/ig.png";
import img2 from "../assets/img/2.jpg";
import fb from "../assets/img/fb.png";
import img1 from "../assets/img/1.jpg";
import yt from "../assets/img/yt.png";

export function Redes() {
    return (
        <section className="social-section">
            <h2 className="reveal">Síguenos</h2>
            <div className="social-grid">
                <a href="https://youtube.com" target="_blank" className="social-card youtube reveal">
                    <img src={img1} className="social-bg" alt="YouTube" loading="lazy"/>
                    <div className="social-overlay">
                        <img src={yt} className="social-icon" alt="YouTube" loading="lazy"/>
                    </div>
                </a>

                <a href="https://instagram.com" target="_blank" className="social-card instagram reveal">
                    <img src={img3} className="social-bg" alt="Instagram" loading="lazy"/>
                    <div className="social-overlay">
                        <img src={ig} className="social-icon" alt="Instagram" loading="lazy"/>
                    </div>
                </a>

                <a href="https://facebook.com" target="_blank" className="social-card facebook reveal">
                    <img src={img2} className="social-bg" alt="Facebook" loading="lazy"/>
                    <div className="social-overlay">
                        <img src={fb} className="social-icon" alt="Facebook" loading="lazy"/>
                    </div>
                </a>
            </div>
        </section>
    );
}
