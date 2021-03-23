import React from 'react';

import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon:0.7
}



class BurgerBuilder extends React.Component {
    state ={
        ingredients: {
            salad: 0,
            bacon:0,
            cheese: 0,
            meat: 0
        },

        totalPrive: 4
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updtedIngredients = {
            ...this.state.ingredients
        };

        updtedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({totalPrice: newPrice, ingredients: updtedIngredients})
        
    }

    removeIngredientHandler

    render(){
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                ingredientAdded = {this.addIngredientHandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;