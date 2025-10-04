import "./App.css";
import OnboardPanel from "./components/OnboardPanel/onboardPanel";

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
        <div className="onboard-container">
          <OnboardPanel />
        </div>
      </div>
    </div>
  );
}

export default App;
