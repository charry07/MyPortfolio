import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner, NavBar, Skills, Projects, Contact, Footer } from './components';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
