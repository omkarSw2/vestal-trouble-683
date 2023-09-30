"use client";

import {
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  Stack,
  Image,
  useColorModeValue,
  FormLabel,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import PasswordResetImage from "../Assets/images/resetImage.svg";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BeatLoader } from "react-spinners";
import { useNavigate, useParams } from "react-router-dom";
import { ResetPass } from "../redux/UserAuth/Action";
import { useDispatch } from "react-redux";

const validationSchema = Yup.object().shape({
  // setting password with all needed charecters and leters
  pass: Yup.string()
    .test(
      "uppercase",
      "Password must contain at least one uppercase letter",
      (value) => {
        return /[A-Z]/.test(value);
      }
    )
    .test(
      "lowercase",
      "Password must contain at least one lowercase letter",
      (value) => {
        return /[a-z]/.test(value);
      }
    )
    .test("number", "Password must contain at least one number", (value) => {
      return /[0-9]/.test(value);
    })
    .test(
      "specialChar",
      "Password must contain at least one special character",
      (value) => {
        return /[@$!%*?&]/.test(value);
      }
    )
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),

  //  comparing the pass with pass2
  pass2: Yup.string()
    .oneOf([Yup.ref("pass"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export default function ResetPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const { token } = useParams();
  const toast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // console.log("token form reset pass", token);

  const formik = useFormik({
    initialValues: {
      pass: "",
      pass2: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setIsLoading(true);

      try {
        await dispatch(ResetPass({ token: token, value: values }))
          .then((data) => {
            // console.log("Data from Login .then", data.message);
            navigate("/login", { replace: true });
            toast({
              title: "Password Reset Successful",
              description: "Your password has been reset successfully.",
              status: "success",
              position: "top",
              duration: 5000,
              isClosable: true,
            });
          })
          .catch((err) => {
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
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex flex={1} display={{ base: "none", lg: "inline-flex" }}>
        <Image
          alt={"Login Frogot Image"}
          width={{ lg: "50%", xl: "60%" }}
          mx="auto" // Center the image horizontally
          display="block"
          src={PasswordResetImage}
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
            Enter new password
          </Heading>
          <FormControl
            id="pass"
            isInvalid={formik.touched.pass && formik.errors.pass}>
            <FormLabel>Password</FormLabel>
            <div style={{ position: "relative", minHeight: "70px" }}>
              <Input
                name="pass"
                value={formik.values.pass}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="password"
                bg={"white.100"}
                size={{ base: "sm", sm: "sm", md: "md" }}
              />{" "}
              <FormErrorMessage>
                <b>{formik.errors.pass}</b>
              </FormErrorMessage>
            </div>
          </FormControl>
          <FormControl
            id="pass2"
            isInvalid={formik.touched.pass2 && formik.errors.pass2}>
            <FormLabel>Password</FormLabel>
            <div style={{ position: "relative", minHeight: "70px" }}>
              <Input
                name="pass2"
                value={formik.values.pass2}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="password"
                bg={"white.100"}
                size={{ base: "sm", sm: "sm", md: "md" }}
              />{" "}
              <FormErrorMessage
              // style={{
              //   whiteSpace: "nowrap", // Prevent text from wrapping
              //   overflow: "hidden", // Hide overflowing text
              //   textOverflow: "ellipsis", // Display ellipsis for overflow
              // }}
              >
                <b>{formik.errors.pass2}</b>
              </FormErrorMessage>
            </div>
          </FormControl>
          <Stack spacing={6}>
            <Button
              isLoading={isLoading}
              spinner={<BeatLoader size={8} color="white" />}
              onClick={formik.handleSubmit}
              colorScheme={"blue"}
              variant={"solid"}
              size={{ base: "sm", sm: "sm", md: "md" }}
              type="submit" // Important for triggering form submission
            >
              Submit
            </Button>
          </Stack>
        </Stack>
      </Flex>
      ;
    </Stack>
  );
}
