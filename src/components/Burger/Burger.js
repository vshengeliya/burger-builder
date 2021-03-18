import React from 'react'

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'


const burger =(props) =>{
    let transforedIngregients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey}/>
        });
    })
    .reduce((arr, el)=>{
        return arr.concat(el)
    }, [])

    if (transforedIngregients.length === 0){
        transforedIngregients = <p>Please start adding ingredients!</p>
    }

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type = 'bread-top'/>
           {transforedIngregients}
            <BurgerIngredient type = 'bread-bottom'/>
        </div>
    );
};

export default burger;