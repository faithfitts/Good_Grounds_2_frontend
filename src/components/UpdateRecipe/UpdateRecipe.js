import React, { Component } from 'react'
import { withRouter, Redirect } from 'react-router-dom'

import { updateRecipe } from '../../api/recipes'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import messages from '../AutoDismissAlert/messages'

class UpdateRecipe extends Component {
  constructor (props) {
    super(props)

    this.state = {
      recipe: null,
      updated: false
    }
  }

    handleSubmit = (event) => {
      event.preventDefault()
      const { user, match, msgAlert } = this.props
      const { recipe } = this.state
      updateRecipe(match.params.id, recipe, user)
        .then(res => this.setState({ updated: true }))
        .then(() => {
          msgAlert({
            heading: 'Updated recipe Successfully',
            message: messages.recipeUpdateSuccess,
            variant: 'success'
          })
        })
        .catch(err => {
          msgAlert({
            heading: 'Updating recipe Failed',
            message: messages.recipeUpdateFailure + err.message,
            variant: 'danger'
          })
        })
    }

    // Updates the Recipe
    handleChange = event => {
      event.persist()
      this.setState((state) => {
        return {
          recipe: { ...state.recipe, [event.target.name]: event.target.value }
        }
      })
    }

    render () {
      const { name, description, method, ingredients, updated } = this.state
      if (updated) {
        // redirect to the recipe show page
        return <Redirect to ={'/recipes/'} />
      }

      // update card
      return (
        <div className="row">
          <div className="col-sm-10 col-md-8 mx-auto mt-5">
            <h3>Update a Recipe</h3>
            <Form onSubmit={this.handleSubmit}>
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
                Update Recipe
              </Button>
            </Form>
          </div>
        </div>
      )
    }
}

export default withRouter(UpdateRecipe)
