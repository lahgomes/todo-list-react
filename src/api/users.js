import connection from "./config";

const getUsers = () => connection('users')

const addUser = () => connection('users', {

})

export {
  getUsers,
  addUser
}

