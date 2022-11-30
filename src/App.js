import "./App.css";
import { useEffect } from "react";
import { Flex, VStack, Heading } from "@chakra-ui/layout";
import {
  ColorModeContext,
  IconButton,
  useColorMode,
  Spacer,
} from "@chakra-ui/react";
import { FaSun, FaMoon, FaGithub, FaLinkedin } from "react-icons/fa";
import Header from "./components/Header";
import Contact from "./components/Contact";
import About from "./components/About";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <VStack pt={2}>
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Experience></Experience>
      <Project></Project>
      <Skills></Skills>
      <Contact></Contact>
      <Footer></Footer>
    </VStack>
  );
}

export default App;
