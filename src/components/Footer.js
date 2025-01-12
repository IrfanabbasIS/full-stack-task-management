import { Link } from 'react-router-dom';
import "./Footer.css"

import React from 'react'

export default function Footer() {
  return (
    <div>
        <footer>
    <div className="f-info">
        <div className="f-info-socials">
            <i className="fa-brands fa-square-facebook"></i>
            <i className="fa-brands fa-square-instagram"></i>
            <i className="fa-brands fa-linkedin"></i>
        </div>

    <div>
        <img src='' alt='yes'></img>
    </div>
        <div className="f-info-brand">&copy;GoDelicious Private Limited</div>
        <div className="f-info-links">
            <Link to="/privacy">Privacy</Link>
            <Link to="/">Terms</Link>
        </div>
    </div>
</footer>
    </div>
  )
}

