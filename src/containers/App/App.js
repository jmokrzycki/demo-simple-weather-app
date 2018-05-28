import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import fakeWeather from "./../../utils/fake-16days-weather.js";
import WeatherList from "./../../components/WeatherList.js";

export default class App extends React.Component {

  render() {
      return (
        <div>
          <WeatherList />
        </div>
      );
    }


}
