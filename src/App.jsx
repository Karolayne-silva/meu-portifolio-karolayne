import "./styles.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Sobre from "./components/Sobre";
import Footer from "./components/Footer";
import Projetos from "./components/Projetos";
import { useEffect, useState } from "react";

function App() {
  const storedDarkMode = localStorage.getItem("DARK_MODE") === "true";

  const [dark, setDark] = useState(storedDarkMode);

  useEffect(() => {
    console.log("darkmode", dark);
    localStorage.setItem("DARK_MODE", dark);
  }, [dark]);

  return (
    <div
      className="app"
      style={{ height: "100%" }}
      data-theme={dark ? "dark" : "light"}
    >
      <Header dark={dark} setDark={setDark} />
      <Main />
      <Sobre />
      <Projetos dark={dark} />
      <Footer />
    </div>
  );
}

export default App;
