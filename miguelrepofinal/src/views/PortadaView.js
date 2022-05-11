import { useState, useEffect } from "react";
import { obtenerProductos } from "../services/productosServices";
import GroupProducts from "../components/GroupProducts";
import Navtop from "../components/Navtop";
import { Carrousel } from "../components/Carrousel";

export default function PortadaView() {
  const [productos, setProductos] = useState([]);

  const getProductos = async () => {
    try {
      let productosObtenidos = await obtenerProductos();
      setProductos(productosObtenidos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <div>
      <Carrousel  />
      <GroupProducts productos={productos} />
    </div>
  );
}
