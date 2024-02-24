import "./styles.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Sobre from "./components/Sobre";
import Footer from "./components/Footer";
import Projetos from "./components/Projetos";
import { useState } from "react";


function App() {
  const [dark, setDark] = useState(false);
  window.localStorage.setItem("theme", dark);

  return (
    <div className="app" style={{ height: "100%" }} data-theme={dark ? "dark" : "light"}>
      <Header dark={dark} setDark={setDark}/> 
      <Main />
      <Sobre />
      <Projetos dark={dark}/>
      <Footer />
    </div>
  );
}

export default App;
