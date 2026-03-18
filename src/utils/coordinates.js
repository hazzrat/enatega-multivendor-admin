/**
 * Transform polygon coordinates from string format
 * @param {Array} coordinate - Polygon coordinate array
 * @returns {Array<{lat: number, lng: number}>} Array of coordinate objects
 */
export function transformPolygon(coordinate) {
  if (!coordinate || !Array.isArray(coordinate)) {
    return []
  }
  return coordinate.slice(0, coordinate.length - 1).map(item => {
    const lat = parseFloat(item[1])
    const lng = parseFloat(item[0])
    if (isNaN(lat) || isNaN(lng)) {
      return null
    }
    return { lat, lng }
  }).filter(Boolean)
}

/**
 * Transform path coordinates
 * @param {Array} path - Array of coordinate objects
 * @returns {Array<Array<number>>} Array of [lng, lat] pairs
 */
export function transformPath(path) {
  if (!path || !Array.isArray(path)) {
    return []
  }
  const geometry = path.map(coordinates => {
    if (!coordinates) return null
    const lng = parseFloat(coordinates.lng)
    const lat = parseFloat(coordinates.lat)
    if (isNaN(lng) || isNaN(lat)) {
      return null
    }
    return [lng, lat]
  }).filter(Boolean)
  if (geometry.length === 0) {
    return []
  }
  geometry.push(geometry[0])
  return geometry
}
