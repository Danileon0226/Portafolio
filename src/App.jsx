import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { routes } from "./Routes/router-config";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <section className="content">
          <Navbar/>
          <Routes>
            {routes.map((ruta) => (
              <Route
                key={ruta.path}
                path={ruta.path}
                element={<ruta.component />}
              />
            ))}
          </Routes>
        </section>
      </BrowserRouter>
    </>
  );
}

export default App;
