import React, { Component } from "react";
import '../mystyles.css';
import { withRouter } from "react-router-dom";

class FoodItems extends Component {

    constructor() {
        super();
        this.routeChange = this.routeChange.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    routeChange=()=> {
       // const { history } = this.props;
        this.props.history.push("/order");
    }
        
    render() {
        const { fooditems } = this.props;
        
        return (
        <div className="maindiv">
            
            <br/>
            <h2 style={{textAlign: 'center', paddingTop: '20px', paddingBottom: '20px'}}>Today's Meals</h2>
            
            <div className="mybg">
                <div className="clearfix">
                    <div style={{marginLeft: "40px", marginRight: "40px", textAlign: "center"}}>
                        <ul className="mybg">
                            {fooditems.map(fooditem => (
                                <li key={fooditem.id} style={{float: "left", listStyleType: 'none', padding: '20px'}}>
                                    <div className="card">
                                        <div className="foodname">{fooditem.name}</div>
                                        
                                        <div className="crop"><img src={fooditem.picture}></img></div>

                                        <div style={{paddingBottom: '4px', paddingTop: '10px'}}>
                                            <b>Price: </b>Rs. {fooditem.price}
                                        </div>
                                        
                                        
                                        <div style={{paddingBottom: '4px'}}>
                                            <b>Persons per serving: </b>{fooditem.persons}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <div style={{textAlign: 'center'}}>
                <button type="button" className="btn btn-warning" 
                style={{backgroundColor: "#F2CD60", fontWeight: "bold", alignSelf: 'center'}} 
                onClick={this.routeChange}>
                    Place My Order
                </button>
            </div>
        
        <br/><br/><br/>

        </div>
        );
    }
    
}

export default withRouter(FoodItems);