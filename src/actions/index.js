export const setFavorite = payload => ({
  type: 'SET_FAVORITE',
  payload,
})

export const removeFavorite = payload => ({
  type: 'REMOVE_FAVORITE',
  payload,
})

export const logginRequest = payload => ({
  type: 'LOGIN_REQUEST',
  payload,
})