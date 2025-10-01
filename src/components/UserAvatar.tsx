import React from 'react'
import { Avatar } from '@chakra-ui/react'
import { Badge, Box } from '@chakra-ui/react'

interface UserAvatarProps {
  user: {
    username: string
    level: number
    avatar: string
  }
  onClick: () => void
}

const UserAvatar: React.FC<UserAvatarProps> = ({ user, onClick }) => {
  return (
    <Box
      position="fixed"
      top="20px"
      right="20px"
      zIndex={999}
      cursor="pointer"
      onClick={onClick}
    >
      <Box position="relative">
        <Avatar.Root
          size="lg"
          bg="green.400"
          border="3px solid white"
          boxShadow="lg"
          _hover={{ transform: 'scale(1.05)' }}
          transition="transform 0.2s"
        >
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
          border="2px solid white"
        >
          {user.level}
        </Badge>
      </Box>
    </Box>
  )
}

export default UserAvatar