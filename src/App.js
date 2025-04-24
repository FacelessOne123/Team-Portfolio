import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Members from "./components/Members/members";
import Background from "./components/Background/background";
import Project from "./components/Project/project";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Background/>
      <Members/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
