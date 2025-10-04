import "./App.css";
import SkillsSelection from "./components/SkillsSelection/skillsSelection";

function App() {
  return (
    <div className="app-root">
      <div className="site-header">
        <div className="site-header__logo">breef.</div>
        <button
          className="site-header__cta"
          onClick={() => alert("Thanks for clicking!")}
        >
          SAVE &amp; EXIT
        </button>
      </div>
      <div className="page-body">
        <div className="sidebar"></div>
        <div className="project-container">
          <div className="project-title">
            {" "}
            <h1>Project Scope</h1>
            <p>Tell us what you're looking for and when you want to start.</p>
          </div>

          <div className="skills-container">
            <SkillsSelection />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
