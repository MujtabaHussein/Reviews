import { useState } from 'react'
import people from './data'
import { FaQuoteRight, FaAngleLeft, FaAngleRight } from 'react-icons/fa'
function App() {
  let [index, setIndex] = useState(0)
  const { id, name, job, image, text } = people[index]

  const checkNumber = (index) => {
    if (index < 0) {
      return people.length - 1
    }
    if (index > people.length - 1) {
      return 0
    }
    return index
  }
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return checkNumber(newIndex)
    })
  }

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1
      return checkNumber(newIndex)
    })
  }

  const randPerson = () => {
    const randNum = Math.floor(Math.random() * 4)
    console.log(randNum)
    setIndex(randNum)
  }
  return (
    <main>
      <article className='person' key={id}>
        <div className='image-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='image-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='name'>{name}</h4>
        <h6 className='job'>{job}</h6>
        <p className='text'>{text}</p>
        <div className='buttons'>
          <div className='main-btn'>
            <button className='left' onClick={() => prevPerson()}>
              <FaAngleLeft />
            </button>
            <button className='right' onClick={() => nextPerson()}>
              <FaAngleRight />
            </button>
          </div>

          <button className='suprise-btn btn' onClick={() => randPerson()}>
            Suprise me
          </button>
        </div>
      </article>
    </main>
  )
}

export default App
