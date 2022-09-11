import './App.css';
import { Flex, VStack, Heading } from "@chakra-ui/layout"
import { ColorModeContext, IconButton, useColorMode, Spacer } from '@chakra-ui/react';
import { FaSun, FaMoon, FaGithub, FaLinkedin} from 'react-icons/fa'
import Header from './components/Header';
import Contact from './components/Contact';
import About from './components/About';
import Project from './components/Project';

function App() {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === "dark"

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="8" size="md" color="pink.400">
          Wendy Ng
        </Heading>
        <Spacer></Spacer>
        <IconButton ml={2} colorScheme="pink"  icon={<FaLinkedin />} isRound="true"></IconButton>
        <IconButton ml={2} colorScheme="pink" icon={<FaGithub />} isRound="true"></IconButton>
        <IconButton ml={8} colorScheme="pink" icon={isDark ? <FaSun /> : <FaMoon />} isRound="true" onClick={toggleColorMode}></IconButton>
      </Flex>
        <Header></Header>
        <About></About>
        <Project></Project>
        <Contact></Contact>

    </VStack>
  );
}

export default App;
