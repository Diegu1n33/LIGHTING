
import { Intro } from "./components/Intro.tsx";
import { Navbar } from "./components/Navbar.tsx";
import { Hero} from "./components/Hero.tsx";
import { Esencia} from "./components/Esencia.tsx";
import { Versiculo} from "./components/Versiculo.tsx";
import { Horarios} from "./components/Horarios.tsx";
import { Redes} from "./components/Redes.tsx";
import { Ubicacion} from "./components/Ubicacion.tsx";
import { Footer } from "./components/Footer";
import { WhatsAppButton} from "./components/WhatsAppButton.tsx";


export default function App() {
  return (
      <>
          <Intro />
          <Navbar/>
      <Hero/>
      <Esencia/>
      <Versiculo/>
      <Horarios/>
      <Redes/>
      <Ubicacion/>
      <Footer />
      <WhatsAppButton/>
      </>
  );
}
