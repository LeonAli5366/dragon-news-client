import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import brand from '../../../Assets/Brands/brand.jpg'
import brand2 from '../../../Assets/Brands/brand2.jpg'

const BrandCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={brand}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={brand2}
                    alt="Second slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default BrandCarousel;