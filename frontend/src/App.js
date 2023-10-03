import "./App.css";
import MainRoute from "./Auth/MainRoute";

import Footer from "./componant/Footer";

import Navbar from "./componant/Navbar";

function App() {
  return (
    <div className="App">


      <Navbar />
      <div style={{backgroundColor: "black", marginBottom: "20px", marginTop: "10px"}}>

      <MainRoute />
      </div>
      <Footer />


    </div>
  );
}

export default App;
