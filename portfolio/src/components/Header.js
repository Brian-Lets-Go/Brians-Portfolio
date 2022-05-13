import React, { useState } from 'react';
import { Tabs } from "./Tabs";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Portfolio } from "./pages/Portfolio";
import { Resume }from "./pages/Resume";

 export function Header() {
	const [currentPage, handlePageChange] = useState("About");
  
	
	const renderPage = () => {
	  switch (currentPage) {
		case "About":
		  return <About />;
		case "Portfolio":
		  return <Portfolio />;
		case "Contact":
		  return <Contact />;
		case "Resume":
		  return <Resume />;
  
		default:
		  return <About />;
	  }
	};
  
	return (
	  <div>
		<nav className="navbar">
		  <div className="navbar-brand">
			<a
			  className="navbar-item"
			  rel="noreferrer"
			  target="_blank"
			  href="https://github.com/Brian-Lets-Go"
			>
			  <span className="content is-large">Brian Meenan</span>
			</a>
		  </div>
		</nav>
		<Tabs
		  currentPage={currentPage}
		  handlePageChange={handlePageChange}
		/>
		<main>
		  <div>{renderPage(currentPage)}</div>
		</main>
	  </div>
	);
  }

