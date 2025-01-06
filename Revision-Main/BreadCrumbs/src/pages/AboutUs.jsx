import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div>
      <h1 className="bg-purple-500 text-3xl">This is AboutUs PAge</h1>
      <ul>
        <li>
          <Link to="contact">ContactUs</Link>
        </li>
        <li>
          <Link to="faq">Faq</Link>
        </li>
      </ul>
      <Outlet/>
    </div>
  );
}

export default AboutUs
