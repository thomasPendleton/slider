import React, { useState, useEffect } from 'react'


import Title from './title'
import PersonCard from './PersonCard'

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
      <Title /> 
      <PersonCard people={people} setValue={setValue} value={value} /> 

    </section>
  )
}

export default App
