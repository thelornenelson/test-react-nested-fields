import React, {Component} from 'react';
import Recipe from './Recipe.jsx'

class App extends Component {
  constructor() {
    super()
    this.state = {
      steps: [
        { description: "hello",
        ingredients: ["ingredient 1", "ingredient 2"] }
      ]
    }

    this.addStep = this.addStep.bind(this);
    this.addIngredient = this.addIngredient.bind(this);
    this.changeDescription = this.changeDescription.bind(this);
    this.changeIngredient = this.changeIngredient.bind(this);
  }

  addStep() {
    const newSteps = this.state.steps.concat([{ description: "new step", ingredients: [""] }])
    this.setState({steps: newSteps});
  }

  addIngredient(stepIndex){
    console.log(`stepIndex = ${stepIndex}`)
    const newSteps = this.state.steps.slice(0);

    newSteps[stepIndex].ingredients.push("New Ingredient");
    this.setState({ steps: newSteps });
  }

  changeDescription(stepIndex, newDescription){
    const newSteps = this.state.steps.slice(0);
    newSteps[stepIndex].description = newDescription;
    this.setState({ steps: newSteps });
  }

  changeIngredient(stepIndex, ingredientIndex, newIngredient){
    const newSteps = this.state.steps.slice(0);
    newSteps[stepIndex].ingredients[ingredientIndex] = newIngredient;
    this.setState({ steps: newSteps });
  }

  render() {

    return (
      <div>
        <Recipe
        addStep={ this.addStep }
        addIngredient={ this.addIngredient }
        steps={ this.state.steps }
        changeDescription={ this.changeDescription }
        changeIngredient={ this.changeIngredient }
        />
      </div>
    );
  }
}
export default App;
