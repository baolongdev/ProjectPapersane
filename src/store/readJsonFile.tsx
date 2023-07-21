function readJsonFile(filePath : string) {
  return fetch(filePath)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error reading JSON file: ${response.status} ${response.statusText}`)
      }
      return response.json()
    })
    .catch((error) => {
      throw new Error(`Error reading JSON file: ${error.message}`)
    })
}

export default readJsonFile
