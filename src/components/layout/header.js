import React from 'react';

const Header = () => {
  return(
    <div>
    <header className="logo">
    	<img src="../images/Jenny_Ms_Quilting_Co_Logo.svg" alt="Jenny M’s Quilting Company Logo" height="94" width="150"/>
    </header>
    	<div className="container-fluid mb-5">
    		<nav className="nav justify-content-center">
    		      <a className="nav-item nav-link" href="https://jennymsquilts.com/">Home</a>
    		      <a className="nav-item nav-link" href="https://jennymsquilts.com/collections">Products</a>
    		      <a className="nav-item nav-link" href="https://jennymsquilts.com/blogs/news">Blog</a>
    		      <a className="nav-item nav-link" href="https://jennymsquilts.com/pages/about-us">About Us</a>
    		      <a className="nav-item nav-link" href="https://jennymsquilts.com/pages/contact-us">Contact Us</a>
    		      <a className="nav-item nav-link" href="https://jennymsquilts.com/pages/classes-and-events">Classes and Events</a>
    		</nav>
    	</div>
    </div>
  );
};

export default Header;
