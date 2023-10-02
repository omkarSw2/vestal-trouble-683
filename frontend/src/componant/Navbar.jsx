import { AddIcon, Icon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  useColorModeValue,
  useBreakpointValue,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  Center,
  MenuDivider,
  MenuItem,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  useDisclosure,
  chakra,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../redux/UserAuth/Action";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const data = useSelector((store) => store.authReducer);
  const dispatch = useDispatch();
//   console.log("data from navbar", data);
  const handleLogout = () => {
    onOpen();
  };
  const handleLogoutbtn = () => {
    console.log("Logout");
    dispatch(Logout());
  };
  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        justify={"space-between"}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}>
        <Flex flex={{ base: 1 }} justify={{ base: "start", md: "start" }}>
          <Link to="/">
            <Text
              textAlign={useBreakpointValue({
                base: "right",
                md: "left",
              })}
              fontFamily={"heading"}
              color={useColorModeValue("gray.800", "white")}>
              Logo
            </Text>
          </Link>
        </Flex>
        <Flex>
          <InputGroup display={{ base: "none", sm: "inline-flex" }}>
            <Input
              placeholder="Search"
              size={{ base: "sm", sm: "sm", md: "md" }}
            />
            <InputRightElement>
              <IconButton
                size={{ base: "sm", sm: "sm", md: "md" }}
                colorScheme="blue"
                aria-label="Search database"
                icon={<SearchIcon />}
              />
            </InputRightElement>
          </InputGroup>
        </Flex>
        <Stack
          flex={{ base: 1, md: 1 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}>
          {data.isAuth && (
            <>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}>
                  <Avatar
                    size={"sm"}
                    name={`${data.userInfo.first_Name} ${data.userInfo.last_Name}`}
                    src={data.userInfo.profile}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"xl"}
                      name={`${data.userInfo.first_Name} ${data.userInfo.last_Name}`}
                      src={data.userInfo.profile}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>{`${data.userInfo.first_Name} ${data.userInfo.last_Name}`}</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem onClick={handleLogout}>
                    <Flex alignItems="center">
                      <chakra.span
                        color="red"
                        display="flex"
                        alignItems="center" // Align items in a flex container
                        cursor="pointer">
                        <b> Logout</b>
                        <Icon as={FiLogOut} ml="2" />
                      </chakra.span>
                    </Flex>
                  </MenuItem>
                </MenuList>
              </Menu>

              {/* alert Box code start */}

              <AlertDialog
                isOpen={isOpen}
                onClose={onClose}
                isCentered
                motionPreset="slideInBottom">
                <AlertDialogOverlay />
                <AlertDialogContent>
                  <AlertDialogHeader fontSize="lg" fontWeight="bold">
                    Logout Confirmation
                  </AlertDialogHeader>

                  <AlertDialogBody>
                    Are you sure you want to log out?
                  </AlertDialogBody>

                  <AlertDialogFooter>
                    <Button colorScheme="red" onClick={onClose}>
                      Cancel
                    </Button>
                    <Button colorScheme="blue" ml={3} onClick={handleLogoutbtn}>
                      Logout
                    </Button>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              {/* alert Box code end */}

              <Button
                bgGradient="linear(to-r, green.100, green.500)"
                transition={{
                  background: {
                    duration: "2s",
                    delay: "0.5s",
                    timingFunction: "ease",
                  },
                }}
                _hover={{
                  bgGradient: "linear(to-r, green.500, green.100, green.100)",
                }}
                leftIcon={<AddIcon />}>
                Submit
              </Button>
            </>
          )}
          {!data.isAuth && (
            <>
              <Link to={"/login"}>
                <Button
                  size={"sm"}
                  fontSize={"xs"}
                  fontWeight={400}
                  variant={"link"}
                  href={"#"}>
                  Sign In
                </Button>
              </Link>
              <Link to="/register">
                <Button
                  size={"sm"}
                  fontSize={"xs"}
                  fontWeight={600}
                  color={"white"}
                  bg={"green.500"}
                  href={"#"}
                  _hover={{
                    bg: "green.600",
                  }}>
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </Stack>
      </Flex>
    </Box>
  );
}
