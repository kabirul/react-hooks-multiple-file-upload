import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./style/global.css";
import "bootstrap/dist/css/bootstrap.min.css";

import FilesUpload from "./components/FilesUpload";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
	<BrowserRouter>	  
    <div className="container" style={{ width: "600px" }}>
	 <Navbar />
      <div className="my-3">       
        <h4>React Hooks Multiple Files Upload</h4>
      </div>
      <FilesUpload />
	  <Footer />
     </div>
	</BrowserRouter>
  );
}

export default App;
