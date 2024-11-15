import "./App.css";
import "./assets/css/style.css";
import {currentMember, Header, Activities} from "./components";

const App = () => {
  return (
    <div>
      <nav className="navbar">
        <a href="#" className="logo">
          <img src="img/logo.png" alt="CSSA Logo" />
          CSSA
        </a>
        <div className="nav-links">
          <a href="#">HOME</a>
          <a href="#">OUR MEMBER</a>
        </div>
      </nav>
      <Header />
      <Activities/>
    </div>
  );
};

export default App;

