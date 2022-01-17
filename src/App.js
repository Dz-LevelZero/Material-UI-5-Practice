import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SearchAppBar from './components/AppBar';
import Home from './pages/Home';
import Tour from './pages/Tour';

function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <SearchAppBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/:id" element={<Tour/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
