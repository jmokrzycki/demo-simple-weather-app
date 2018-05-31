import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';
import Moment from 'moment';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fakeWeather from "./../utils/fake-16days-weather.js";

export default class App extends React.Component {
  render() {

    var d1 = fakeWeather.list.map(w => ({
      ...w,
      day: Moment.unix(w.dt).format('dddd')
    }));

    const WeatherFocecastHTML = d1.map((value, index) => {
      const img = "http://openweathermap.org/img/w/" + value.weather[0].icon + ".png";

      return (
        <div key={index} className="weather-card">
          <span className="weather-city-name">{fakeWeather.city.name}</span> <br />
          <span className="weather-day">{value.day}</span> <br />
          <span className="weather-description"> {value.weather[0].description}</span> <br />
          <span className="weather-temp-info"> {value.temp.day}° </span> <br/>
          <img className="weather-icon" src={img} />
          <span className="weather-info">humidity: {value.humidity}% </span> <br/>
          <span className="weather-info">pressure: {value.pressure} hpa </span> <br/>
          <span className="weather-info">wind: {value.speed} m/s {value.degree} 65 (zamienic np na east) </span> <br/>

        </div>
      )
    });


    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <Slider {...settings}>
          {WeatherFocecastHTML}
        </Slider>
      );
    }


}
