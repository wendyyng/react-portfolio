import React from 'react';
import { VStack } from '@chakra-ui/react';
import Navbar from './Navbar';
import Header from './Header';
import About from './About';
import Chat from './Chat';
import Experience from './Experience';
import Project from './Project';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';
import { Analytics } from '@vercel/analytics/react';

const MainPage = () => {
  return (
    <VStack pt={2}>
      <Navbar />
      <Header />
      <About />
      <Chat />
      <Experience />
      <Project />
      <Skills />
      <Contact />
      <Footer />
      <Analytics debug={false} />
    </VStack>
  );
};

export default MainPage;
