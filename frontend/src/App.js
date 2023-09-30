import "./App.css";
import MainRoute from "./Auth/MainRoute";
import { Deviation } from "./componant/Deviation";

import Footer from "./componant/Footer";
import { Try } from "./componant/Try";


import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <div className="App" style={{}}>
      <MainRoute />

      {/* <HomePage /> */}
   

      {/* <Footer /> */}
      <Deviation />
      {/* <Try /> */}
    </div>
  );
}

export default App;
