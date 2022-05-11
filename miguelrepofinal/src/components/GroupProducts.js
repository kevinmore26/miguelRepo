import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function GroupProducts({ productos }) {
  console.log(productos);

  return (
    <div>
      <div className="container">
        <div className="row mt-3">
          {productos.map((aquiguardolainfo, i) => (
            <div className="col-6 col-lg-3" key={i}>
              <Link className="card mb-4" to={`/detalle/${aquiguardolainfo.prod_id}`} >
                <div>
                  <img
                    src={aquiguardolainfo.prod_imagen}
                    alt={aquiguardolainfo.prod_imagen}
                    className="card-img-top"
                  />
                </div>
              </Link>
              <div className="card-body">
                <h6 className="card-title">{aquiguardolainfo.prod_nombre}</h6>
                <span className="fw-bold">${aquiguardolainfo.prod_precio}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
