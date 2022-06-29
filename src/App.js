import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./components/Login"
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path='/home' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
