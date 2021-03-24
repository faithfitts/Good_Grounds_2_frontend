import React, { Component } from 'react'
import { withRouter, Redirect } from 'react-router-dom'

import { deleteRecipe } from '../../api/recipes'
import messages from '../AutoDismissAlert/messages'

class DeleteRecipe extends Component {
  constructor (props) {
    super(props)

    this.state = {
      recipe: null,
      deleted: false
    }
  }

  componentDidMount () {
    const { msgAlert, match, user } = this.props
    deleteRecipe(match.params.id, user)
      .then(() => this.setState({ deleted: true }))
      .then(() => msgAlert({
        heading: 'Delete Successful',
        message: messages.deleteRecipeSuccess,
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Delete Failed with error: ' + error.message,
          message: messages.deleteRecipeFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { deleted } = this.state

    if (deleted) {
      return <Redirect to='/recipes'/>
    }

    return (
      <div>Goodbye Recipe</div>
    )
  }
}

export default withRouter(DeleteRecipe)
