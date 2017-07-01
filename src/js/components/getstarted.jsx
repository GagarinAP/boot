import React from "react"

class Getstarted extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="container container-padding">
                <div className="row get-started-block">
                    <div className="col-md-10 col-sm-12">
                        <h2 className="text-center margin-top-10">Start Building Your Own Profile Now</h2>
                    </div>
                    <div className="col-md-2 col-sm-12">
                        <button className="btn btn-primary btn-lg center-block btn-get-started">Get started</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Getstarted;