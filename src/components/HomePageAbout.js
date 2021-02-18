import React from 'react'

const HomePageAbout = (props) => {
  return (
    <section className="container">
      <div className="home-about">
        <div className="home-about__circle"></div>
        <div className="home-about__header"></div>
          <h1 className="home-about__title">Design <br/> Studio</h1>
          <p className="home-about__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. A officiis deleniti architecto, in quo perferendis hic quas quibusdam esse? In debitis quia vero sunt?</p>
          <p className="home-about__text home-about__text--italic">consectetur adipisicing elit</p>
          <a className="link-btn" href="#">Read more</a>
      </div>
      <div className="home-about__photo">
        <img className="home-about__img" src="img/main-picture.png"/>
      </div>
    </section>
  )
}

export default HomePageAbout