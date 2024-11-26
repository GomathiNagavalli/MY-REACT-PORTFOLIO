
import './App.css';
import AboutMe from './components/AboutMe';
// import Copyright from './components/Copyright';
import Education from './components/Education';
import Home from './components/Home';
// import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from './components/NavigationBar';
import Services from './components/Services';

function App() {
  return (
    <>
        <NavigationBar />
        <Home />
        <AboutMe />
        <Education />
        <Services />
        {/* <Copyright /> */}
    </>
  );
}

export default App;
