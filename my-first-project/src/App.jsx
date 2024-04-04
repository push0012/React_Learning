/* eslint-disable no-unused-vars */

//import './App.css'
import Accourdian from './components/accordian'
import ImageSlider from './components/image-slider'
import LightDarkMode from './components/light-dark-mode'
import LoadMoreData from './components/load-more-data'
import QRCodeGenerator from './components/qr-code-generator'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'
import TreeView from './components/tree-view'
import menus from './components/tree-view/data'

function App() {


  return (
    <div className='App'>

      {/* 01 Component */}
      {/* <Accourdian /> */}

      {/* 02 Component */}
      {/* <RandomColor /> */}

      {/* 03 Component */}
      {/* <StarRating noOfStars={10} /> */}

      {/* 04 Component */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={'1'} limit={"10"} /> */}

      {/* 05 Component */}
      {/* <LoadMoreData /> */}

      {/* 06 Component */}
      {/* <TreeView menus={menus} /> */}

      {/* 07 Component */}
      {/* <QRCodeGenerator/> */}

      {/* 08 Component */}
      <LightDarkMode/>
    </div>
  )
}

export default App
