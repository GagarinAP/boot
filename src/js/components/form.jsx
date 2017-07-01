import React from "react"

class Form extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="container container-padding">
                <div className="row margin-zero">
                    <div className="col-md-8">
                        <h2>Drop as a line</h2>
                        <form className="form-horizontal" action="/">
                            <div className="form-group">
                                <div className="col-sm-10">
                                    <input type="password"
                                           className="form-control"
                                           id="name"
                                           placeholder="NAME"
                                           name="name"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-10">
                                    <input type="email"
                                           className="form-control"
                                           id="email"
                                           placeholder="EMAIL"
                                           name="email"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-10">
                                    <textarea className="form-control"
                                        rows="5"
                                        id="comment"
                                        placeholder="MESSAGE"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-4">
                        <h2>Visit our office</h2>
                        <address>
                            <strong>Hythe Window Cleaning</strong><br/>
                            15 Springfield Way<br/>
                            Hythe<br/>
                            Kent<br/>
                            United Kingdon<br/>
                            CT21 5SH<br/>
                            <abbr title="Phone">P:</abbr> 01234 567 890
                        </address>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;