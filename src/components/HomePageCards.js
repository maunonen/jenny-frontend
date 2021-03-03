import React from 'react'

const HomePageCards = (props) => {
  return (
    <section className="cards container">
      <div className="cards-table">
        <div className="cards-col">
          <div className="card">
            <svg className="card__picture" width="100" height="100">
              <circle cx="50" cy="50" r="40" stroke="green" strokeWidth="4" fill="yellow"/>
            </svg>
            <h2 className="card__title">Print price sticker</h2>
            <p className="card__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, minima at? Explicabo ea nobis qui, libero eius reprehenderit nihil ad sit repellat, ipsa, laboriosam praesentium adipisci itaque distinctio enim veritatis.</p>
          </div>

          <div className="card">
            <svg className="card__picture" width="100" height="100">
              <circle cx="50" cy="50" r="40" stroke="green" strokeWidth="4" fill="yellow"/>
            </svg>
            <h2 className="card__title">Print rules sticker</h2>
            <p className="card__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, minima at? Explicabo ea nobis qui, libero eius reprehenderit nihil ad sit repellat, ipsa, laboriosam praesentium adipisci itaque distinctio enim veritatis.</p>
          </div>
        </div>

        <div className="cards-col cards-col--shift">
          <div className="card">
            <svg className="card__picture" width="100" height="100">
              <circle cx="50" cy="50" r="40" stroke="green" strokeWidth="4" fill="yellow"/>
            </svg>
            <h2 className="card__title">Print rules sticker</h2>
            <p className="card__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, minima at? Explicabo ea nobis qui, libero eius reprehenderit nihil ad sit repellat, ipsa, laboriosam praesentium adipisci itaque distinctio enim veritatis.</p>
          </div>
          <div className="card">
            <svg className="card__picture" width="100" height="100">
              <circle cx="50" cy="50" r="40" stroke="green" strokeWidth="4" fill="yellow"/>
            </svg>
            <h2 className="card__title">Heading</h2>
            <p className="card__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, minima at? Explicabo ea nobis qui, libero eius reprehenderit nihil ad sit repellat, ipsa, laboriosam praesentium adipisci itaque distinctio enim veritatis.</p>
          </div>
        </div>
      </div>

      <div className="cards-about">
          <p className="cards-about__title">About</p>
          <h2 className="cards-about__slogan">Get your price quickly</h2>
          <p className="cards-about__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, minima at? Explicabo ea nobis qui, libero eius reprehenderit nihil ad sit repellat, ipsa, laboriosam praesentium adipisci itaque distinctio enim veritatis.</p>
      </div>
    </section>
  )
}

export default HomePageCards