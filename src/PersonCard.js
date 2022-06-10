import React from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'

const PersonCard = ({ people, setValue, value }) => {
  return (
    <div className="section-center">
      {people.map((person, idx) => {
        const { id, image, name, quote, title } = person
        let position = 'nextSlide'
        if (idx === value) {
          position = 'activeSlide'
        }
        if (idx === value - 1 || (value === 0 && idx === people.length - 1)) {
          position = 'lastSlide'
        }
        return (
          <article className={position} key={id}>
            <img className="person-img" src={image} alt={name} />
            <h4>{name}</h4>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon"></FaQuoteRight>
          </article>
        )
      })}

      <button className="prev">
        <FiChevronLeft onClick={() => setValue(value - 1)} />
      </button>
      <button className="next">
        <FiChevronRight onClick={() => setValue(value + 1)} />
      </button>
    </div>
  )
}

export default PersonCard
