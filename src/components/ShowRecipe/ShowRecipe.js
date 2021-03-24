import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'

import { showRecipe } from '../../api/recipes'
import messages from '../AutoDismissAlert/messages'

import Recipe from '../Recipe/Recipe'

class ShowRecipe extends Component {
  constructor (props) {
    super(props)

    this.state = {
      recipe: null
    }
  }

  componentDidMount () {
    const { match, user, msgAlert } = this.props
    showRecipe(match.params.id, user)
      .then(res => this.setState({ recipe: res.data.recipe }))
      .then(() => msgAlert({
        heading: 'Show Success',
        message: messages.showRecipeSuccess,
        variant: 'success'
      }))
      .catch(error => {
        this.setState({ recipe: null })
        msgAlert({
          heading: 'Show Failed with error: ' + error.message,
          message: messages.showRecipeFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { recipe } = this.state
    const { user } = this.props
    if (!recipe) {
      return 'Loading...'
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
