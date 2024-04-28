import { MateriasCarrera } from "../listas/carrerasMaterias";
import { listaSoftware } from "../listas/listaSoftware";
import { Banner } from "../components/Banner";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Slider from "@mui/material/Slider";
import Input from "@mui/material/Input";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import * as React from "react";
import { Save } from "@mui/icons-material";

export function Registro(props) {
  const materiasISC = MateriasCarrera["1"];
  const materiasIIND = MateriasCarrera["2"];
  const materiasIELC = MateriasCarrera["4"];
  const materiasISA = MateriasCarrera["5"];
  const materiasIAM = MateriasCarrera["6"];
  const materiasGAS = MateriasCarrera["7"];

  const [materias, setMaterias] = React.useState([]);
  const [cantAlumnos, setCantAlumnos] = React.useState(0);
  const [atSeleccionado, setAtSeleccionado] = React.useState("at1");

  const carreras = [
    { label: "Ing. Sistemas Computacionales", id: 1 },
    { label: "Ing. Industrial", id: 2 },
    { label: "Ing. Semiconductores", id: 3 },
    { label: "Ing. Electrónica", id: 4 },
    { label: "Ing. Sistemas Automotrices", id: 5 },
    { label: "Ing. Ambiental", id: 6 },
    { label: "Gastronomía", id: 7 },
  ];

  const handleAtChange = (event, newAt) => {
    setAtSeleccionado(newAt);
  };

  const getSoftwareOptions = () => {
    switch (atSeleccionado) {
      case "at1":
      case "at4":
      case "at5":
        return listaSoftware["AT1_4_5"];
      case "at3":
        return listaSoftware["AT3"];
      case "at2":
        return listaSoftware["AT2"];
      default:
        return [];
    }
  };

  const softwareAT1_4_5 = listaSoftware["AT1_4_5"].map((materia) => ({
    title: materia,
  }));

  const onCarreraChange = (event, carreraSeleccionada) => {
    if (
      carreraSeleccionada &&
      MateriasCarrera[carreraSeleccionada.id.toString()]
    ) {
      setMaterias(MateriasCarrera[carreraSeleccionada.id.toString()]);
    } else {
      setMaterias([]);
    }
  };

  const sliderCantAlumnosChange = (event, nuevaCantAlumnos) => {
    setCantAlumnos(nuevaCantAlumnos);
  };

  const inputCantAlumnosChange = (event) => {
    setCantAlumnos(event.target.value);
  };

  function onBotonGuardarClick(event) {
    /* devolver la variable de estado en el componente APP a null*/
    props.setActualizarMaestro(null);
  }

  return (
    <div className="Registro">
      <Banner />

      <h4 id="datoDocent">Docente: {props.maestro.nombre} </h4>
      <div className="selecciones">
        <p>Carrera:</p>
        <Autocomplete
          disablePortal
          id="combo-box-carrera"
          options={carreras}
          onChange={onCarreraChange}
          renderInput={(params) => (
            <TextField {...params} placeholder="Seleccione una carrera." 
            /*variant="standard"*/
            />
          )}
        />

        <br />
        <p>Materia:</p>
        <Autocomplete
          disablePortal
          id="combo-box-materia"
          options={materias}
          renderInput={(params) => (
            <TextField {...params} placeholder="Seleccione una materia." 
            /*variant="standard"*/
            />
          )}
        />

        <p>Aula tecnológica:</p>
        <ToggleButtonGroup
          id="toggle-button-aula"
          color="primary"
          value={atSeleccionado}
          onChange={handleAtChange}
          exclusive
          aria-label="Aula tecnológica"
        >
          <ToggleButton id="btn1" value="at1">
            AT1
          </ToggleButton>
          <ToggleButton id="btn1" value="at2">
            AT2
          </ToggleButton>
          <ToggleButton id="btn1" value="at3">
            AT3
          </ToggleButton>
          <ToggleButton id="btn1" value="at4">
            AT4
          </ToggleButton>
          <ToggleButton id="btn1" value="at5">
            AT5
          </ToggleButton>
        </ToggleButtonGroup>
        <br />
        <p>Software:</p>
        <Autocomplete
          className="Software"
          multiple
          id="tags-standard"
          options={getSoftwareOptions()}
          getOptionLabel={(option) => option}
          defaultValue={[]}
          renderInput={(params) => (
            <TextField
              {...params}
              /*variant="standard"*/
              label="Buscar Software"
              placeholder="Seleccionado(s)"
            />
          )}
        />

        <p>Cantidad de alumnos:</p>
        <div id="slider">
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <Slider
              value={cantAlumnos}
              onChange={sliderCantAlumnosChange}
              min={0}
              max={45}
              aria-labelledby="input-slider"
            />
            <Input
              value={cantAlumnos}
              size="small"
              onChange={inputCantAlumnosChange}
              inputProps={{
                step: 1,
                min: 0,
                max: 45,
                type: "number",
                "aria-labelledby": "input-slider",
              }}
            />
          </Stack>
        </div>
        <Button
          startIcon={<Save />}
          variant="outlined"
          onClick={onBotonGuardarClick}
        >
          Guardar
        </Button>
      </div>
    </div>
  );
}
