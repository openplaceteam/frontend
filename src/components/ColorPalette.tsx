import React from 'react'
import { Box, VStack, HStack, IconButton, Text, Button } from '@chakra-ui/react'
import { FaTimes, FaPaintBrush, FaEraser } from 'react-icons/fa'

const COLORS = [
  '#000000', '#404040', '#808080', '#C0C0C0', '#FFFFFF',
  '#800000', '#FF0000', '#FF8000', '#FFFF00', '#C0FF80',
  '#00FF00', '#00FF80', '#00FFFF', '#0080FF', '#0000FF',
  '#8000FF', '#FF00FF', '#FF0080', '#FF8080', '#8B4513',
  '#A0522D', '#FFB347'
]

interface ColorPaletteProps {
  isOpen: boolean
  selectedColor: string
  onColorSelect: (color: string) => void
  onClose: () => void
  isEraserMode: boolean
  onToggleEraser: () => void
  charges: number
  maxCharges: number
  pixelCount: number
}

const ColorPalette: React.FC<ColorPaletteProps> = ({
  isOpen,
  selectedColor,
  onColorSelect,
  onClose,
  isEraserMode,
  onToggleEraser,
  charges,
  maxCharges,
  pixelCount
}) => {
  if (!isOpen) return null

  return (
    <Box
      position="fixed"
      bottom="90px"
      left="50%"
      transform="translateX(-50%)"
      bg="white"
      borderRadius="lg"
      p="4"
      boxShadow="xl"
      border="1px solid"
      borderColor="gray.200"
      zIndex={1001}
      minWidth="400px"
    >
      <VStack gap="4">
        <HStack justify="space-between" width="100%">
          <HStack gap="2">
            <FaPaintBrush />
            <Text fontWeight="bold">Paint pixel ({pixelCount} pixels, {charges} charges)</Text>
          </HStack>
          <HStack gap="2">
            <IconButton
              aria-label="Toggle eraser"
              size="sm"
              variant={isEraserMode ? "solid" : "outline"}
              colorScheme={isEraserMode ? "red" : "gray"}
              onClick={onToggleEraser}
            >
              <FaEraser />
            </IconButton>
            <IconButton
              aria-label="Close"
              size="sm"
              variant="ghost"
              onClick={onClose}
            >
              <FaTimes />
            </IconButton>
          </HStack>
        </HStack>

        <Box>
          <HStack wrap="wrap" gap="1" maxWidth="350px">
            {COLORS.map((color) => (
              <Box
                key={color}
                width="30px"
                height="30px"
                bg={color}
                border={selectedColor === color ? "3px solid blue" : "1px solid gray"}
                borderRadius="md"
                cursor="pointer"
                onClick={() => onColorSelect(color)}
                _hover={{ scale: 1.1 }}
                transition="transform 0.1s"
              />
            ))}
          </HStack>
        </Box>

        <Button
          colorScheme="blue"
          size="lg"
          borderRadius="full"
          width="100%"
        >
          <HStack gap="2">
            <FaPaintBrush />
            <Text>Paint {charges.toLocaleString()}/{maxCharges.toLocaleString()} (0:30)</Text>
          </HStack>
        </Button>
      </VStack>
    </Box>
  )
}

export default ColorPalette