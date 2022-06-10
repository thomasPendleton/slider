import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import data from './data'
function App() {
  const [people, setPeople] = useState(data)
  const [value, setValue] = useState(0)
  

  useEffect(() => {
    const lastIndex = people.length - 1
    if(value < 0){
      setValue(lastIndex)
    } 
    if(value > lastIndex){
      setValue(0)
    }
  }, [value, people])

  useEffect(() => {
    let slider = setInterval(()=> {
      setValue(value + 1)
    }, 5000)
    return () => clearInterval(slider)
  }, [value])

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person, idx) => {
          const { id, image, name, quote, title } = person
          let position = 'nextSlide'
          if(idx === value){
            position = 'activeSlide'
          }
          if(idx === value - 1 || (value === 0 && idx === people.length - 1)){
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
    </section>
  )
}

export default App
