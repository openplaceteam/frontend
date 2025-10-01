import { useState, useEffect, useCallback } from 'react'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import MapComponent from './components/Map'
import PaintButton from './components/PaintButton'
import ColorPalette from './components/ColorPalette'
import UserAvatar from './components/UserAvatar'
import UserMenu from './components/UserMenu'
import { latLngToTileCoords, getPixelId, TileCoords } from './utils/coordinates'

interface Pixel {
  id: string
  tileCoords: TileCoords
  color: string
}

function App() {
  const [isPaintOpen, setIsPaintOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [selectedColor, setSelectedColor] = useState('#FF0000')
  const [isEraserMode, setIsEraserMode] = useState(false)
  const [charges, setCharges] = useState(99999999)
  const [maxCharges] = useState(99999999)
  const [pixels, setPixels] = useState<Pixel[]>([])
  const [isSpacePressed, setIsSpacePressed] = useState(false)

  // Clear all pending pixels and refund charges
  const clearPendingPixels = () => {
    const pixelCount = pixels.length
    setPixels([])
    setCharges(prev => prev + pixelCount)
  }

  // Handle closing paint drawer
  const handleClosePaint = () => {
    clearPendingPixels()
    setIsPaintOpen(false)
  }

  const mockUser = {
    username: 'kirb',
    level: 3,
    levelProgress: 0,
    pixelsPainted: 704,
    avatar: ''
  }

  // Handle spacebar for rapid-fire mode
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Space' && isPaintOpen) {
        event.preventDefault()
        setIsSpacePressed(true)
      }
      if (event.code === 'KeyE') {
        setIsEraserMode(prev => !prev)
      }
    }

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        event.preventDefault()
        setIsSpacePressed(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [isPaintOpen])

  const drawPixel = useCallback((lng: number, lat: number) => {
    if (!isPaintOpen || charges <= 0) return

    // Convert to tile coordinates to snap to pixel grid
    const tileCoords = latLngToTileCoords(lat, lng)
    const pixelId = getPixelId(tileCoords)

    // Check if pixel already exists at this exact grid location
    const existingPixelIndex = pixels.findIndex(p => p.id === pixelId)

    if (isEraserMode) {
      if (existingPixelIndex >= 0) {
        setPixels(prev => prev.filter((_, index) => index !== existingPixelIndex))
        setCharges(prev => prev + 1) // Refund charge
      }
    } else {
      // Always allow drawing - either create new or overwrite existing
      const newPixel: Pixel = {
        id: pixelId,
        tileCoords,
        color: selectedColor
      }

      if (existingPixelIndex >= 0) {
        // Overwrite existing pixel without using additional charge
        setPixels(prev => prev.map((pixel, index) =>
          index === existingPixelIndex ? newPixel : pixel
        ))
      } else {
        // Create new pixel and use charge
        setPixels(prev => [...prev, newPixel])
        setCharges(prev => prev - 1)
      }
    }
  }, [isPaintOpen, charges, pixels, isEraserMode, selectedColor])

  const handleMapClick = (event: any) => {
    const { lng, lat } = event.lngLat
    drawPixel(lng, lat)
  }

  const handleMapHover = (event: any) => {
    if (isSpacePressed && isPaintOpen) {
      const { lng, lat } = event.lngLat
      drawPixel(lng, lat)
    }
  }

  return (
    <ChakraProvider value={defaultSystem}>
      <Box>
        <MapComponent
          onMapClick={handleMapClick}
          onMapHover={handleMapHover}
          pixels={pixels}
          isDrawing={isPaintOpen}
        />

        <UserAvatar
          user={mockUser}
          onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
        />

        <UserMenu
          isOpen={isUserMenuOpen}
          onClose={() => setIsUserMenuOpen(false)}
          user={mockUser}
        />

        <PaintButton
          charges={charges}
          maxCharges={maxCharges}
          onClick={() => setIsPaintOpen(!isPaintOpen)}
          isDrawing={isPaintOpen}
        />

        <ColorPalette
          isOpen={isPaintOpen}
          selectedColor={selectedColor}
          onColorSelect={setSelectedColor}
          onClose={handleClosePaint}
          isEraserMode={isEraserMode}
          onToggleEraser={() => setIsEraserMode(!isEraserMode)}
          charges={charges}
          maxCharges={maxCharges}
          pixelCount={pixels.length}
        />
      </Box>
    </ChakraProvider>
  )
}

export default App