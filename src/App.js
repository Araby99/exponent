import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Nav from './component/nav/Nav';
import Footer from './component/footer/Footer'
import Home from './component/home/Home';
import Company from './component/company/Company';
import Leadership from './component/leadership/Leadership';
import Services from './component/services/Services';
import Products from './component/products/Products';
import Blog from './component/blog/Blog';
import Contact from './component/contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav></Nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/company' element={<Company />} />
          <Route path='/leadership' element={<Leadership />} />
          <Route path='/services' element={<Services />} />
          <Route path='/products' element={<Products />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;