import './App.css';

import Header from './components/header/Header';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Create from './pages/Create/Create';
import BlogDetails from './pages/home/BlogDetails';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    < div className="App" >
      <Router>
        <Header />
        <div className='main-container'>
          <Routes>
            <Route index element={<Home />} />
            <Route path='create' element={<Create />} />
            <Route path='blogs/:id' element={<BlogDetails />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </div >
  );
}

export default App;
