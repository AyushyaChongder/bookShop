import React from 'react';
import Home from './home/Home';
import Books from './books/Books';
import {Route, Routes} from 'react-router-dom';
import Register from './components/Register';


function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/books' element={<Books/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </>
  );
}

export default App;
