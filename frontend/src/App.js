import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Navbar from "./layout/Navbar";
import AddStudent from "./components/AddStudent";
import EditStudent from "./components/EditStudent";
import ViewStudent from "./components/ViewStudent";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addstudent" element={<AddStudent />} />
          <Route exact path="/editstudent/:id" element={<EditStudent />} />
          <Route exact path="/viewstudent/:id" element={<ViewStudent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
