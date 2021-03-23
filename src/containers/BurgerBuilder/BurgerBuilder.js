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

        totalPrice: 4,
        purchasable: false
    }

    updatePurchaseState(ingredients){

        const sum = Object.keys(ingredients)
        .map(igKey =>{
            return ingredients[igKey] //to access values of the type of ingredients: [0,1,0...]
        })
        .reduce((sum, el)=>{
            return sum + el; // to do the sum on the ingredients
        }, 0)
    this.setState({purchasable: sum > 0 }) //sets to true or false
    };

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
        this.updatePurchaseState(updtedIngredients)
        
    }

    removeIngredientHandler = (type) =>{

        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0){
            return;
        }
        const updatedCount = oldCount - 1;
        const updtedIngredients = {
            ...this.state.ingredients
        };
        updtedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updtedIngredients})
        this.updatePurchaseState(updtedIngredients)
    }

    render(){
        const disabledInfo = {
            ...this.state.ingredients
        };

        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <=0; //would return true or false
            //{salad:true, meat: false,...}
        }
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                ingredientAdded = {this.addIngredientHandler}
                ingredientRemove ={this.removeIngredientHandler}
                disabled={disabledInfo}
                purchasable={this.state.purchasable}
                price={this.state.totalPrice}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;