import React from 'react'
import { Avatar, Box, Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Divider, Flex, Heading, IconButton, Stack, Text } from '@chakra-ui/react'
import { BsGenderFemale, BsGenderMale, BsThreeDotsVertical } from 'react-icons/bs'

const AdminUserCard = ({first_Name,last_Name,email,profile_Picture,gender,last_Login,onBlockUser,id}) => {
  const handleBlockButtonClick = () => {
    
    onBlockUser(id);
  };
  const formattedDate = last_Login.toLocaleString()
  return (
    <Card maxW='md' marginBottom={0}>
         <CardHeader>
    <Flex spacing='4'>
      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        <Avatar name={first_Name+" "+last_Name} src={profile_Picture} />

        <Box>
          <Heading size='sm'>{first_Name+" "+last_Name}</Heading>
          <Text>{email}</Text>
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
  <CardBody>
    <Stack mt='3' spacing='1'>
      <Heading size=''>{formattedDate}</Heading>
      <Text fontSize={"30px"} color={"#e75480"}>
       {gender=="Female"?<BsGenderFemale/>:<BsGenderMale/>}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardBody>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue' onClick={handleBlockButtonClick} >
        BlockUser
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        More Info
      </Button>
    </ButtonGroup>
  </CardBody>
</Card>
  )
}

export default AdminUserCard
