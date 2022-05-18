import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Title from "./components/Title";


function App() {
  const [open, isOpenedTitle] = useState(false);

  const handleOpen = () => {
    isOpenedTitle(true);
  };
  
  const handleClose = () => {
    isOpenedTitle(false);
  };

  if (open === true)   
      return (
        <div>
        <button onClick={handleClose}>Close title!</button>
        <Title name = "Application normalStyle" type = "normal"/>
        <Title name = "Application boldStyle" type = "bold"/>
        </div>
      );
    else
      return (
        <div>
        <button onClick={handleOpen}>Open title!</button>
        </div>
      );
}

export default App;
