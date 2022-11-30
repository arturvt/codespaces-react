import './App.css';
import Home from './pages/Home';
import Layout from './pages/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Clock from './pages/Clock';
import Info from './pages/Info';
import NoPage from './pages/NoPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="clock" element={<Clock />} />
          <Route path="info" element={<Info />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <header className="App-header">
    //     <img src="Octocat.png" className="App-logo" alt="logo" />
    //     <p>
    //       GitHub Codespaces <span className="heart">♥️</span> React
    //     </p>
    //     <p className="small">
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React!
    //       </a>
    //     </p>
    //   </header>
    // </div>
  );
}

export default App;
