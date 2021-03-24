import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { indexAllRecipes } from '../../api/recipes'
import Recipe from '../Recipe/Recipe'

class IndexAllRecipes extends Component {
  constructor (props) {
    super(props)

    this.state = {
      recipes: null
    }
  }

  componentDidMount () {
    const { user } = this.props

    indexAllRecipes(user)
      .then(res => this.setState({ recipes: res.data.recipes }))
  }

  render () {
    const { recipes } = this.state
    const { user } = this.props
    if (!recipes) {
      return 'Loading...'
    }

    const recipeJsx = recipes.map(recipe => (
      <Recipe key={recipe.id} recipe={recipe} user={user}/>
    ))
    return (
      <div>{recipeJsx}</div>
    )
  }
}

export default withRouter(IndexAllRecipes)
