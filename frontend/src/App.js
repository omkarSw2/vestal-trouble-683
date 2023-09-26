import "./App.css";
import MainRoute from "./Auth/MainRoute";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <MainRoute />
      <HomePage />
    </div>
  );
}

export default App;
