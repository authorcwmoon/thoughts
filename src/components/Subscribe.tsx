import React, { useState, useRef } from 'react';
import {
  Heading,
  InputGroup,
  Box,
  Input,
  InputRightElement,
  Button,
  Text,
  useToast,
  useColorMode
} from '@chakra-ui/core';

const Subscribe = () => {
  const [loading, setLoading] = useState(false);
  const inputEl = useRef(null);
  const toast = useToast();
  const { colorMode } = useColorMode();
  const bgColor = {
    light: 'yellow.50',
    dark: 'yellow.900'
  };
  const borderColor = {
    light: 'yellow.200',
    dark: 'yellow.900'
  };

  const subscribe = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch('/.netlify/functions/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    setLoading(false);
    const { error } = await res.json();

    if (error) {
      toast({
        title: 'An error occurred.',
        description: error,
        status: 'error',
        duration: 3000,
        isClosable: true
      });

      return;
    }

    // trackGoal('JYFUFMSF', 0);
    // inputEl.current.value = '';
    toast({
      title: 'Success!',
      description: 'You are now subscribed.',
      status: 'success',
      duration: 3000,
      isClosable: true
    });
  };

  return (
    <Box
      border="1px solid"
      borderColor={borderColor[colorMode]}
      bg={bgColor[colorMode]}
      borderRadius={4}
      padding={6}
      my={4}
      alignSelf="center"
    >
      <Heading as="h5" size="lg" mb={2}>
        Read my journal.
      </Heading>
      <Text>
        Susbscribe for breakfast emails that taste best with coffee.
      </Text>
      <InputGroup size="md" mt={4}>
        <Input
          aria-label="Email for newsletter"
          placeholder="friend@gmail.com"
          ref={inputEl}
          type="email"
        />
        <InputRightElement width="6.75rem">
          <Button
            isLoading={loading}
            fontWeight="bold"
            h="1.75rem"
            size="sm"
            onClick={subscribe}
          >
            Subscribe
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default Subscribe;