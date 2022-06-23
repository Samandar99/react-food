import React from "react";

import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import {Category} from "./pages/Category";
import NotFound from "./pages/NotFound";
import {Recipe} from './pages/Recipe'

function App() {
  return (
    <>
      <Router basename="/react-food">
        <Header />
        <main className='container content'>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/category/:name" element={<Category/>}/>
            <Route path="/meal/:id" element={<Recipe/>}/>
            <Route path="*" element={<NotFound />} />
            
          </Routes>

        </main>
      </Router>
      <Footer />

    </>


  );
}

export default App;
