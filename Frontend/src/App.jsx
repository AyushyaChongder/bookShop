import React from 'react';
import Home from './home/Home';
import Books from './books/Books';
import {Route, Routes} from 'react-router-dom';


function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/books' element={<Books/>}/>
      </Routes>
    </>
  );
}

export default App;
