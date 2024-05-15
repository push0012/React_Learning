/* eslint-disable no-unused-vars */

import "./App.css";
import Accourdian from "./components/accordian";
import ModalTest from "./components/custom-modal-popup/modal-test";
import TabTest from "./components/custom-tabs/tab-test";
import GithubProfileFinder from "./components/github-profile-finder";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-data";
import QRCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import ScrollIndicator from "./components/scroll-indicator";
import SearchAutocomplete from "./components/search-autocomplete-with-api";
import StarRating from "./components/star-rating";
import TicTacToe from "./components/tic-tac-toe";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";

function App() {
  return (
    <div className="App">
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
      {/* <LightDarkMode/> */}

      {/* 09 Component */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}

      {/* 10 Component */}
      {/* <TabTest />  */}

      {/* 11 Component */}
      {/* <ModalTest/> */}

      {/* 12 Component */}
      {/* <GithubProfileFinder/> */}

      {/* 13 Component */}
      {/* <SearchAutocomplete /> */}

      {/* 14 Component */}
      <TicTacToe/>
    </div>
  );
}

export default App;
