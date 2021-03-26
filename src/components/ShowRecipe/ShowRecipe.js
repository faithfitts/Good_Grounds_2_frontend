import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { showRecipe } from '../../api/recipes'
import Recipe from '../Recipe/Recipe'

class ShowRecipe extends Component {
  constructor (props) {
    super(props)

    this.state = {
      recipe: null
    }
  }

  componentDidMount () {
    const { match, user } = this.props
    showRecipe(match.params.id, user)
      .then(res => this.setState({ recipe: res.data.recipe }))
      .catch((error) => {
        console.error(error)
      })
  }

  render () {
    const { recipe } = this.state
    const { user } = this.props
    if (!recipe) {
      return ''
    }

    const showRecipeJsx = <Recipe recipe={recipe} user={user}/>

    return (
      <Fragment>
        {showRecipeJsx}
      </Fragment>
    )
  }
}

export default withRouter(ShowRecipe)
