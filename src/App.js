import './App.css';
import { Route, Routes } from 'react-router-dom';
import Books from './Pages/BooksPage/Books';
import Reviews from './Pages/ReviewsPage/Reviews';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/books' element={<Books></Books>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
      </Routes>
    </div>
  );
}

export default App;
