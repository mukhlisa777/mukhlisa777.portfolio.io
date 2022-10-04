// import {  BrowserRouter,Router,Routes,Route} from "module";





import Navbar from "./components/Navbar/Navbar";
import './App.css'
import Intro from "./components/intro/Intro";
import '../src/fonts/NotoSans-Regular.ttf'
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Conact from "./components/Contact/Conact";
import Footer from "./components/Footer/Footer";
import {themeContext} from './Context.js'
import { useContext } from "react";





function App() {
  const theme=useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (

    <div className="App"
style={{
  background:darkMode?'black':'',
  color:darkMode? 'white': '',
}}
    >





    {/* imports */}
    <Navbar/>
    <Intro/>
    <Skills/>
    <About/>
    <Portfolio/>
    <Conact/>
    <Footer/>
    </div>
  
  );
}

export default App;
