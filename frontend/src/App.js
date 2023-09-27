import "./App.css";
import MainRoute from "./Auth/MainRoute";

import Footer from "./componant/Footer";
import { Try } from "./componant/Try";


import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <div className="App" style={{backgroundColor: "black"}}>
      <MainRoute />

      {/* <HomePage /> */}
   

      {/* <Footer /> */}
      {/* <Try /> */}
    </div>
  );
}

export default App;
