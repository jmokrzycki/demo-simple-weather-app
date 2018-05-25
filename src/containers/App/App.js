import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class App extends React.Component {

  render() {
      var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <Slider {...settings}>
          <div>
            <h3>1111111111111111</h3>
          </div>
          <div>
            <h3>2222222222222222</h3>
          </div>
          <div>
            <h3>3333333333333333</h3>
          </div>
          <div>
            <h3>4444444444444444</h3>
          </div>
          <div>
            <h3>5555555555555555</h3>
          </div>
          <div>
            <h3>6666666666666666</h3>
          </div>
        </Slider>
      );
    }


}
