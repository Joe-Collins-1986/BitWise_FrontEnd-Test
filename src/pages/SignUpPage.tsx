import {ChangeEvent, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { Flex, Box, FormControl, FormLabel, Input,
        Stack, Button, Text, useColorModeValue,
        HStack, Heading, Alert, AlertIcon, Show, Hide 
      } from '@chakra-ui/react';
import { CiPen } from 'react-icons/ci'
import axios from 'axios';

interface SignUpData {
  username: string;
  password1: string;
  password2: string;
}

const SignUpPage = () => {

  const [signUpData, setSignUpData] = useState<SignUpData>({
    username: "",
    password1: "",
    password2: "",
  })

  const {username, password1, password2} = signUpData;

  const [errors, setErrors] = useState<{ [key: string]: string[] }>({});

  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSignUpData ({
      ...signUpData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post("dj-rest-auth/registration/", signUpData)
      .then((response) => {
        // Handle the successful response
        console.log(response.data);
        navigate('/login/')
      })
      .catch((err) => {
        // Handle the error
        console.log(err);
        setErrors(err.response?.data)
      })};

  return (
    <Flex
      minH={'100vh'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading 
            fontSize={'4xl'}
            textAlign='center'
            px={10}>
              Sign in to your account
          </Heading>
          <HStack
          align={'top'}
          justify={'center'}
          >
            <Hide below='sm'>
              <CiPen fontSize={'1.5rem'} />
              <Text fontSize={'lg'} >
                to enjoy all of our <Text as="span" color={'purple.400'}>posting</Text> features
              </Text>
              <CiPen fontSize={'1.5rem'} />
            </Hide>

          </HStack>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
          >

          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl id="username">
                <FormLabel>Username</FormLabel>
                <Input 
                  type="text"
                  name='username'
                  value={username}
                  onChange={handleChange} />
              </FormControl>

              { errors.username?.map((message, idx) => 
                  <Alert key={idx} status='warning'>
                    <AlertIcon />
                    {message}
                  </Alert>
              )}

              <FormControl id="password1">
                <FormLabel>Password</FormLabel>
                <Input 
                  type="password"
                  name='password1'
                  value={password1}
                  onChange={handleChange} />
              </FormControl>

              { errors.password1?.map((message, idx) => 
                  <Alert key={idx} status='warning'>
                    <AlertIcon />
                    {message}
                  </Alert>
              )}

              <FormControl id="password2">
                <FormLabel>Confirm Password</FormLabel>
                <Input 
                  type="password"
                  name='password2'
                  value={password2}
                  onChange={handleChange} />
              </FormControl>

              { errors.password2?.map((message, idx) => 
                  <Alert key={idx} status='warning'>
                    <AlertIcon />
                    {message}
                  </Alert>
              )}
                
              <Button
                type='submit'
                bg={'purple.400'}
                color={'white'}
                _hover={{
                  bg: 'purple.500',
                }}>
                Sign Up
              </Button>

            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}

export default SignUpPage
