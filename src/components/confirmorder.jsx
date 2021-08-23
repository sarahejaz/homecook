import React, { Component } from "react";
import '../mystyles.css';
import OrderMeal from './ordermeal';
import { withRouter } from "react-router-dom";

class ConfirmOrder extends Component {
    constructor() {
        super();
        this.calculateTotal = this.calculateTotal.bind(this);
        this.done = this.done.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    calculateTotal(selectedFoods, numberOfPersons) {
        var total = 0;
        for (var i = 0; i < selectedFoods.length; ++i) {
            var dividedPeople = numberOfPersons / selectedFoods[i].persons;
            total += (dividedPeople * selectedFoods[i].price);
        }
        return total;
    }

    done() {
        var add = document.getElementById('address').value;
        if (!add.match(/^[0-9a-z' ']+$/) || !isNaN(add)) {
            alert("Enter valid address");
        }
        else if (add === null || add === "") {
            alert("Enter your address");
        }
        else {
            this.props.history.push("/done");
        }
    }


    render() {
        const { numberOfPersons } = this.props;
        const { selectedFoods } = this.props;
        var index = 0;
        return (
            <div className="maindiv">
                <div className="mybg">
                    <br/>
                    <h2 style={{textAlign: 'center', paddingTop: '20px', paddingBottom: '20px'}}>Your Order</h2>
                    <br/>
                    <ul className="mybg">
                        <table style={{marginLeft: "auto", marginRight: "auto", border: "2px solid black", backgroundColor: "white"}}>
                            <tr style={{fontSize: "20px"}}>
                                <td style={{width: "90px", padding: "8px"}}>
                                    <b>Sr No</b>
                                </td>

                                <td style={{width: "400px", padding: "8px"}}>
                                    <b>Name</b>    
                                </td>

                                <td style={{width: "180px", padding: "8px"}}>
                                    <b>Price </b>
                                </td>

                                <td style={{width: "220px", padding: "8px"}}>
                                    <b>Persons per serving</b>
                                </td> 
                            </tr>
                        </table>
                        <table style={{marginLeft: "auto", marginRight: "auto", border: "black", backgroundColor: "white"}}>

                            {selectedFoods.map(fooditem =>(
                                    
                                    <li key={fooditem.id} style={{listStyleType: 'none'}}>
                                        <tr style={{fontSize: "15px"}}>
                                            <td style={{width: "90px", padding: "9px"}}>
                                                { ++index }
                                            </td>

                                            <td style={{width: "400px", padding: "9px"}}>
                                                {fooditem.name}
                                            </td>

                                            <td style={{width: "180px", padding: "9px"}}>
                                                Rs. {fooditem.price}
                                            </td>

                                            <td style={{width: "220px", padding: "9px"}}>
                                                {fooditem.persons}
                                            </td>
                                        
                                        </tr>
                                    </li>
                                    
                                ))}
                        </table>
                    </ul>
                </div>
                <br/><br/><br/><br/>

                <table style={{marginLeft: "auto", marginRight: "auto"}}>
                    <tr style={{fontSize: "20px"}}>
                        <th style={{width: "220px", paddingBottom: "20px"}}>Number of persons</th>
                        <th style={{width: "160px", paddingBottom: "20px", paddingLeft: "5px"}}>{numberOfPersons}</th>
                    </tr>
                    <tr style={{fontSize: "20px"}}>
                        <th style={{width: "220px"}}>Total</th>
                        <th style={{width: "160px", backgroundColor: "#F2CD60", paddingLeft: "5px"}}>Rs. {this.calculateTotal(selectedFoods, numberOfPersons)}</th>
                    </tr>
                </table>
                
                <br/><br/><br/><br/>


                <table style={{marginLeft: "auto", marginRight: "auto"}}>
                    <tr style={{fontSize: "20px"}}>
                        <th style={{width: "300px", paddingBottom: "20px", textAlign: "right", paddingRight: "20px", verticalAlign: "top"}}>
                            <h2 style={{fontSize: "20px"}}>
                                Enter address:
                            </h2>
                        </th>
                        <th style={{width: "90px", paddingBottom: "20px", paddingLeft: "5px"}}>
                            <textarea class="longInput" cols="50" rows="10" id="address"></textarea>
                        </th>
                    </tr>
                </table>

                <br/><br/><br/>
                
                <div style={{textAlign: 'center'}}>
                    <button
                        type="button"
                        className="btn btn-warning"
                        style={{backgroundColor: "#F2CD60",
                            fontWeight: "bold",
                            alignSelf: 'center',
                            height: "55px",
                            width: "140px",
                            padding: '0px',
                            fontSize: "20px"}}
                        onClick={this.done}>
                        Done
                    </button>
                </div>

                <br/><br/><br/><br/>

            </div>

            
        );
    }
}

export default withRouter(ConfirmOrder);