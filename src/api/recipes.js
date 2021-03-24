import apiUrl from '../apiConfig'
import axios from 'axios'

// Create (Create a Recipe)
export const createRecipe = (recipe, user) => {
  return axios({
    url: apiUrl + '/recipes/',
    method: 'POST',
    headers: {
      'Authorization': `Token ${user.token}`
    },
    data: {
      recipe: {
        name: recipe.name,
        description: recipe.description,
        method: recipe.method,
        ingredients: recipe.ingredients
      }
    }
  })
}

// Index All (Show All Recipes by All Users)
export const indexAllRecipes = (user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/allrecipes/',

    headers: {
      'Authorization': `Token ${user.token}`
    }
  })
}

// Index All (Show Recipes Belonging to Current User)
export const indexOneRecipe = (user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/recipes/',
    headers: {
      'Authorization': `Token ${user.token}`
    }
  })
}

// Show (Show A Clicked Recipe)
export const showRecipe = (id, user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/recipes/' + id,
    headers: {
      'Authorization': `Token ${user.token}`
    }
  })
}

// Update (Edit A Recipe)
export const updateRecipe = (id, recipe, user) => {
  return axios({
    method: 'PATCH',
    url: apiUrl + '/recipes/' + id,
    headers: {
      'Authorization': `Token ${user.token}`
    },
    data: {
      recipe: {
        name: recipe.name,
        description: recipe.description,
        method: recipe.method,
        ingredients: recipe.ingredients
      }
    }
  })
}

// Delete (Delete A Recipe)
export const deleteRecipe = (id, user) => {
  return axios({
    url: apiUrl + '/recipes/' + id,
    method: 'DELETE',
    headers: {
      'Authorization': `Token ${user.token}`
    }
  })
}
