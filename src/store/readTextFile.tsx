// written by ChatGPT, can be confidently used to read .txt files
async function readTextFile(filePath: string) {
  try {
    const response = await fetch(filePath)
    if (!response.ok) {
      throw new Error(
        `Failed to fetch ${filePath}: ${response.status} ${response.statusText}`
      )
    }
    return await response.text()
  } catch (error) {
    console.error("Error reading file:", error)
    throw error
  }
}

export default readTextFile
