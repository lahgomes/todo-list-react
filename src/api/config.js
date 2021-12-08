const connection = (path, config) => {
  const url = `http://localhost:3005/${path}`
  return fetch (url, config).then(resposta => resposta.json())
}

  export default connection
