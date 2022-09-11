import { useColorMode, useMediaQuery, Stack, Flex, Box, Text, Button } from '@chakra-ui/react'
import React from 'react'

function Header() {

    const {colorMode} = useColorMode()
    const isDark = colorMode === "dark";
    const {isNotSmallerScreen} = useMediaQuery("(min-width:600px");

  return (
    <Stack>
         {/* <Circle position="absolute" bg="pink.100" opacity="0.7"
                w="300px" h="300px" alignSelf="flex-end" /> */}
        <Flex direction={isNotSmallerScreen ? "row" : "column"} spacing="200px" p={isNotSmallerScreen ? "32" : "0"} alignSelf="flex-start">
            <Box mt={isNotSmallerScreen ? "0" : 16 } align="flex-start">
                <Text fontSize="5x1" fontWeight="bold">Hi, My name is</Text>
                <Text fontSize="7xl" fontWeight="bold" bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' >Wendy Ng</Text>
                <Text color={isDark ? "gray.200" : "gray.500"}>I am a web developer</Text>
            <Button mt={7} bgGradient='linear(to-r, green.200, pink.500)' onClick={() =>
                        window.open("https://www.dropbox.com/s/tje6qp0lzqo1mvq/Ng%2C%20Wendy-Resume.pdf?dl=0")
                    }>My Resume </Button>
            </Box>
        </Flex>
    </Stack>
  )
}

export default Header