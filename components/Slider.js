import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true
    };
    return (
      <div className="slider">
        <Slider {...settings}>
          <div className="slider-1">
            <Link href="/techs" className="overley-1">
              <p>GET STARTED TODAY</p>
            </Link>
          </div>
          <div className="slider-2">
            <Link href="/techs" className="overley-2">
              <p>GET STARTED TODAY</p>
            </Link>
          </div>
          <div className="slider-3">
            <Link href="/techs" className="overley-3">
              <p>GET STARTED TODAY</p>
            </Link>
          </div>
          <div className="slider-4">
            <Link href="/techs" className="overley-4">
              <p>GET STARTED TODAY</p>
            </Link>
          </div>
          <div className="slider-5">
            <Link href="/techs" className="overley-5">
              <p>GET STARTED TODAY</p>
            </Link>
          </div>
          <div className="slider-6">
            .
          <Link href="/techs" className="overley-6">
              <p>GET STARTED TODAY</p>
            </Link>
          </div>
        </Slider>
      </div>
    );
  }
}