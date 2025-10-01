// Coordinate conversion utilities based on Wplace spec

export const TILE_COUNT = 2048 // Total tiles horizontally and vertically
export const TILE_SIZE = 1000 // Each tile is 1000x1000 pixels
export const ZOOM_LEVEL = 11 // As per spec: log2(2048) = 11

export interface TileCoords {
  tileX: number
  tileY: number
  x: number // Pixel coordinate within tile (0-999)
  y: number // Pixel coordinate within tile (0-999)
}

export interface LatLng {
  lat: number
  lng: number
}

/**
 * Convert latitude/longitude to tile and pixel coordinates
 */
export function latLngToTileCoords(lat: number, lng: number): TileCoords {
  const n = Math.pow(2, ZOOM_LEVEL)

  // Convert to normalized tile coordinates using Web Mercator projection
  const tileXFloat = (lng + 180) / 360 * n
  const latRad = lat * Math.PI / 180
  const tileYFloat = (1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2 * n

  // Get tile indices
  const tileX = Math.floor(tileXFloat)
  const tileY = Math.floor(tileYFloat)

  // Get pixel coordinates within the tile (0-999)
  const x = Math.floor((tileXFloat - tileX) * TILE_SIZE)
  const y = Math.floor((tileYFloat - tileY) * TILE_SIZE)

  return {
    tileX: Math.max(0, Math.min(TILE_COUNT - 1, tileX)),
    tileY: Math.max(0, Math.min(TILE_COUNT - 1, tileY)),
    x: Math.max(0, Math.min(TILE_SIZE - 1, x)),
    y: Math.max(0, Math.min(TILE_SIZE - 1, y))
  }
}

/**
 * Convert tile and pixel coordinates back to latitude/longitude
 * Returns the CENTER point of the pixel square
 */
export function tileCoordsToLatLng(coords: TileCoords): LatLng {
  const n = Math.pow(2, ZOOM_LEVEL)

  // Convert to floating point tile coordinates, adding 0.5 to get center of pixel
  const tileXFloat = coords.tileX + ((coords.x + 0.5) / TILE_SIZE)
  const tileYFloat = coords.tileY + ((coords.y + 0.5) / TILE_SIZE)

  // Convert to lat/lng using Web Mercator inverse projection
  const lng = (tileXFloat / n * 360.0) - 180.0
  const latRad = Math.atan(Math.sinh(Math.PI * (1 - 2 * tileYFloat / n)))
  const lat = latRad * 180 / Math.PI

  return { lat, lng }
}

/**
 * Snap a lat/lng coordinate to the nearest pixel grid
 */
export function snapToPixelGrid(lat: number, lng: number): LatLng {
  const tileCoords = latLngToTileCoords(lat, lng)
  return tileCoordsToLatLng(tileCoords)
}

/**
 * Generate a unique pixel ID based on tile and pixel coordinates
 */
export function getPixelId(coords: TileCoords): string {
  return `${coords.tileX}-${coords.tileY}-${coords.x}-${coords.y}`
}

/**
 * Get the lat/lng bounds of a pixel square for rendering
 */
export function getPixelBounds(coords: TileCoords): {
  topLeft: LatLng
  topRight: LatLng
  bottomLeft: LatLng
  bottomRight: LatLng
} {
  const n = Math.pow(2, ZOOM_LEVEL)

  // Get the corners of the pixel (not center)
  const tileXLeft = coords.tileX + (coords.x / TILE_SIZE)
  const tileXRight = coords.tileX + ((coords.x + 1) / TILE_SIZE)
  const tileYTop = coords.tileY + (coords.y / TILE_SIZE)
  const tileYBottom = coords.tileY + ((coords.y + 1) / TILE_SIZE)

  // Convert to lat/lng
  const lngLeft = (tileXLeft / n * 360.0) - 180.0
  const lngRight = (tileXRight / n * 360.0) - 180.0

  const latTopRad = Math.atan(Math.sinh(Math.PI * (1 - 2 * tileYTop / n)))
  const latBottomRad = Math.atan(Math.sinh(Math.PI * (1 - 2 * tileYBottom / n)))

  const latTop = latTopRad * 180 / Math.PI
  const latBottom = latBottomRad * 180 / Math.PI

  return {
    topLeft: { lat: latTop, lng: lngLeft },
    topRight: { lat: latTop, lng: lngRight },
    bottomLeft: { lat: latBottom, lng: lngLeft },
    bottomRight: { lat: latBottom, lng: lngRight }
  }
}