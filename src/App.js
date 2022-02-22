import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App">
          <h1>Welcome to React Router!</h1>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
          </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;
