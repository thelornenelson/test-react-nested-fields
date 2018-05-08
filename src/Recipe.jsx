import React, {Component} from 'react';
import Step from './Step.jsx'

class Recipe extends Component {
  constructor() {
    super()

  }
  render() {
    const steps = this.props.steps.map((step, index) => {
      return (<Step
        step={ step }
        addIngredient={ this.props.addIngredient }
        stepIndex={ index }
        changeDescription={ this.props.changeDescription }
        changeIngredient={ this.props.changeIngredient }
        />);
    });
    return (
      <div>
        { steps }
        <button onClick={ this.props.addStep }>Add Step</button>
      </div>
    );
  }
}
export default Recipe;
