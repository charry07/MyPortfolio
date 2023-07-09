import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home, Header, Skills, Projects, Contact, Footer } from './components';

function App() {
  return (
    <div className='App'>
      <Header />
      <Home />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
