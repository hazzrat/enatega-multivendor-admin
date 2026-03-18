/**
 * Transform string by adding newline after x spaces
 * @param {string} input - The input string to transform
 * @param {number} spaces - Number of spaces before adding newline (default: 3)
 * @returns {string} The transformed string with newlines
 */
const transformToNewline = (input, spaces = 3) => {
  // Validate input
  if (typeof input !== 'string' || !input) {
    return ''
  }
  let spaceCount = 0
  /** @type {string[]} */
  const result = []
  const splittedDesc = input.split('')
  for (let i = 0; i < splittedDesc.length; i++) {
    result.push(splittedDesc[i])
    if (splittedDesc[i] === ' ') {
      ++spaceCount
      if (spaceCount % spaces === 0 && spaceCount !== 0) result.push('\n')
    }
  }
  return result.join('')
}

export { transformToNewline }
