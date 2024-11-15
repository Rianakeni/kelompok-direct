import "./App.css";
import "./assets/css"
import { aboutUs, currentMember, Hero } from "./components";

const App = () => {
  return (
    <div>
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
        <Hero />
        <main className="activities">
          <h2 className="section-title">Our Activities</h2>
          <div className="activity-card">
            <h3 className="activity-title">Olahraga Bersama Dosen FILKOM</h3>
            <div className="activity-images">
              <img src="img/olahraga.jpg" alt="Sports activity with professors 1" />
              <img src="img/olahraga.jpg" alt="Sports activity with professors 2" />
            </div>
          </div>
          <div className="activity-card">
            <h3 className="activity-title">Doa Subuh Bersama Senior</h3>
            <div className="activity-images">
              <img src="/img/doa-subuh.jpg" alt="Morning prayer with seniors" />
            </div>
          </div>
          <div className="activity-card">
            <h3 className="activity-title">Student Forum</h3>
            <div className="student-forum">
              <img src="img/sertifikat.jpg" alt="Certificate submission" className="forum-image" />
              <img src="img/cssa1.JPG" alt="Group photo" className="forum-image" />
              <img src="img/student.jpg" alt="Students in classroom" className="forum-image" />
              <img src="img/cssa2.JPG" alt="Large group gathering" className="forum-image large" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
