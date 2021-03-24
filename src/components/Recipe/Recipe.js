import React, { Component, Fragment } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

class Recipe extends Component {
  constructor (props) {
    super(props)
    this.state = {
      id: ''
    }
  }

  // update and delete buttons on the card
  render () {
    const { recipe, user } = this.props
    const ownerOptions = (
      <Fragment>
        <div style={{ alignContent: 'flex-end', display: 'flex', justifyContent: 'flex-end' }}>
          <Link to={`/recipes/update/${recipe.id}`}>
            <Button variant="primary">Update</Button>
          </Link>
          <Link to={`/recipes/delete/${recipe.id}`}>
            <Button variant="danger">Delete</Button>
          </Link>
        </div>
      </Fragment>
    )

    // check to see if user is the owner of the recipe
    const ownerCheck = function () {
      if (recipe.owner === user.id) {
        return ownerOptions
      }
    }

    return (
      // style, color, and info on each card
      <Fragment>
        <div className='col-10 mx-auto mt-3'>
          <Card style={{ border: '1px solid' }}>
            <Card.Header as="h5" style={{ backgroundColor: '#blue' }}>
              <Link variant="dark" to={`/recipes/${recipe.id}`}>
                {recipe.name}
              </Link>
            </Card.Header>
            <Card.Body style={{ backgroundColor: 'blue' }}>
              <Card.Title>{recipe.description}</Card.Title>
              <Card.Text>
                {recipe.method}
                {recipe.ingredients}
              </Card.Text>
              {ownerCheck()}
            </Card.Body>
          </Card>
        </div>
      </Fragment>
    )
  }
}

export default Recipe
