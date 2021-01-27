import './App.css';
import { Pane } from 'evergreen-ui'
import Header from './SectionComponents/Header'
import Skills from './SectionComponents/Skills'
import UnityGames from './SectionComponents/UnityGames'
import Vision from './SectionComponents/Vision'
import ReactProjects from './SectionComponents/ReactProjects'
import PrintingStuff from './SectionComponents/PrintingStuff'
import Footer from './SectionComponents/Footer'



function App() {
  return (
    <div className="App">
      <Pane
        background="green">
        <header>
          <Header />
          <Vision />
        </header>
        <nav>
          <Skills />
        </nav>
        <section>
          <UnityGames />
        </section>
        <section>
          <ReactProjects />
        </section>
        <section>
          <PrintingStuff />
        </section>
        <footer>
          <Footer />
        </footer>
      </Pane>
    </div>
  );
}

export default App;
