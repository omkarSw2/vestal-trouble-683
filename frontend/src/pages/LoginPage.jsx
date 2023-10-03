import {
  Button,
  //   Checkbox,
  //   Text,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Highlight,
  InputRightElement,
  InputGroup,
  FormErrorMessage,
  useToast,
  Checkbox,
  Text,
} from "@chakra-ui/react";

import loginimage from "../Assets/images/loginImage.svg";
import { Link, Navigate } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BeatLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../redux/UserAuth/Action";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  pass: Yup.string().required("Password is required"),
});

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const data = useSelector((store) => store.authReducer);
  const dispatch = useDispatch();

  const toast = useToast();

  // console.log("data form LoginPage", data);

  const formik = useFormik({
    initialValues: {
      email: "",
      pass: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setIsLoading(true); // Set loading to true during form submission
      try {
        await dispatch(LoginUser(values))
          .then((data) => {
            // console.log("Data from Login .then", data.message);
            toast({
              title: "Login Successful",
              description: `${data.message} You have successfully logged in.`,
              status: "success",
              position: "top",
              duration: 5000,
              isClosable: true,
            });
          })
          .catch((err) => {
            console.log(err);
            toast({
              title: "Login Error",
              description: `${err.message} .`,
              status: "error",
              position: "top",
              duration: 5000,
              isClosable: true,
            });
          });

        resetForm();
      } catch (error) {
        console.error("Login error:", error);
        // Handle errors, if needed
      } finally {
        setIsLoading(false); // Set loading back to false when submission is complete
      }
    },
  });

  if (data.isAuth) {
    return <Navigate to={"/"} replace={true} />;
  }
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex flex={1} display={{ base: "none", lg: "inline-flex" }}>
        <Image alt={"Login Image"} objectFit={"none"} src={loginimage} />
      </Flex>
      <Flex p={8} flex={1} align={"center"} justify={"center"} bg={"gray.100"}>
        <Stack spacing={4} w={"full"} maxW={{ base: "xs", lg: "md" }}>
          <Heading fontSize={"2xl"}>Sign in to your account</Heading>
          <FormControl
            id="email"
            isInvalid={formik.touched.email && formik.errors.email}>
            <FormLabel>Email address</FormLabel>
            <div style={{ position: "relative", minHeight: "70px" }}>
              <Input
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="email"
                bg={"white.100"}
                size={{ base: "sm", sm: "sm", md: "md" }}
              />{" "}
              <FormErrorMessage>
                <b>{formik.errors.email}</b>
              </FormErrorMessage>
            </div>
          </FormControl>
          <FormControl
            id="password"
            isInvalid={formik.touched.pass && formik.errors.pass}>
            <FormLabel>Password</FormLabel>
            <div style={{ position: "relative", minHeight: "70px" }}>
              <InputGroup>
                <Input
                  name="pass"
                  value={formik.values.pass}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type={showPassword ? "text" : "password"}
                  bg={"white.100"}
                  size={{ base: "sm", sm: "sm", md: "md" }}
                />{" "}
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>
                <b>{formik.errors.pass}</b>
              </FormErrorMessage>
            </div>
          </FormControl>
          <Stack
            direction={{ base: "column", sm: "row" }}
            align={"start"}
            justify={"space-between"}>
            <Checkbox bg={"white.100"} defaultChecked>
              Remember me
            </Checkbox>
            <Link to={"/login/forgotpass"}>
              <Text color={"blue.500"}>Forgot password?</Text>
            </Link>
          </Stack>
          <Stack spacing={6} pt={6}>
            <Button
              isLoading={isLoading}
              spinner={<BeatLoader size={8} color="white" />}
              onClick={formik.handleSubmit}
              bgGradient="linear(to-r, green.100, green.500)"
              _hover={{
                bgGradient: "linear(to-r, green.500, green.100, green.100)",
              }}
              variant={"solid"}
              size={{ base: "sm", sm: "sm", md: "md" }}
              type="submit" // Important for triggering form submission
            >
              Sign in
            </Button>
          </Stack>
          <Stack pt={6}>
            <Link to="/register">
              <Highlight
                query="Register"
                styles={{ px: "1", py: "1", color: "blue.600" }}>
                New User? Register Here
              </Highlight>
            </Link>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}
