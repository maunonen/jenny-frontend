import React from 'react'
import {Link} from 'react-router-dom'



const Footer = (props) => {
  return (
    <div>
      <footer>
          <div className="footer__container">
            <div className="footer__col">
              <h2 className="footer__caption">Information</h2>
              <Link className="footer__item" to="/price">Price</Link>
              <Link className="footer__item" to="/about">About Us</Link>
              <Link className="footer__item" to="/privacy">Privacy</Link>
              <Link className="footer__item" to="/news">News</Link>
            </div>
            <div className="footer__col">
              <h2 className="footer__caption">Social Media</h2>
              <Link className="footer__item" to="/instagramm">Instagramm</Link>
              <Link className="footer__item" to="/facebook">Facebook</Link>
              <Link className="footer__item" to="/WhatsApp">WhatsApp</Link>
              <Link className="footer__item" to="/telegramm">Telegramm</Link>
            </div>   
            <div className="footer__col">
              <h2 className="footer__caption">Contact information</h2>
              <Link className="footer__item" to="/contact">Contact Form</Link>
              <Link className="footer__item" to="/address">Adrress</Link>
              <Link className="footer__item" to="/some_more">Some more</Link>
            </div>   
          </div>
          <div className="footer__copyright">
            <p>Copyright &copy; Test Jenny </p>
          </div>
      </footer>
    </div>

  )
}

export default Footer