import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { persistor, store } from "./redux/store";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react"; // Import PersistGate
import { PacmanLoader } from "react-spinners";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate
      loading={<PacmanLoader color="#36d7b7" />}
      persistor={persistor}>
      <ChakraProvider>
        <BrowserRouter>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </BrowserRouter>
      </ChakraProvider>
    </PersistGate>
  </Provider>
);

reportWebVitals();
