import React from 'react';
import footerLogo from '../assets/images/logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
          <Link>
            <img src={footerLogo} alt="Website Logo" className="img-fluid logoimg rounded-circle" />
          </Link>
            <p className="mt-3">Music Pathshala</p>
          </div>
          <div className="col-md-4">
            <h5>Contact Information</h5>
            <p>Email: musicPathshala@gmail.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="col-md-4">
            <h5>Address</h5>
            <p>123 Main Street</p>
            <p>Chattogram, Bangladesh</p>
          </div>
        </div>
        <hr className="mt-4" />
        <p className="text-center">
          &copy; {new Date().getFullYear()} Your Website Name. All rights reserved.
        </p>
      </div>
    </footer>
    );
};

export default Footer;