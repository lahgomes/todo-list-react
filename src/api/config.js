const connection = (url, config = {}) => {
  const url = `http://localhost:3005/${patch}`


  return fetch(url, {
    ...config,
    headers: {
      ...config?.headers,
      'Content-Type': 'application/json'
    },

  }).then(resposta => resposta.json())    
    
}

const getItems = () => {}

const addItem = () => {}

const editItem = () => {}

const deleteItem = () => {}

export default connection
