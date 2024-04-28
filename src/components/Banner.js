import * as React from "react";
import registroImage from "../components/logoItsur.png"; // Importa la imagen desde la carpeta components
export function Banner() {

  return (
    <div className="Banner">
      <div className="areaTextoBanner">
        <h1 id="titulo">Aulas Tecnológicas</h1>
        <h2 id="titulo">Registro</h2>
        <img src={registroImage} alt="Registro" id="registroImage" style={{ maxWidth: "30%", height: "auto" }} />
      </div>
    </div>
  );
}
