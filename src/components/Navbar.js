import React from 'react'
import { Link, Flex, VStack, Heading  } from "@chakra-ui/layout"
import { ColorModeContext, IconButton, useColorMode, Spacer, Image, Box  } from '@chakra-ui/react';
import { FaSun, FaMoon, FaGithub, FaLinkedin} from 'react-icons/fa'



function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === "dark"

  return (
    <Flex w="100%" justify="center" align="center">
    <Heading ml="8" size="md" color="pink.400">
            <Image src='/android-chrome-512x512-removebg-pink.png' alt='logo' boxSize='80px'
    objectFit='cover'/>
    </Heading>
    <Spacer></Spacer>
    <Link id="icons" href='https://www.linkedin.com/in/wendyywng/' isExternal>
      <IconButton ml={2} colorScheme="pink"  icon={<FaLinkedin />} isRound="true"></IconButton>
    </Link>
    <Link id="icons" href='https://github.com/wendyyng' isExternal>
        <IconButton ml={2} colorScheme="pink" icon={<FaGithub />} isRound="true"></IconButton>
    </Link>
    <IconButton ml={2} colorScheme="pink" icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
  </Flex>
  )
}

export default Navbar