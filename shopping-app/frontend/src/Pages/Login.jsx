import React, { useState } from "react";
import "../App.css";
import {
  Input,
  Box,
  FormLabel,
  FormControl,
  Stack,
  Heading,
  Text,
  Link,
  Button,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../redux/authReducer/action";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData)).then(() => {
      navigate(location.state);
    });

    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <Box textAlign={"center"} margin="1rem">
        <Heading>Login To Your Account</Heading>
        <Text>
          Or <Link>Start your 14 days trial</Link>
        </Text>
      </Box>
      <Box
        boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
        width="370px"
        margin="auto"
        padding="20px"
        paddingLeft="30px"
        marginTop="40px"
        lineHeight="40px"
      >
        <form className="form" onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Enter Your Email</FormLabel>
            <Input
              width="250px"
              height="30px"
              mt={4}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Enter Your Password</FormLabel>
            <Input
              width="250px"
              height="30px"
              mt={4}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </FormControl>

          <Stack isInline>
            <Box className="checkbox">
              <Input type="checkbox" />
              <p>Remember</p>
            </Box>
            <Box>
              <Link cursor="pointer">Forgot your password?</Link>
            </Box>
          </Stack>

          <Button
            width="250px"
            height="30px"
            mt={4}
            border="none"
            type="submit"
            cursor="pointer"
          >
            Sign In
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default Login;
