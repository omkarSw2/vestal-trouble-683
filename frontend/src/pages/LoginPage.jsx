"use client";

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
} from "@chakra-ui/react";

import loginimage from "../Assets/images/loginImage.svg";
import { Link } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BeatLoader } from "react-spinners";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  pass: Yup.string().required("Password is required"),
});

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  const formik = useFormik({
    initialValues: {
      email: "",
      pass: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setIsLoading(true); // Set loading to true during form submission

      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Assuming the login is successful
        console.log(values);

        // Display a success toast or perform other actions
        toast({
          title: "Login Successful",
          description: `${values.email} You have successfully logged in.`,
          status: "success",
          position: "top",
          duration: 5000,
          isClosable: true,
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

  //   const toast = useToast();

  // useEffect(() => {
  //   // console.log(datas);
  // }, [datas]);
  //   const handleLogin = () => {
  //     let obj = {
  //       email,
  //       pass,
  //     };
  //     console.log(obj);
  // // console.log("from Login.jsx", obj);

  //   .then(() => {
  //     // Display toast or perform other actions on successful login
  //     // console.log(datas);
  //     toast({
  //       title: "Login Successful",
  //       description: "You have successfully logged in.",
  //       status: "success",
  //       position: "top",
  //       duration: 5000,
  //       isClosable: true,
  //     });
  //   })
  //   .catch((error) => {
  //     // Handle errors, if needed
  //     console.error("Login error:", error);
  //     // Display an error toast or perform other error handling actions
  //     toast({
  //       title: "Login Failed",
  //       description: "There was an error during login.",
  //       status: "error",
  //       position: "top",
  //       duration: 5000,
  //       isClosable: true,
  //     });
  //   });
  //   };

  //   if (data.isAuth) {
  //     return <Navigate to={"/"} />;
  //   }

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
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
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
              <FormErrorMessage>{formik.errors.pass}</FormErrorMessage>
            </div>
          </FormControl>
          <Stack spacing={6} pt={6}>
            <Button
              isLoading={isLoading}
              spinner={<BeatLoader size={8} color="white" />}
              onClick={formik.handleSubmit}
              colorScheme={"blue"}
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
