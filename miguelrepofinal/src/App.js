import { BrowserRouter, Routes, Route } from "react-router-dom";
import PortadaView from "./views/PortadaView";
import ProductoView from "./views/ProductoView";
import NavTop from "./components/Navtop";
export default function App() {
  return (
    <BrowserRouter>
    <NavTop />
      <Routes>
        {/* el Routes va verificar qué ruta necesitamos y que componente usar */}
        <Route exact path="/" element={<PortadaView />} />
        <Route exact path="/detalle/:id" element={<ProductoView />} />
      </Routes>
    </BrowserRouter>
  );
}
