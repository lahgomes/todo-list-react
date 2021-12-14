import connection from './config'

const getItems = (userId) => connection(`users/${userId}/items`)
const addItem = (userId, item) => connection (`items`, {
  method: 'POST',
  
  body: JSON.stringify({
    userId,
    ...item
  })
})

const deleteItem = (id) => connection(`items/${id}` , {
  method: 'DELETE'
})

export {
  getItems,
  addItem,
  deleteItem
}
