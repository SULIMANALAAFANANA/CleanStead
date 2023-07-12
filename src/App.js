import { Fragment } from "react";
import "./App.css";
import Home from "./compnent/Home/Home";
import Navs from "./compnent/Navs/Navs";
import Footer from "./compnent/Home/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container">
      <Navs />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
