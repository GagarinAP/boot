import React from "react"

class Work extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="container container-padding">
                <h2 className="text-center text-uppercase">How we work</h2>
                <div className="row margin-zero">
                    <div className="col-md-7 how-we-work-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi, consequatur culpa cum dignissimos eaque id perspiciatis rem voluptas! Animi earum enim mollitia optio repudiandae! Beatae esse, eum eveniet excepturi exercitationem provident quas sed! Consequatur!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias blanditiis consequuntur doloribus dolorum illum inventore itaque iusto necessitatibus officiis perferendis quaerat quod, repellendus unde ut! Ab dignissimos est explicabo, molestiae quo repellat suscipit vel!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur commodi enim obcaecati quos repellendus sunt ullam velit. Architecto consequatur excepturi fugiat labore nisi non porro, quia, quisquam quod, reprehenderit sapiente similique tempora tenetur voluptates?</p>
                    </div>
                    <div className="col-md-5">
                        <div className="embed-responsive embed-responsive-4by3">
                            <iframe src="https://www.youtube.com/embed/MtgzJiXj2o8" frameBorder="0" allowFullScreen/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Work;