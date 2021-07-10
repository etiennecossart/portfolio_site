import './App.css';
import { Pane } from 'evergreen-ui'
import Header from './SectionComponents/Header'
import Skills from './SectionComponents/Skills'
import UnityGames from './SectionComponents/UnityGames'
import Vision from './SectionComponents/Vision'
import ReactProjects from './SectionComponents/ReactProjects'
import PrintingStuff from './SectionComponents/PrintingStuff'
import Footer from './SectionComponents/Footer'
import Body from './SectionComponents/Body'
import MeditationClock from './SectionComponents/MeditationClock'



function App() {
  return (
    <div className="full_wrap">
      <Header />
      <Body />
      <MeditationClock />
      {/* </body> */}
      
    </div>
  );
}

export default App;
