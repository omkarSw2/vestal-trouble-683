"use client";

import {
  Button,
  Flex,
  Text,
  FormControl,
  Heading,
  Input,
  Stack,
  Image,
  useColorModeValue,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import loginForgotImage from "../Assets/images/loginForgotImage.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { BeatLoader } from "react-spinners";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const initialValues = {
  email: "",
};

export default function ForgotPasswordForm() {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setIsLoading(true); // Set loading to true during form submission

      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Assuming the login is successful
        console.log(values);

        // Display a success toast or perform other actions
        toast({
          title: "Reset link sent",
          description: `We sent a reset link to ${values.email}.`,
          status: "info",
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
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex flex={1} display={{ base: "none", lg: "inline-flex" }}>
        <Image
          alt={"Login Frogot Image"}
          width={{ lg: "60%", xl: "80%" }}
          mx="auto" // Center the image horizontally
          display="block"
          src={loginForgotImage}
        />
      </Flex>
      <Flex
        boxShadow="inner"
        borderRadius={"lg"}
        p={8}
        flex={1}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}>
        <Stack
          spacing={4}
          w={"full"}
          maxW={"md"}
          bg={useColorModeValue("white", "gray.700")}
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
          my={12}>
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
            Forgot your password?
          </Heading>
          <Text
            fontSize={{ base: "sm", sm: "md" }}
            color={useColorModeValue("gray.800", "gray.400")}>
            You&apos;ll get an email with a reset link
          </Text>
          <FormControl
            id="email"
            isInvalid={formik.touched.email && formik.errors.email}>
            <Input
              placeholder="Enter Email"
              _placeholder={{ color: "gray.500" }}
              type="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && (
              <FormErrorMessage>
                <b>{formik.errors.email}</b>
              </FormErrorMessage>
            )}
          </FormControl>

          <Stack spacing={6}>
            <Button
              isLoading={isLoading}
              spinner={<BeatLoader size={8} color="white" />}
              onClick={formik.handleSubmit}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}>
              Request Reset
            </Button>
          </Stack>
        </Stack>
      </Flex>
      ;
    </Stack>
  );
}
