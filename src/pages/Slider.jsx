import React from 'react';
import slider_1 from '../assets/images/slide1.webp'
import slider_2 from '../assets/images/slide2.webp'
import slider_3 from '../assets/images/slide3.webp'

const Slider = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide my-5">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={slider_1} className="d-block w-100 img-fluid sliderImg"alt="instruments"/>
      <div className="carousel-caption slidertxt text-white d-md-block">
        <h3>Learn Music</h3>
        <p>Music is Art , Music is Love</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={slider_2} className="d-block w-100 img-fluid sliderImg" alt="instruments image"/>
      <div className="carousel-caption slidertxt text-white d-md-block">
        <h3>Listen Music</h3>
        <p>Music has break all barrier in the universe.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={slider_3} className="d-block w-100 img-fluid sliderImg" alt="instruments image"/>
      <div className="carousel-caption slidertxt text-white d-md-block">
        <h3>Feel Music</h3>
        <p>Music is the thing of feelings,mind and love</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    );
};

export default Slider;