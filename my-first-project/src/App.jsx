/* eslint-disable no-unused-vars */

import './App.css'
import Accourdian from './components/accordian'
import ImageSlider from './components/image-slider'
import LoadMoreData from './components/load-more-data'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'
import TreeView from './components/tree-view'
import menus from './components/tree-view/data'

function App() {


  return (
    <div className='App'>
      {/*<Accourdian/>*/}
      {/*<RandomColor />*/}
      {/* <StarRating noOfStars = {10}/> */}

      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={'1'} limit={"10"}/>
       */}
      
      {/* <LoadMoreData/> */}

      <TreeView  menus={menus}/>
    </div>
  )
}

export default App
