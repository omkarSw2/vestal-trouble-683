import "./App.css";
import MainRoute from "./Auth/MainRoute";

import Footer from "./componant/Footer";

import { HomePage } from "./pages/HomePage";


function App() {
  return (
    <div className="App">

      <MainRoute />
      <Footer />

      <HomePage />

    </div>
  );
}

export default App;
