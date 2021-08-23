import React, { Component } from "react";
import './App.css';
import FoodItems from './components/fooditems';
import "bootstrap/dist/css/bootstrap.css";
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import OrderMeal from './components/ordermeal';
import ConfirmOrder from './components/confirmorder';
import ThankYou from './components/thankyou';
import { SocialMediaIconsReact } from 'social-media-icons-react';

class App extends Component {

  constructor() {
    super();
    this.mealSelectOnChange = this.mealSelectOnChange.bind(this);
    this.numberOfPersonsChange = this.numberOfPersonsChange.bind(this);
    this.state = {
      fooditems: [
        { id: "1", name: "Nihari", price: 60, picture: '/images/nihari.jpg', persons: 2 },
        { id: "2", name: "Daal (Masoor)", price: 40, picture: '/images/daal-masoor.jpg', persons: 2 },
        { id: "3", name: "Lasagna", price: 80, picture: '/images/lasagna.jpg', persons: 3 },
        { id: "4", name: "Bhindi Gosht", price: 55, picture: '/images/bhindi-gosht.jpg', persons: 2 },
        { id: "5", name: "Haleem", price: 70, picture: '/images/haleem.jpg', persons: 2 },
        { id: "6", name: "Gajar ka Halwa", price: 65, picture: '/images/gajar-ka-halwa.jpg', persons: 2 },
        { id: "7", name: "Chicken Biryani", price: 75, picture: '/images/chicken-biryani.jpg', persons: 3 },
        { id: "8", name: "White Lobia", price: 60, picture: '/images/white-lobia.jpg', persons: 3 }
      ],
      selectedFoods: [], //this array contains the IDs of the selected foods
      numberOfPersons: 0
    }
  }


  mealSelectOnChange(addSelectedFoods){
    this.setState({ selectedFoods: addSelectedFoods })
  }

  numberOfPersonsChange(noOfPersons){
    this.setState({ numberOfPersons: noOfPersons })
  }

  render( ) {
    return (
      
      <div>
        <div
          style={{
            backgroundColor: '#F25757',
            height: '153px',
          }}>
            <h1 style={{fontWeight: 'bold', paddingLeft: "55px"}}>HomeCook</h1>
            <p className="tagline" style={{paddingLeft: "55px"}}>Order delicious home cooked meals online</p>
        </div>
        <Router>
          <div>
             <Switch>
              <Route exact path="/"> 
                <FoodItems
                  fooditems={this.state.fooditems}
                  history={this.props.history}
                />
              </Route>
              <Route path="/order">
                <OrderMeal
                  orderfooditems={this.state.fooditems}
                  mealSelectOnChange={this.mealSelectOnChange}
                  numberOfPersonsChange={this.numberOfPersonsChange}
                />
              </Route>
              <Route path="/confirmorder">
                <ConfirmOrder
                  fooditems={this.state.fooditems}
                  selectedFoods={this.state.selectedFoods}
                  numberOfPersons={this.state.numberOfPersons}
                />
              </Route>
              <Route path="/done">
                <ThankYou/>
              </Route>
            </Switch>
          </div>
        </Router>
      
      <footer style={{backgroundColor: '#d4d6d2', height: '80px'}}>
        <div style={{textAlign: 'center'}}>
          <h1 style={{marginLeft: "150px", fontSize: '15px', color: 'black', float: 'left'}}>© Sarah Ejaz 2020</h1>
          <div style={{float: 'right'}}>
            <table style={{marginRight: "150px", marginTop: "20px"}}>
              <tr>
                <th style={{paddingRight: "10px"}}>
                  <SocialMediaIconsReact icon="facebook" url="https://www.facebook.com/"
                   iconSize="2" size="40"/>
                </th>
                <th style={{paddingRight: "10px"}}>
                  <SocialMediaIconsReact icon="twitter" url="https://twitter.com/"
                  iconSize="2" size="40"/>
                </th>
                <th>
                  <SocialMediaIconsReact icon="instagram" url="https://www.instagram.com/" 
                  iconSize="2" size="40"/>
                </th>
              </tr>
            </table>
          </div>
        </div>
      </footer>
      </div>
      
    );
  }
}

export default App;
