import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeProvider from "./context/ThemeContext";
import 'leaflet/dist/leaflet.css';
import { Provider } from "react-redux";
import { store } from "./app/store.js";


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeProvider>
    <App />
  </ThemeProvider>
  </Provider>
);
