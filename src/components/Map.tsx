import React, { useRef, useState, useEffect } from 'react'
import { Map, MapRef, Source, Layer } from 'react-map-gl/maplibre'
import { Box } from '@chakra-ui/react'
import 'maplibre-gl/dist/maplibre-gl.css'
import { TileCoords, getPixelBounds, latLngToTileCoords } from '../utils/coordinates'

interface Pixel {
  id: string
  tileCoords: TileCoords
  color: string
}

interface MapComponentProps {
  onMapClick?: (event: any) => void
  onMapHover?: (event: any) => void
  pixels: Pixel[]
  isDrawing: boolean
}

const MapComponent: React.FC<MapComponentProps> = ({
  onMapClick,
  onMapHover,
  pixels,
  isDrawing
}) => {
  const mapRef = useRef<MapRef>(null)
  const [viewState, setViewState] = useState({
    longitude: 138.6007,
    latitude: -34.9285,
    zoom: 11
  })
  const [hoverCoords, setHoverCoords] = useState<TileCoords | null>(null)

  useEffect(() => {
    const map = mapRef.current?.getMap()
    if (map) {
      map.on('load', () => {
        // Disable 3D buildings and unwanted labels
        const style = map.getStyle()
        if (style.layers) {
          style.layers.forEach((layer) => {
            // Disable 3D buildings
            if (layer.type === 'fill-extrusion') {
              map.setLayoutProperty(layer.id, 'visibility', 'none')
            }

            // Disable landmark and POI labels - keep only geographic labels
            if (layer.type === 'symbol' && layer.layout && layer.layout['text-field']) {
              const layerId = layer.id

              // Hide specific landmark/POI layers but keep streets, places, etc.
              if (layerId.includes('poi') ||
                  layerId.includes('landmark') ||
                  layerId.includes('transit') ||
                  layerId.includes('business') ||
                  layerId.includes('tourism') ||
                  layerId.includes('amenity')) {
                map.setLayoutProperty(layerId, 'visibility', 'none')
              }
            }
          })
        }
      })
    }
  }, [])

  // Handle mouse movement for hover preview
  const handleMouseMove = (event: any) => {
    if (isDrawing) {
      const { lng, lat } = event.lngLat
      const coords = latLngToTileCoords(lat, lng)
      setHoverCoords(coords)
    } else {
      setHoverCoords(null)
    }

    if (onMapHover) {
      onMapHover(event)
    }
  }

  // Create GeoJSON for pixels as squares
  const pixelGeoJSON = {
    type: 'FeatureCollection' as const,
    features: pixels.map(pixel => {
      const bounds = getPixelBounds(pixel.tileCoords)

      const coordinates = [[
        [bounds.topLeft.lng, bounds.topLeft.lat],
        [bounds.topRight.lng, bounds.topRight.lat],
        [bounds.bottomRight.lng, bounds.bottomRight.lat],
        [bounds.bottomLeft.lng, bounds.bottomLeft.lat],
        [bounds.topLeft.lng, bounds.topLeft.lat]
      ]]

      return {
        type: 'Feature' as const,
        geometry: {
          type: 'Polygon' as const,
          coordinates
        },
        properties: {
          id: pixel.id,
          color: pixel.color
        }
      }
    })
  }

  // Create GeoJSON for hover preview
  const hoverGeoJSON = hoverCoords ? {
    type: 'FeatureCollection' as const,
    features: [{
      type: 'Feature' as const,
      geometry: {
        type: 'Polygon' as const,
        coordinates: [(() => {
          const bounds = getPixelBounds(hoverCoords)
          return [
            [bounds.topLeft.lng, bounds.topLeft.lat],
            [bounds.topRight.lng, bounds.topRight.lat],
            [bounds.bottomRight.lng, bounds.bottomRight.lat],
            [bounds.bottomLeft.lng, bounds.bottomLeft.lat],
            [bounds.topLeft.lng, bounds.topLeft.lat]
          ]
        })()]
      },
      properties: {}
    }]
  } : { type: 'FeatureCollection' as const, features: [] }

  return (
    <Box width="100vw" height="100vh" position="relative">
      <Map
        ref={mapRef}
        {...viewState}
        onMove={evt => setViewState(evt.viewState)}
        style={{ width: '100%', height: '100%' }}
        mapStyle="https://tiles.openfreemap.org/styles/liberty"
        onClick={onMapClick}
        onMouseMove={handleMouseMove}
        cursor="crosshair"
        doubleClickZoom={false}
        interactiveLayerIds={[]}
      >
        <Source id="pixels" type="geojson" data={pixelGeoJSON}>
          <Layer
            id="pixel-squares"
            type="fill"
            paint={{
              'fill-color': ['get', 'color'],
              'fill-opacity': 1
            }}
          />
          <Layer
            id="pixel-borders"
            type="line"
            paint={{
              'line-color': '#000000',
              'line-width': 0.5,
              'line-opacity': 0.3
            }}
          />
        </Source>

        <Source id="hover" type="geojson" data={hoverGeoJSON}>
          <Layer
            id="hover-border"
            type="line"
            paint={{
              'line-color': '#ffffff',
              'line-width': 2,
              'line-opacity': 0.8
            }}
          />
        </Source>
      </Map>
    </Box>
  )
}

export default MapComponent