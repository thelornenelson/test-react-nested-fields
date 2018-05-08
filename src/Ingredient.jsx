import React, {Component} from 'react';

class Ingredient extends Component {
  constructor() {
    super()

  }
  render() {
    return (
      <input onChange={ (event) => { this.props.changeIngredient(this.props.stepIndex, this.props.ingredientIndex, event.target.value) } } name="ingredient" value={ this.props.ingredientName }></input>
    );
  }
}
export default Ingredient;
