import React from 'react'
import {
  Box,
  VStack,
  HStack,
  Text,
  IconButton,
  Button,
  Badge
} from '@chakra-ui/react'
import { Avatar } from '@chakra-ui/react'
import {
  FaTimes,
  FaPaintBrush,
  FaArrowUp,
  FaTwitch,
  FaDiscord,
  FaReddit,
  FaSignOutAlt,
  FaGlobe,
  FaVolumeUp
} from 'react-icons/fa'

interface UserMenuProps {
  isOpen: boolean
  onClose: () => void
  user: {
    username: string
    level: number
    levelProgress: number
    pixelsPainted: number
    avatar: string
  }
}

const UserMenu: React.FC<UserMenuProps> = ({
  isOpen,
  onClose,
  user
}) => {
  if (!isOpen) return null

  return (
    <Box
      position="fixed"
      top="20px"
      right="20px"
      bg="white"
      borderRadius="xl"
      p="6"
      boxShadow="xl"
      border="1px solid"
      borderColor="gray.200"
      zIndex={1001}
      minWidth="300px"
    >
      <VStack gap="4" align="stretch">
        <HStack justify="space-between">
          <HStack gap="3">
            <Box position="relative">
              <Avatar.Root size="lg" bg="green.400">
                <Avatar.Image src={user.avatar} />
                <Avatar.Fallback>{user.username.charAt(0).toUpperCase()}</Avatar.Fallback>
              </Avatar.Root>
              <Badge
                position="absolute"
                bottom="-5px"
                right="-5px"
                bg="purple.500"
                color="white"
                borderRadius="full"
                fontSize="sm"
                px="2"
              >
                {user.level}
              </Badge>
            </Box>
            <VStack align="start" gap="1">
              <HStack>
                <Text fontWeight="bold" fontSize="lg">{user.username}</Text>
                <Text color="orange.500" fontWeight="bold">#2</Text>
                <Box bg="purple.100" borderRadius="md" px="2" py="1">
                  <Text fontSize="xs" color="purple.600">👑</Text>
                </Box>
              </HStack>
              <HStack gap="3" fontSize="sm" color="gray.600">
                <HStack gap="1">
                  <FaPaintBrush size="12" />
                  <Text>Pixels painted: <Text as="span" fontWeight="bold">{user.pixelsPainted}</Text></Text>
                </HStack>
              </HStack>
              <HStack gap="1" fontSize="sm" color="gray.600">
                <FaArrowUp size="12" />
                <Text>Level {user.level} ({user.levelProgress}%)</Text>
                <IconButton
                  aria-label="Level info"
                  size="xs"
                  variant="ghost"
                  borderRadius="full"
                >
                  <Text fontSize="xs">?</Text>
                </IconButton>
              </HStack>
            </VStack>
          </HStack>
          <IconButton
            aria-label="Close menu"
            size="sm"
            variant="ghost"
            onClick={onClose}
          >
            <FaTimes />
          </IconButton>
        </HStack>

        <VStack gap="2" align="stretch">
          <Text fontWeight="bold" mb="2">Menu</Text>

          <HStack justify="space-between" mb="2">
            <IconButton
              aria-label="Language"
              size="sm"
              variant="ghost"
              borderRadius="full"
            >
              <FaGlobe />
            </IconButton>
            <IconButton
              aria-label="Sound"
              size="sm"
              variant="ghost"
              borderRadius="full"
            >
              <FaVolumeUp />
            </IconButton>
          </HStack>

          <Button
            variant="ghost"
            justifyContent="flex-start"
            borderRadius="full"
            size="lg"
            bg="gray.100"
          >
            <HStack>
              <FaTwitch color="#9146FF" />
              <Text>Livestreams</Text>
            </HStack>
          </Button>

          <Button
            variant="ghost"
            justifyContent="flex-start"
            borderRadius="full"
            size="lg"
            bg="gray.100"
          >
            <HStack>
              <FaDiscord color="#5865F2" />
              <Text>Discord</Text>
            </HStack>
          </Button>

          <Button
            variant="ghost"
            justifyContent="flex-start"
            borderRadius="full"
            size="lg"
            bg="gray.100"
          >
            <HStack>
              <FaReddit color="#FF4500" />
              <Text>Reddit</Text>
            </HStack>
          </Button>

          <Button
            variant="ghost"
            justifyContent="flex-start"
            borderRadius="full"
            size="lg"
            bg="gray.100"
          >
            <HStack>
              <FaSignOutAlt />
              <Text>Log Out</Text>
            </HStack>
          </Button>
        </VStack>
      </VStack>
    </Box>
  )
}

export default UserMenu