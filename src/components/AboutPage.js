import React from 'react';
//import { Link } from 'react-router-dom';
import '../styles/about-page.css';

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
  return (
    <div>
      <h2 className="alt-header">About</h2>
      <p>
        <a>Jenny M&#39;s Quilt Shop is Really Cool</a>.
      </p>
    </div>
  );
};

export default AboutPage;
