import logo from './logo.svg';
import './App.css';
import ImageCarousal from './Components/Carousel/Carousel';
import Navbar from './Components/Navar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Signup from './Components/Login/Signup';
import Home from './Components/Home';
import { FilterDataPage } from './Components/FilterPage/filterData';
import BookDetailsPage from './Components/ShowBooks/BookDetail';

function App() {
  return (
    <div className="App">
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Signup' element={<Signup/>}/>
            <Route path="/filter" element={<FilterDataPage/>}/>
            <Route path="/details/:id" element={<BookDetailsPage/>} />
         </Routes>
    </div>
  );
}

export default App;
