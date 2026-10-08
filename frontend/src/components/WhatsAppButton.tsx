import { useContacto } from "../hooks/useContenido.ts";

export function WhatsAppButton() {
    const { data: contacto } = useContacto();

    if (!contacto) {
        return null;
    }

    return (
        <a
            href={`https://wa.me/${contacto.whatsapp}`}
            className="whatsapp-btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contacto por WhatsApp"
        >
            <svg viewBox="0 0 32 32" className="whatsapp-svg">
                <path
                    d="M16 2a13.93 13.93 0 0 0-12 21l-1.9 6.9 7.1-1.9a13.93 13.93 0 1 0 6.8-26z"
                    fill="#25d366"
                />
                <path
                    d="M22.5 20.3c-.3-.1-1.7-.8-2-1-.3-.1-.5-.1-.7.2l-1 1.2c-.2.2-.5.3-.8.1a10.4 10.4 0 0 1-3.8-2.5 11.2 11.2 0 0 1-2.5-3.1c-.2-.3-.1-.6.1-.8l.4-.4.3-.4c.1-.2.1-.4 0-.6l-1-2.4c-.3-.7-.6-.7-.8-.7h-.7c-.3 0-.7.1-1 .5a4.3 4.3 0 0 0-1.4 3.2 7.6 7.6 0 0 0 1.6 4.1 17.2 17.2 0 0 0 6.6 5.8c4 1.6 4.9 1.3 5.7 1.2a4.9 4.9 0 0 0 3.3-2.3c.3-.9.3-1.7.2-1.9z"
                    fill="#fff"
                />
            </svg>
        </a>
    );
}