import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Home, Header, Contact, Footer, Skills, Experience, Projects} from "./components";

function App() {
  return (
    <div className='App'>
      <Header />
      <Home />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
