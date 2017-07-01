import React from "react"

import Header from "./static/header"
import Footer from "./static/footer"

import CarouselSlider from "./carousel"
import Social from "./social"
import Form from "./form"
import Getstarted from "./getstarted"
import Testimonials from "./testimonials"
import Companies from "./companies"
import Work from "./work"

class App extends React.Component{
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <div>
                <Header/>
                <CarouselSlider/>
                <Work/>
                <Companies/>
                <Testimonials/>
                <Getstarted/>
                <Form/>
                <Social/>
                <Footer/>
            </div>
        );
    }
}

export default App;