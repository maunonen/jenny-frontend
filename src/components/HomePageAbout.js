import React from 'react'
import {Link} from 'react-router-dom'

const HomePageAbout = (props) => {
  return (
    <section className="container">
      <div className="home-about">
        <div className="home-about__circle"></div>
        <div className="home-about__header"></div>
          <h1 className="home-about__title">Taxi <br/> Price</h1>
          <p className="home-about__text">Print your taxi price sticker easily and get in a week</p>
          <p className="home-about__text home-about__text--italic">consectetur adipisicing elit</p>
          <Link to="/login">
            <a className="link-btn">Login</a>
          </Link>
      </div>
      <div className="home-about__photo">
        <img className="home-about__img" src="img/main-picture.png"/>
      </div>
    </section>
  )
}

export default HomePageAbout