import React from 'react';

import classes from './BuildControls.css'
import BuildControl from './BuldControl/BuildControl'

const controls = [
    { label: 'salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'}
]

const buildControls =(props) =>(

    <div className={classes.BuildControls}>
        {controls.map(ctrl =>(
            <BuildControl
             key = {ctrl.label} 
             label ={ctrl.label}
             added={() => props.ingredientAdded(ctrl.type)}
             removed = {()=> props.ingredientRemove(ctrl.type)}/>
        ))}


    </div>
)

export default buildControls;