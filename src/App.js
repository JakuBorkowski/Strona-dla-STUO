import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './elements/header/Header.js';
import Main from './elements/main/Main.js';
import Nav from './elements/nav/Nav.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Header/>
      <Main/>
      </BrowserRouter>
    </div>
  );
}

export default App;
