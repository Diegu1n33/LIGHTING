import { useEffect, useState} from "react";

export function Intro() {
    const  [visible, setVisible] = useState(true);

    useEffect(() => {
        const t = setTimeout(() => setVisible(false), 5500);
        return () => clearTimeout(t);
        }, []);

    if (!visible) return null;

    return (
        <div id="intro">
            <div className="light-bg"></div>
            <div className="intro-content">
                <h1 className="lighting-text">Lighting</h1>
                <div className="line"></div>
                <p className="intro-sub">La iglesia de la ciudad</p>
            </div>
        </div>
    );
}



