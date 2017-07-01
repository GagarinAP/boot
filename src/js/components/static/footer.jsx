import React from "react"

class Footer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }
    render(){
        return(
            <footer className="footer">
                <div className="container">
                    <p className="text-muted text-center">
                        &copy; {this.state.date.getFullYear()} SiteName - all rights reserved
                    </p>
                </div>
            </footer>
        );
    }
}

export default Footer;