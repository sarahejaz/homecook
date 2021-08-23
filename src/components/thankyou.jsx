import React, { Component } from "react";
import '../mystyles.css';
import { withRouter } from "react-router-dom";

class ThankYou extends Component {
    constructor() {
        super();
        this.goToHome = this.goToHome.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    goToHome() {
        this.props.history.push("/");
    }
    
    render() {
        return(
            <div className="maindiv">
                <div className="mybg" style={{textAlign: "center"}}>
                    <br/><br/><br/>
                    <h2 style={{paddingTop: '30px', paddingBottom: '20px'}}>
                        Thank you for ordering from HomeCook!
                    </h2>
                    <h3 style={{paddingTop: '20px', paddingBottom: '20px'}}>
                        We hope you continue to support us!
                    </h3>
                    <br/><br/><br/>
                    <button
                        type="button"
                        className="btn btn-warning"
                        style={{backgroundColor: "#F2CD60",
                                fontWeight: "bold",
                                alignSelf: 'center',
                                height: "55px",
                                width: "190px",
                                padding: '0px',
                                fontSize: "20px"}}
                            onClick={this.goToHome}>
                            Back to Home
                        </button>
                </div>
                <br/><br/><br/>
            </div>
        );
    }
}

export default withRouter(ThankYou);