import React from 'react';
import ReactDOM from 'react-dom';
import './../../flickity/dist/flickity.min.css';
import flickity from './../../flickity/dist/flickity.pkgd.min.js';

export default class App extends React.Component {

  render(){
    return(
        <div>
          <div class="main-gallery" data-flickity-options='{ "cellAlign": "left", "contain": true }'>
            <div class="gallery-cell">...</div>
            <div class="gallery-cell">...</div>
            <div class="gallery-cell">...</div>
          </div>
        </div>
    )
  }

}
