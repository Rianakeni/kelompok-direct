import "./App.css";
import "./assets/css/style.css";
import { currentMember, Header, Activities } from "./components";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Activities />
    </div>
  );
};

export default App;
