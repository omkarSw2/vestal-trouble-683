import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  InputGroup,
  InputRightElement,
  HStack,
  Box,
  Highlight,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import registerImage from "../Assets/images/registerImage.svg";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { BeatLoader } from "react-spinners";

const initialState = {
  firstName: "",
  lastName: "",
  phone: "",
  date: "",
  email: "",
  pass: "",
};

// scema validation for form
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  phone: Yup.number().required("Phone Number is required"),
  date: Yup.date().required("Date of Birth is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
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
});

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      // Your form submission logic here
      setIsLoading(true);

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

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex flex={1} display={{ base: "none", lg: "inline-flex" }}>
        <Image
          alt={"Login Image"}
          width={{ lg: "80%", xl: "80%" }}
          mx="auto" // Center the image horizontally
          display="block"
          src={registerImage}
        />
      </Flex>
      <Flex
        p={5}
        flex={1}
        align={"baseline"}
        justify={"center"}
        bg={"gray.100"}>
        <Stack spacing={4} w={"full"} maxW={{ base: "xs", lg: "md" }}>
          <Heading fontSize={"2xl"}>Sign up to your account</Heading>
          <HStack>
            <Box>
              <FormControl
                id="firstName"
                isRequired
                isInvalid={formik.touched.firstName && formik.errors.firstName}>
                <FormLabel>First Name</FormLabel>
                <div
                  style={{
                    position: "relative",
                    minHeight: "70px",
                  }}>
                  <Input
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="First Name"
                    type="text"
                    bg={"white.100"}
                    size={{ base: "sm", md: "md" }}
                  />
                  <FormErrorMessage>
                    <b>{formik.errors.firstName}</b>
                  </FormErrorMessage>
                </div>
              </FormControl>
            </Box>
            <Box>
              <FormControl
                id="lastName"
                isRequired
                isInvalid={formik.touched.lastName && formik.errors.lastName}>
                <FormLabel>Last Name</FormLabel>{" "}
                <div style={{ position: "relative", minHeight: "70px" }}>
                  <Input
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Last Name"
                    type="text"
                    bg={"white.100"}
                    size={{ base: "sm", md: "md" }}
                  />
                  <FormErrorMessage>
                    <b>{formik.errors.lastName}</b>
                  </FormErrorMessage>
                </div>
              </FormControl>
            </Box>
          </HStack>
          <HStack>
            <FormControl
              id="phone"
              isRequired
              isInvalid={formik.touched.phone && formik.errors.phone}>
              <FormLabel>Phone</FormLabel>
              <div style={{ position: "relative", minHeight: "70px" }}>
                <Input
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Number"
                  type="number"
                  bg={"white.100"}
                  size={{ base: "sm", md: "md" }}
                />
                <FormErrorMessage>
                  <b>{formik.errors.phone}</b>
                </FormErrorMessage>
              </div>
            </FormControl>
            <FormControl
              id="date"
              isRequired
              isInvalid={formik.touched.date && formik.errors.date}>
              <FormLabel>Date Of Birth</FormLabel>
              <div style={{ position: "relative", minHeight: "70px" }}>
                <Input
                  name="date"
                  value={formik.values.date}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="date"
                  bg={"white.100"}
                  size={{ base: "sm", md: "md" }}
                />{" "}
                <FormErrorMessage>
                  <b>{formik.errors.date}</b>
                </FormErrorMessage>
              </div>
            </FormControl>
          </HStack>
          <FormControl
            id="email"
            isRequired
            isInvalid={formik.touched.email && formik.errors.email}>
            <FormLabel>Email address</FormLabel>
            <div style={{ position: "relative", minHeight: "70px" }}>
              <Input
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Email"
                type="email"
                bg={"white.100"}
                size={{ base: "sm", md: "md" }}
              />
              <FormErrorMessage>
                <b>{formik.errors.email}</b>
              </FormErrorMessage>
            </div>
          </FormControl>
          <FormControl
            id="password"
            isRequired
            isInvalid={formik.touched.pass && formik.errors.pass}>
            <FormLabel>Password</FormLabel>
            <div style={{ position: "relative", minHeight: "70px" }}>
              <InputGroup>
                <Input
                  name="pass"
                  value={formik.values.pass}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  bg={"white.100"}
                  size={{ base: "sm", md: "md" }}
                />
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
          <Stack spacing={6}>
            <Button
              isLoading={isLoading}
              spinner={<BeatLoader size={8} color="white" />}
              onClick={formik.handleSubmit}
              colorScheme={"blue"}
              variant={"solid"}
              size={{ base: "sm", md: "md" }}
              type="submit" // Important for triggering form submission
            >
              Sign Up
            </Button>
          </Stack>
          <Stack pt={6}>
            <Link to="/login">
              <Highlight
                query="Login"
                styles={{ px: "1", py: "1", color: "blue.600" }}>
                Already a user? Login
              </Highlight>
            </Link>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}
