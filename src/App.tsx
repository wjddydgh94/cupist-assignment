import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";
import "./styles/css/reset.css";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
