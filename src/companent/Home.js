import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
    };
    return (
        <div className="home">
            <div className="container">
                <div className="home-general">
                    <Slider {...settings}>
                        <div className="home-general__title">
                            <img className="home-general__img"
                                 src="https://images.wbstatic.net/bners1/big_spring_1902.jpg" alt=""/>
                        </div>
                        <div className="home-general__title">
                            <img className="home-general__img"
                                 src="https://images.wbstatic.net/bners1/big_spring_1902.jpg" alt=""/>
                        </div>
                        <div className="home-general__title">
                            <img className="home-general__img"
                                 src="https://images.wbstatic.net/bners1/big_spring_1902.jpg" alt=""/>

                        </div>

                        <div className="home-general__title">
                            <img className="home-general__img"
                                 src="https://images.wbstatic.net/bners1/big_spring_1902.jpg" alt=""/>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );

}