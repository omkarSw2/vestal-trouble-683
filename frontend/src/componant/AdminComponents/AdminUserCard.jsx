import React from 'react'
import { Avatar, Box, Button, ButtonGroup, Card, CardFooter, CardHeader, Divider, Flex, Heading, IconButton, Text } from '@chakra-ui/react'
import { BsThreeDotsVertical } from 'react-icons/bs'

const AdminUserCard = () => {
  return (
    <Card maxW='md'>
         <CardHeader>
    <Flex spacing='4'>
      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

        <Box>
          <Heading size='sm'>Segun Adebayo</Heading>
          <Text>email address</Text>
        </Box>
      </Flex>
      <IconButton
        variant='ghost'
        colorScheme='gray'
        aria-label='See menu'
        icon={<BsThreeDotsVertical />}
      />
    </Flex>
  </CardHeader>
  {/*<CardBody>
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>*/}
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        BlockUser
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        More Info
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
  )
}

export default AdminUserCard
