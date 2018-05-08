import React, {Component} from 'react';
import Ingredient from './Ingredient.jsx'

class Step extends Component {
  constructor() {
    super()

  }
  render() {
    const ingredients = this.props.step.ingredients.map((ingredient, index) => {
      return(<Ingredient changeIngredient={ this.props.changeIngredient } ingredientIndex={ index } stepIndex={ this.props.stepIndex } ingredientName={ ingredient }/>);
    });
    return (
      <div>
        <p>Step { this.props.stepIndex + 1 }</p>
        <input onChange={ (event) => { this.props.changeDescription(this.props.stepIndex, event.target.value) } } name="description" value={ this.props.step.description }></input>
        { ingredients }
        <button onClick={ () => { this.props.addIngredient(this.props.stepIndex) } }>Add Ingredient</button>

      </div>
    );
  }
}
export default Step;
