import './App.css';
import Header from './Components/HeaderStuff/Header'
import Bio from './Components/BioStuff/Bio'
import ProjectList from './Components/Projects/ProjectList'
import Footer from './Components/FooterStuff/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <div id="Bio">
      <Bio />
      </div>
      <div id="Projects">
        <ProjectList />
      </div>
      <div id="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
