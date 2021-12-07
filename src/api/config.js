const connection = (url, config = {}) => {
  const url = 'http://http://localhost:3005/${patch}'


  return fetch(url, config).then(resposta => resposta.json())
}

export default connection
