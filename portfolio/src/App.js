import './App.css';
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import React, { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <About />;
  };
  
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div className="mobile-header">
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
      <div>
        <main>{renderPage()}</main>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
