import React from "react"

class Testimonials extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="container container-padding">
                <h2 className="text-center text-uppercase">Few testimonials</h2>
                <div className="row margin-zero">
                    <div className="col-md-12">
                        <blockquote>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, veritatis nulla eum
                                laudantium totam tempore optio doloremque laboriosam quas, quos eaque molestias odio
                                aut eius animi. Impedit temporibus nisi accusamus.</p>
                            <h3 className="text-center">John Doe</h3>
                        </blockquote>
                    </div>
                </div>
            </div>
        );
    }
}

export default Testimonials;