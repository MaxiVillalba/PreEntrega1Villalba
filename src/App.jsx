import React from "react";
import "./App.css";

// COMPONENTS
import Header from "./components/Header/Header";
import CardWidget from "./components/CarWidget/CardWidget";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainter from "./components/ItemListContainer/ItemListContainer";

// MUI ICONS
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";




const Mssg =() => {
  return (
    <div className="Mssg">
      <NavBar color="black"/>
      <ItemListContainter greeting="Hola Viajeros"/>
    </div>
  );
 };


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header
          title="Soy el titulo a partir de una prop"
          subtitle="Soy el sub-titulo a partir de una prop"
        />
        <NavBar />
        <div>
          <ArrowCircleDownIcon />
          <ArrowCircleLeftIcon />
        </div>
        <div className="UserSection">
          <CardWidget
            name="Rio de Janeiro"
            date="Enero 2024"
            description="Ven y recibe el año nuevo en el precioso brasil"
            img="https://upload.wikimedia.org/wikipedia/commons/f/f4/Rio_de_Janeiro_-_RJ.jpg"
          />
          <CardWidget
            name="Cancún"
            date="Diciembre 2023"
            description="Descanso, playa y paisajes hermosos en la costa azteca"
            img="https://upload.wikimedia.org/wikipedia/commons/a/ae/Cancun_aerial_photo_by_safa.jpg"
          />
          <CardWidget
            name="Morro de Sao Paulo"
            date="Febrero 2024"
            description="Atrevete a conocer sus hermosas playas en el caribe brasilero"
            img="https://upload.wikimedia.org/wikipedia/commons/3/3b/Morro_de_S%C3%A3o_Paulo_-_Tirolesa.jpg"
          />
        </div>
        
      </div>
    );
  }
}

export default App;
