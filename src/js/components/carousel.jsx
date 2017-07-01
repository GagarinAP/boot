import React from "react"
import { Carousel } from "react-bootstrap"

class CarouselSlider extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="container">
                <Carousel>
                    <Carousel.Item>
                        <img width={1200} height={700} alt="1200x700" src="images/la.jpg"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={1200} height={700} alt="1200x700" src="images/chicago.jpg"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={1200} height={700} alt="1200x700" src="images/ny.jpg"/>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default CarouselSlider;