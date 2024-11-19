import "./App.css";
import "./assets/css/style.css";
import "./assets/css/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Header, Activities, CurrentMember } from "./components";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Activities />} />
        <Route path="/ourmember" element={<CurrentMember />} />
      </Routes>
    </Router>
  );
};

export default App;
