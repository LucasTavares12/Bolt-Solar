import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Beneficios from "./pages/Beneficios";
import Contato from "./pages/Contato";
import "./App.css";
import InstalacaoGarantia from "./pages/InstalacaoGarantia";
import SuportePrazo from "./pages/SuportePrazo";
import Pagamento from "./pages/Pagamento";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Beneficios />
      <InstalacaoGarantia/>
      <SuportePrazo/>
      <Pagamento/>
      <Contato />
    </div>
  );
}

export default App;


