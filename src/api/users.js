import connection from "./config";

const getUsers = () => connection('users')
    
const addUser = (name) => connection('users', {

  headers: {
     'Content-Type': 'application/json'
  },
  method: 'POST',
  body: JSON.stringify({ name })  
})

export {
  getUsers,
  addUser
}

