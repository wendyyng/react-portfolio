import './App.css';
import { Flex, VStack, Heading } from "@chakra-ui/layout"
import { ColorModeContext, IconButton, useColorMode, Spacer } from '@chakra-ui/react';
import { FaSun, FaMoon, FaGithub, FaLinkedin} from 'react-icons/fa'
import Header from './components/Header';
import Contact from './components/Contact';
import About from './components/About';
import Project from './components/Project';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Navbar from './components/Navbar';

function App() {
  
  return (
    <VStack  pt={2}>
        <Navbar></Navbar>
        <Header></Header>
        <About></About>
        <Project></Project>
        <Skills></Skills>
        <Contact></Contact>
        <Footer></Footer>
    </VStack>
  );
}

export default App;
