import React from "react"

class Social extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="container">
                <div className="col-md-12">
                    <div className="text-center center-block">
                        <a href="#"><i id="social-fb" className="fa fa-facebook-square fa-4x social"/></a>
                        <a href="#"><i id="social-tw" className="fa fa-twitter-square fa-4x social"/></a>
                        <a href="#"><i id="social-in" className="fa fa-instagram fa-4x social"/></a>
                        <a href="#"><i id="social-li" className="fa fa-linkedin-square fa-4x social"/></a>
                        <a href="#"><i id="social-pi" className="fa fa-pinterest-square fa-4x social"/></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Social;