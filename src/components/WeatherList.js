import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fakeWeather from "./../utils/fake-16days-weather.js";

export default class App extends React.Component {
  render() {
    const WeatherFocecastHTML = fakeWeather.list.map((prognoza, index) => {
      const img = "http://openweathermap.org/img/w/" + prognoza.weather[0].icon + ".png";
      const days = ["Monday", "Tuestady", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
      return (
        <div key={index} className="weather-card">
          {days[index%7]} <br/>

          temp day: {prognoza.temp.day}° <br/>
          humidity: {prognoza.humidity}% <br/>
          icon: <img src={img} />

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
