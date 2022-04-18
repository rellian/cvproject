
import './App.css';
import GeneralPage from '../src/components/General'
import EducationalPage from '../src/components/Educational'
import PracticalPage from './components/Practical'
import SkillPage from './components/Skill';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <GeneralPage />
      </header>
      <p>
        <EducationalPage />
      </p>
      <p>
        <PracticalPage />
      </p>
      <p>
        <SkillPage />
      </p>
    </div>
  );
}

export default App;
