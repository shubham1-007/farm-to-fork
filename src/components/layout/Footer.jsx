import React from "react";
import "../../assets/css/layout/Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
  // getting dynamic year
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-wrapper container">
        <div className="copyright">
          &copy; {year} Farm2Fork. All Rights Reserved.
        </div>
        <div className="social-links">
          <a href="/" className="social-link">
            <FaFacebookF className="mb-1" /> Facebook
          </a>
          <a href="/" className="social-link">
            <FaTwitter className="mx-1 mb-1" />
            Twitter
          </a>
          <a href="/" className="social-link">
            <FaInstagramSquare className="mb-1" /> Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
