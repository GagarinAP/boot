import React from "react"

class Companies extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="container container-padding">
                <h2 className="text-center text-uppercase">Featured companies</h2>
                <div className="row margin-zero">
                    <div className="col-md-4 padding-15"><img src="images/la.jpg" alt="Los Angeles" style={{width:'100%'}}/></div>
                    <div className="col-md-4 padding-15"><img src="images/la.jpg" alt="Los Angeles" style={{width:'100%'}}/></div>
                    <div className="col-md-4 padding-15"><img src="images/la.jpg" alt="Los Angeles" style={{width:'100%'}}/></div>
                </div>
                <div className="row margin-zero">
                    <div className="col-md-4 padding-15"><img src="images/la.jpg" alt="Los Angeles" style={{width:'100%'}}/></div>
                    <div className="col-md-4 padding-15"><img src="images/la.jpg" alt="Los Angeles" style={{width:'100%'}}/></div>
                    <div className="col-md-4 padding-15"><img src="images/la.jpg" alt="Los Angeles" style={{width:'100%'}}/></div>
                </div>
            </div>
        );
    }
}

export default Companies;