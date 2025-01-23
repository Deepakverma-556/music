import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './view/Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/:id' element={<Main/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
