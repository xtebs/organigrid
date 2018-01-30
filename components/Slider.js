import { Row, Col, Grid as Container } from 'react-bootstrap';
import css from 'styled-jsx/css';
import Slider from 'react-slick';
import * as styles from '../layouts/styles';

class CustomSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    return (
      <Slider className="slider" {...settings}>
        {this.props.children}
        <style jsx global>
          {sliderStyles}
        </style>
      </Slider>
    );
  }
}

const sliderStyles = css`
  .slider {
    margin-top: 32px;
    background-color: transparent;
  }
  .slide {
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 250px !important;
    width: auto;
    border-radius: 6px;
  }
  .slide-inner {
    width: 80%;
    min-height: 220px;
    background-color: rgba(255, 255, 255, 0);
    color: white;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .slick-dots li button::before {
    color: #fff;
  }
  .slick-dots li.slick-active button::before {
    color: #fff;
  }
  .slick-next::before,
  .slick-prev::before {
    color: rgba(255, 255, 255, 0.6);
  }
`;

export default CustomSlider;
