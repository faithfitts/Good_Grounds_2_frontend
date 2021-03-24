import React, { Component } from 'react'
import { withRouter, Redirect } from 'react-router-dom'

import { createRecipe } from '../../api/recipes'
import messages from '../AutoDismissAlert/messages'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class CreateRecipe extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      description: '',
      method: '',
      ingredients: '',
      createdId: null
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onRecipeCreate = event => {
    event.preventDefault()
    const { msgAlert, user } = this.props

    createRecipe(this.state, user)
      .then((res) => {
        msgAlert({
          heading: 'Create Success',
          message: messages.createRecipeSuccess,
          variant: 'success'
        })
        return res
      })
      .then((res) => this.setState({ createdId: res.data.recipe.id }))
      .catch(error => {
        this.setState({ recipes: null })
        msgAlert({
          heading: 'Create Failed with error: ' + error.message,
          message: messages.createRecipeFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { name, description, method, ingredients, createdId } = this.state
    if (createdId) {
      return <Redirect to={`/recipes/${createdId}`}/>
    }
    return (
      <div className="row">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
          <h3>Create a Recipe</h3>
          <Form onSubmit={this.onRecipeCreate}>
            <Form.Group controlId="recipeName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                name="name"
                value={name}
                placeholder="Recipe Name Goes Here"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="recipeDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                required
                as='textarea'
                rows={3}
                name="description"
                value={description}
                placeholder="Recipe Description Goes Here"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="recipeMethod">
              <Form.Label>Method</Form.Label>
              <Form.Control
                required
                name="method"
                value={method}
                placeholder="Method Goes Here"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="recipeIngredients">
              <Form.Label>Ingredients</Form.Label>
              <Form.Control
                required
                as='textarea'
                rows={6}
                name="ingredients"
                value={ingredients}
                placeholder="Recipe Ingredients Goes Here"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
            >
              Create Recipe
            </Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default withRouter(CreateRecipe)
