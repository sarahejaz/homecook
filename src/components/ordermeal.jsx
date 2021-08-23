import React, { Component } from "react";
import '../mystyles.css';
import ConfirmOrder from './confirmorder';
import { withRouter } from "react-router-dom";

class OrderMeal extends Component {
    constructor() {
        super();
        this.state = {
            selectedFoods: [],
            numberOfPersons: 0
        }
        this.mealSelectOnChange = this.mealSelectOnChange.bind(this);
        this.numberOfPersonsChange = this.numberOfPersonsChange.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    mealSelectOnChange(e, orderfooditems) {
        // current array of options
        const addSelectedFoods = this.state.selectedFoods
        let index
        var obj = orderfooditems[e.target.value-1]
    
        // check if the check box is checked or unchecked
        if (e.target.checked) {
          // add the numerical value of the checkbox to options array
          addSelectedFoods.push(obj)
        } else {
          // or remove the value from the unchecked checkbox from the array
          index = addSelectedFoods.indexOf(obj)
          addSelectedFoods.splice(index, 1)
        }
    
        // update the state with the new array of options
        this.setState({ selectedFoods: addSelectedFoods });
        this.props.mealSelectOnChange(addSelectedFoods);
    }

    numberOfPersonsChange(e) {
        if(e.target.value==='' || e.target.value===null || isNaN(e.target.value)) {
            alert("Enter number of persons (should be a valid number)");
        }
        else {
            this.setState({ numberOfPersons: e.target.value });
            this.props.numberOfPersonsChange(e.target.value);
        }

    }


    confirmOrder=()=> {
        console.log(this.state.numberOfPersons)
        if (this.state.selectedFoods.length===0) {
            alert("Please select foods to confirm order");
        }
        else if (this.state.numberOfPersons===0) {
            alert("Enter number of persons (should be a valid number)");
        }
        else {
            this.props.history.push("/confirmorder");
        }
        
    }

    
    render() {
        const { orderfooditems } = this.props;
        return (

            <div className="maindiv">
            
                <br/>
                <h2 style={{textAlign: 'center', paddingTop: '20px', paddingBottom: '20px'}}>Today's Meals</h2>
                
                <div className="mybg">
                    <div className="clearfix" >
                        <form style={{textAlign: "center"}}>
                            <div style={{marginLeft: "40px", marginRight: "40px"}}>
                            <ul className="mybg">
                                {orderfooditems.map(fooditem => (
                                    <li key={fooditem.id} style={{float: "left", listStyleType: 'none', padding: '20px'}}>
                                        <input type="checkbox" id={fooditem.id} value={fooditem.id} onChange={(e)=>{this.mealSelectOnChange(e, orderfooditems)}} />
                                        <div className="card">
                                            <div className="foodname">{fooditem.name}</div>

                                            
                                            <div className="imgCheckList">
                                                <div className="crop">
                                                    <img src={fooditem.picture}></img>
                                                </div>
                                            </div>
                                            
                                            
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
                        </form>
                    </div>
                </div>

                <br/>
                <br/>

                <div style={{textAlign: 'center'}}>
                    <div style={{display: "inline", paddingRight: '5px'}}>Number of people: </div>
                    <input type="text" id="numberOfPersons" name="numberOfPersons" onChange={(e)=>{this.numberOfPersonsChange(e)}}/>
                </div>

                <br/><br/>

                <div style={{textAlign: 'center'}}>
                    <button
                        type="button"
                        className="btn btn-warning"
                        style={{backgroundColor: "#F2CD60", fontWeight: "bold", alignSelf: 'center'}}
                        onClick={this.confirmOrder}>
                        Confirm Order
                    </button>
                </div>

                <br/><br/><br/><br/>
        </div>

        );
    }
    
}

export default withRouter(OrderMeal);