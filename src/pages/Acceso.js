import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import { Banner } from "../components/Banner";

export function Acceso(props) {
  /* Controlador */

  //Estos maestros se deberían recuperar de una fuente de datos más adelante
  const maestros = [
    { nombre: "Germán Guzmán Guzmán", clave: "001" },
    { nombre: "Germán Gutierrez Torres", clave: "002" },
    {
      nombre: "Caleb Zacarias Garcia",
      clave: "010",
    },
    { nombre: "Sergio E Guzmán Cornejo", clave: "000" },
  ];

  //Variable para almacenar el valor de la clave docente capturado
  let clavedocente = "";

  function onTxtClaveChange(event) {
    clavedocente = event.target.value;
  }

  function onBotonEntrarClick(event) {
    /*Aquí va la lógica para validar el acceso */
    var maestroEncontrado = null;

    for (const maestro of maestros) {
      //alert(maestro.clave);
      if (maestro.clave == clavedocente) {
        maestroEncontrado = maestro;
        break;
      }
    }

    if (maestroEncontrado) {
      props.setActualizarMaestro(maestroEncontrado);
    } else {
      alert("Acceso denegado");
    }
  }
  return (
    <div className="Acceso">
      <Banner />

      <div className="contenido">
        <h2 id="plsLogin">Por favor, inicia sesión</h2>

        <div className="formulario">
          <TextField
            id="clavedocente"
            label="Clave docente"
            onChange={onTxtClaveChange}
            type="search"
            variant="standard"
            fullWidth
            margin="normal"
          />
          <br />
          <Button
            variant="contained"
            onClick={onBotonEntrarClick}
            color="primary"
            startIcon={<LoginIcon />}
            fullWidth
          >
            Entrar
          </Button>
        </div>
      </div>
    </div>
  );
}
