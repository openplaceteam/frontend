import React from 'react'
import { Button, HStack, Text } from '@chakra-ui/react'
import { FaPaintBrush } from 'react-icons/fa'

interface PaintButtonProps {
  charges: number
  maxCharges: number
  onClick: () => void
  isDrawing: boolean
}

const PaintButton: React.FC<PaintButtonProps> = ({
  charges,
  maxCharges,
  onClick
}) => {
  return (
    <Button
      position="fixed"
      bottom="20px"
      left="50%"
      transform="translateX(-50%)"
      bg="blue.500"
      color="white"
      size="lg"
      borderRadius="full"
      px="6"
      py="3"
      onClick={onClick}
      _hover={{ bg: 'blue.600' }}
      _active={{ bg: 'blue.700' }}
      boxShadow="lg"
      zIndex={1000}
    >
      <HStack gap="2">
        <FaPaintBrush />
        <Text fontWeight="bold">
          Paint {charges.toLocaleString()}/{maxCharges.toLocaleString()}
        </Text>
      </HStack>
    </Button>
  )
}

export default PaintButton