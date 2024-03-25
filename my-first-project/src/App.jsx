/* eslint-disable no-unused-vars */

import './App.css'
import Accourdian from './components/accordian'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'

function App() {


  return (
    <div className='App'>
      {/*<Accourdian/>*/}
      {/*<RandomColor />*/}
        <StarRating noOfStars = {10}/>
      
    </div>
  )
}

export default App
