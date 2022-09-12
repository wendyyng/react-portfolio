import React from 'react'
import { Flex, VStack, Heading } from "@chakra-ui/layout"
import { ColorModeContext, IconButton, useColorMode, Spacer } from '@chakra-ui/react';
import { FaSun, FaMoon, FaGithub, FaLinkedin} from 'react-icons/fa'



function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === "dark"

  return (
    <Flex w="100%">
    <Heading ml="8" size="md" color="pink.400">
      Wendy Ng
    </Heading>
    <Spacer></Spacer>
    <IconButton ml={2} colorScheme="pink"  icon={<FaLinkedin />} isRound="true"></IconButton>
    <IconButton ml={2} colorScheme="pink" icon={<FaGithub />} isRound="true"></IconButton>
    <IconButton ml={8} colorScheme="pink" icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
  </Flex>
  )
}

export default Navbar