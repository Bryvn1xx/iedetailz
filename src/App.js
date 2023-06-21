import './App.css';
import Home from './Home';
import Nav from './Nav';
import { Route, Routes } from 'react-router';
import PageView from './PageView';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='iedetailz'>
        <div>
          <Nav />
        </div>
        <Routes>
          <Route path='/mobilewash' element={<PageView />} />
        </Routes>
        <Home />
      </div>
    </BrowserRouter>
  );
}

export default App;


