import React from 'react'
import AdminUserCard from './AdminUserCard'
import { Box, Card, Center, Container,HStack,Heading, VStack, border } from '@chakra-ui/react'

const AdminUsers = () => {
  return (
    <Box width="100%" minHeight="100vh" display="flex" flexDirection="column" alignItems="center">
    <Heading marginY="20px">All Users</Heading>
    <Container width="100%" maxWidth="100%">
      <HStack spacing="20px" justify="center">
        <AdminUserCard />
        <AdminUserCard />
        <AdminUserCard />
        {/* Add more AdminUserCard components as needed */}
      </HStack>
    </Container>
  </Box>
  )
}

export default AdminUsers
