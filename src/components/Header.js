import { Center, Container, useColorMode, useMediaQuery, Stack, Flex, Box, Text, Button } from '@chakra-ui/react'
import React from 'react'

function Header() {

    const {colorMode} = useColorMode()
    const isDark = colorMode === "dark";
    const {isNotSmallerScreen} = useMediaQuery("(min-width: 767px)");

  return (
    <Flex w='100%'  mx="20" rounded="lg" bg="#eee4ee" _dark={{
        bg: "#3e3e3e",
      }} justifyContent="center" pb="10">
        <Flex direction={isNotSmallerScreen ? "row" : "column"} spacing="200px" p={isNotSmallerScreen ? "32" : "0"} alignSelf="flex-start">
            <Box mt={isNotSmallerScreen ? "0" : 16 } align="flex-start" spacing={3}>
                <Text fontWeight="bold">Hi, My name is</Text>
                <Text fontSize="7xl" fontWeight="bold" bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' >Wendy Ng</Text>
                <Text color={isDark ? "gray.200" : "gray.500"}>I am a web developer</Text>
            <Button p={7} color={isDark ? "gray.500" : "gray.100"} mt={7} bgGradient='linear(to-r, green.200, pink.500)'  _hover={{
                bgGradient: "linear(to-r, blue.200, pink.200)",
              }}onClick={() =>
                        window.open("https://www.dropbox.com/s/tje6qp0lzqo1mvq/Ng%2C%20Wendy-Resume.pdf?dl=0")
                    }>My Resume </Button>
            </Box>
        </Flex>
    </Flex>
  )
}

export default Header