import connection from './config'

  const getItems = (userId) => connection(`users/${userId}/items`)

export {
  getItems
}
