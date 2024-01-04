import "./styles.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Sobre from "./components/Sobre";
import Footer from "./components/Footer";
import Projetos from "./components/Projetos";


function App() {
  
  return (
    <div style={{ height: "100%" }}>
      <Header /> 
      <Main />
      <Sobre />
      <Projetos />
      <Footer />
    </div>
  );
}

export default App;
