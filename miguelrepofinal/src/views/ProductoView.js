import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { obtenerProductosPorId } from "../services/productosServices";
//sirve para usar el ID

export default function ProductoView() {
  const [producto, setProducto] = useState([]);
  const { id } = useParams();
  //devolver un obketo donde devuelde los parametros, por ejemplo el ID

  const getProducto = async () => {
    try {
      let productoObtenido = await obtenerProductosPorId(id);
      setProducto(productoObtenido);
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    getProducto();
  }, []);

  return (
    <div>
      <div className="container">
        <h2 className="fw-bold">{producto.prod_nombre}</h2>
        <div className="row">
          <div className="col-sm-12 col-md-6" >
            <img
              src={producto.prod_imagen}
              alt={producto.prod_imagen}
              className="img-fluid"
            />
          </div>
          <div className="col-sm-12 col-md-6">
            <h5 className="fw-bold">Descripcion</h5>
            <p>{producto.prod_descripcion}</p>
            <div className="py-3 d-flex justify-content-between">
              <span>S/{producto.prod_precio}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
